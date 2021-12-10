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
		sh 'npm ci'
		sh 'npm run dev' 
            }
        }
    }
}

