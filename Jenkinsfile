pipeline {
    agent any

    stages {
        stage('Baixar fonte') {
            steps {
                    sh 'ssh ubuntu@172.17.0.1 "rm -rf /home/ubuntu/apps/institucional-8ksoft"'
                    sh 'ssh ubuntu@172.17.0.1 "mkdir -p /home/ubuntu/apps/institucional-8ksoft"'
                    sh 'scp -r /var/jenkins_home/workspace/institucional-8ksoft/. ubuntu@172.17.0.1:/home/ubuntu/apps/institucional-8ksoft'
            }
        }
        stage('Definir Ambiente e Configurar .env') {
            steps {
                script {
                    // Lendo a credencial do Resend usando withCredentials
                    withCredentials([string(credentialsId: 'NEXT_PUBLIC_RESEND_API_KEY', variable: 'NEXT_PUBLIC_RESEND_API_KEY')]) {
                        def appPath = '/home/ubuntu/apps/institucional-8ksoft'
                        
                        // Criar arquivo .env.local no servidor
                        sh """
                            ssh ubuntu@172.17.0.1 "cd ${appPath} && echo 'NEXT_PUBLIC_RESEND_API_KEY=${NEXT_PUBLIC_RESEND_API_KEY}' > .env.local"
                        """
                        
                        // Verificar conteúdo do arquivo
                        sh "ssh ubuntu@172.17.0.1 'cat ${appPath}/.env.local'"
                    }
                }
            }
        }
        stage('Remover docker app') {
            steps {
                        sh 'ssh ubuntu@172.17.0.1 "cd /home/ubuntu/apps/institucional-8ksoft && sudo docker compose down --rmi local"'
            }
        }
        stage('Build e Inicialização') {
            steps {
                        sh 'ssh ubuntu@172.17.0.1 "cd /home/ubuntu/apps/institucional-8ksoft; docker compose up --build -d"'
            }
        }
        stage('Avisar') {
            steps {
              script {
                def emailSubject
                def emailBody
                def recipientEmail

                if (currentBuild.currentResult == "SUCCESS") {
                    emailSubject = "SUCESSO em ${env.JOB_NAME} - Build #${env.BUILD_NUMBER}"
                    emailBody = "Voce pode ver os detalhes em  ${env.BUILD_URL}<br>"
                    recipientEmail = "lucas.rosa@8ksoft.com,marcelo@8ksoft.com"
                }
                else {
                    emailSubject = "FALHA!!! Problemas no Build #${env.BUILD_NUMBER} do projeto ${env.JOB_NAME} - "
                    emailBody = "Voce pode ver os detalhes em  ${env.BUILD_URL}<br> "
                    recipientEmail = "lucas.rosa@8ksoft.com,marcelo@8ksoft.com,jader.marasca@gmail.com"
                }
    
                emailext (
                    subject: emailSubject,
                    body: emailBody,
                    to: recipientEmail,
                    attachLog: true, attachmentsPattern: "/var/jenkins_home/jobs/${env.JOB_NAME}/builds/${env.BUILD_NUMBER}/log"
                )
               }  
            }
      }
    }
}
