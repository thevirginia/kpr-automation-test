pipeline {

    agent {

        docker { 

            image 'node:14'

            args '-u root'

        }

    }


    stages {

        stage('Clone the repo') {

            steps {

                git branch: 'dangelo', url: git@github.com:thevirginia/kpr-automation-test.git'

            }

        }

        stage('Install requirements') { 

           steps { 

               sh """ 

               apt-get -y update && 

               apt-get install -y python3 make gcc g++ curl postgresql-contrib libnotify-dev xauth xvfb 

               apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 

               apt-get install -y wget 

               wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb 

               apt-get install -y ./google-chrome-stable_current_amd64.deb 

               """ 

           } 

       } 

       stage('Run the Cypress scenario tests') { 

           steps { 

               sh """ 

               cd kpr-automation-test && 

               npm install && 

               export NODE_TLS_REJECT_UNAUTHORIZED=0 && 

               ./node_modules/.bin/cypress install --force && 

               ./node_modules/.bin/cypress run --spec cypress/features/kpr/widget.feature --env allure=true --browser chrome

               """ 

           } 

       } 

   } 

   post { 

       always { 

           cleanWs() 

       } 

   }
}
