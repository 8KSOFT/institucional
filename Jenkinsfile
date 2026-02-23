pipeline {
    agent any

    stages {
        stage('Definir Ambiente') {
            steps {
                script {
                    def branchName = scm.branches[0].name.replace('*/', '')
                    echo "Branch detectada: ${branchName}"

                    if (branchName != 'hml' && branchName != 'main' && branchName != 'producao') {
                        error "Branch não reconhecida: ${branchName}. Suportadas: 'hml', 'main' ou 'producao'."
                    }

                    // Sistema sem env - IP fixo do servidor de deploy (igual ao pipeline original)
                    env.SERVER_DEPLOY_IP = '144.22.165.128'
                    echo "Servidor de deploy: ${env.SERVER_DEPLOY_IP}"
                }
            }
        }

        stage('Baixar fonte') {
            steps {
                script {
                    def appPath = '/home/ubuntu/apps/institucional-8ksoft'

                    sh """
                        ssh ubuntu@${env.SERVER_DEPLOY_IP} "
                            rm -rf ${appPath};
                            mkdir -p ${appPath};
                            chown ubuntu:ubuntu ${appPath} 2>/dev/null || true
                        "
                        scp -r /var/jenkins_home/workspace/${env.JOB_NAME}/. ubuntu@${env.SERVER_DEPLOY_IP}:${appPath}
                    """
                }
            }
        }

        stage('Remover containers antigos') {
            steps {
                script {
                    def appPath = '/home/ubuntu/apps/institucional-8ksoft'

                    sh """
                        ssh ubuntu@${env.SERVER_DEPLOY_IP} "cd ${appPath} && sudo docker compose down --rmi local || true"
                    """
                }
            }
        }

        stage('Build e Inicialização') {
            steps {
                script {
                    def appPath = '/home/ubuntu/apps/institucional-8ksoft'

                    echo "🔨 Build e deploy da aplicação..."
                    sh """
                        ssh ubuntu@${env.SERVER_DEPLOY_IP} "cd ${appPath} && sudo docker compose up --build -d && echo '✅ Aplicação em execução'"
                    """
                }
            }
        }

        stage('Validar Saúde') {
            steps {
                script {
                    def appPath = '/home/ubuntu/apps/institucional-8ksoft'

                    echo "⏳ Aguardando aplicação iniciar (30 segundos)..."
                    sleep(time: 30, unit: 'SECONDS')

                    sh """
                        ssh ubuntu@${env.SERVER_DEPLOY_IP} "
                            cd ${appPath};
                            if ! sudo docker ps | grep -q institucional-8ksoft; then
                                echo '❌ Container institucional-8ksoft não está rodando!';
                                sudo docker compose logs --tail=50;
                                exit 1;
                            fi;
                            echo '✅ Container institucional-8ksoft está rodando';
                        "
                    """
                }
            }
        }

        stage('Avisar') {
            steps {
                script {
                    def emailSubject
                    def emailBody
                    def recipientEmail

                    if (currentBuild.currentResult == "SUCCESS") {
                        emailSubject = "✅ Sucesso em ${env.JOB_NAME} - Build #${env.BUILD_NUMBER}"
                        emailBody = """
                        <h2>Deploy realizado com sucesso!</h2>
                        <p><strong>Projeto:</strong> ${env.JOB_NAME}</p>
                        <p><strong>Build:</strong> #${env.BUILD_NUMBER}</p>
                        <p><strong>Branch:</strong> ${scm.branches[0].name.replace('*/', '')}</p>
                        <p><strong>Status:</strong> <span style="color: green;">SUCESSO</span></p>
                        <p><strong>URL:</strong> <a href="${env.BUILD_URL}">Ver detalhes</a></p>
                        """
                        recipientEmail = "jader@8ksoft.com,marcelo@8ksoft.com,lucas.rosa@8ksoft.com"
                    } else {
                        emailSubject = "❌ FALHA no Build #${env.BUILD_NUMBER} do projeto ${env.JOB_NAME}"
                        emailBody = """
                        <h2>Deploy falhou!</h2>
                        <p><strong>Projeto:</strong> ${env.JOB_NAME}</p>
                        <p><strong>Build:</strong> #${env.BUILD_NUMBER}</p>
                        <p><strong>Branch:</strong> ${scm.branches[0].name.replace('*/', '')}</p>
                        <p><strong>Status:</strong> <span style="color: red;">${currentBuild.result}</span></p>
                        <p><strong>URL:</strong> <a href="${env.BUILD_URL}">Ver detalhes do erro</a></p>
                        """
                        recipientEmail = "jader@8ksoft.com,marcelo@8ksoft.com,lucas.rosa@8ksoft.com"
                    }

                    try {
                        emailext (
                            subject: emailSubject,
                            body: emailBody,
                            to: recipientEmail,
                            attachLog: true,
                            mimeType: 'text/html'
                        )
                        echo "✅ Email enviado com sucesso"
                    } catch (Exception e) {
                        echo "⚠️ Falha ao enviar email: ${e.getMessage()}"
                    }
                }
            }
        }
    }
}
