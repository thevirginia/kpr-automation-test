pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                script {
                    // Define el nombre de usuario y el token
                    def gitUsername = 'Dangelo Ferrieri'
                    def gitToken = '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'

                    // Define la URL del repositorio. Asegúrate de reemplazar 'nombre-usuario' y 'nombre-repositorio'
                    def repoUrl = "https://github.com/thevirginia/kpr-automation-test.git"

                    // Clona el repositorio
                    git credentialsId: '13', url: repoUrl
                }
            }
        }
        stage('Ejecucion de Tests'){
            steps{
                script{
                    try{
                        bat 'npx cypress run --spec cypress/features/kpr/detailKeepers.feature --env allure=true --browser chrome'
                    }catch (Exception e){
                        echo "Error during test execution"
                    }
                }
            }
        }

    }
    
}
