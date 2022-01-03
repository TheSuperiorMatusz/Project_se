import axios from 'axios'

export const state = () => {
  return {
    url: 'http://161.35.216.122/api'
  }
}

export const actions = {
  post: ({ commit, rootState, state, dispatch }, params) => {
    // eslint-disable-next-line
    return new Promise(async (resolve, reject) => {
      const headers = {
        headers: params[2] && params[2].guest ? { url: `${params[0]}` } : { Authorization: `Bearer ${rootState.auth.token}`, url: `${params[0]}` }
      }

      const request = await axios.post(`${state.url}/api/store${params[0]}`, params[1], headers).catch((error) => {
        if (!params[2]) { dispatch('error', error.response) };
        resolve(error.response)
      })

      if (request) {
        resolve(request)
      }
    })
  },
  get: ({ commit, rootState, state, dispatch }, params) => {
    // eslint-disable-next-line
    return new Promise(async (resolve, reject) => {
      const request = await axios.get(`${state.url}/api/store${params[0]}`).catch((error) => {
        dispatch('error', error.response)
      })

      resolve(request)
    })
  },
  file: ({ commit, rootState, state, dispatch }, params) => {
    // eslint-disable-next-line
    return new Promise(async (resolve, reject) => {
      const request = await axios.post(`${state.url}${params[0]}`, params[1]).catch((error) => {
        dispatch('error', error.response)
      })

      resolve(request)
    })
  },
  error: ({ commit, rootState, state, dispatch }, data) => {
    if (data.status === 401) {
      localStorage.clear()
      sessionStorage.clear()
      sessionStorage.setItem('error_401', '1')
      window.location.href = '/'
    } else if (data.status === 500) {
      dispatch('alert/fire', {
        title: 'Spróbuj ponownie później',
        content: 'Wystąpił nieoczekiwany błąd po stronie serwera',
        icon: 'fa-exclamation-triangle',
        type: 'error'
      }, { root: true })
    } else if (data.status === 422) {
      dispatch('alert/fire', {
        title: 'Błędne dane',
        content: 'Proszę uzupełnić brakujące dane',
        icon: 'fa-exclamation-triangle',
        type: 'warning'
      }, { root: true })
    } else if (data.status === 403) {
      dispatch('alert/fire', {
        title: 'Brak uprawnień',
        content: 'Nie posiadasz wymaganych uprawnień',
        icon: 'fa-exclamation-triangle',
        type: 'error'
      }, { root: true })
    } else if (data.data && data.data.status === 'error' && data.data.message) {
      dispatch('alert/fire', {
        title: 'Wystąpił błąd',
        content: data.data.message,
        icon: 'fa-exclamation-triangle',
        type: 'error'
      }, { root: true })
    } else {
      dispatch('alert/fire', {
        title: 'Niezidentyfikowany błąd',
        content: `Doszło do błędu. Kod błędu: ${data.status}`,
        icon: 'fa-exclamation-triangle',
        type: 'error'
      }, { root: true })
    }
  }
}
