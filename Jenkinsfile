pipeline {
    agent {
        docker {
            image 'node'  
        }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage('Build') { 
            steps {
		sh 'npm install'
		sh 'npm run dev' 
            }
        }
    }
}

