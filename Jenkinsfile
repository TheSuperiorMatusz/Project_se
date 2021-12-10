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
		sh 'npm install --production'
		sh 'npm run build'
		sh 'npm run start' 
            }
        }
    }
}

