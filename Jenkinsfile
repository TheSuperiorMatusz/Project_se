pipeline {
    agent {
        docker {
            image 'node:16'  
        }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm run build'
            }
        }

        stage('Deploy') {
			steps {
				sshPublisher(
					continueOnError: false, 
					failOnError: true,
					publishers: [
						sshPublisherDesc(
						configName: "frontend-deploy",
						transfers: [
							sshTransfer(sourceFiles: '**/*', excludes:'**/node_modules/**'),
							sshTransfer(execCommand: """cd /var/www/html \
                                                    && npm install \
													&& npm run build""")
						],
						verbose: true
						)
					]
				)

			discordSend description: "Jenkins Pipeline Build", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/921884411178418187/3st2Z5P9mxJnI2haY7eB9Pipwt8jn5noi8jm5AOt53B2DoxoxWaKVXXV0Dw5hmY91Da-"
			}
		}
    }
}

