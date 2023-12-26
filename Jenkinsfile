pipeline {
    agent any

    tools{ nodejs "nodejs" }

    stages {
        stage('instalar dependencias') {
            steps {
                script {
                    sh 'npm ci'
                  
                }
            }
        }
        stage('Ejecucion de Tests'){
            steps{
                script{
                    try{
                        sh 'npx cypress run --spec cypress/features/kpr/widget.feature --env allure=true --browser chrome'
                    }catch (Exception e){
                        echo "Error during test execution"
                    }
                }
            }
        }

    }
    
}
