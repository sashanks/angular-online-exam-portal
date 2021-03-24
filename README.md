# Online Test Application {#readme_start_page}

To see what is in latest release , see [CHANGELOG](CHANGELOG.md)

#### Pre-requisite

* JSON install `npm install -g json-server`
* Start JSON server `json-server --watch src/data/all-questions.json`

#### Setup 

* Checkout porject into your local folder.
* Open using Visual Studio Code.
* PWA enabled , hence can be installed as a application.
* Build project by using `ng build --prod`.
* Start project by using `http-server -p 8080 -c-1 dist/angular-online-exam-portal`

#### Workflow 

* In browser post `http://localhost:8080/`
![alt text](img/login.PNG)
* On browser Login to application using email "sashanka.singh@gmail.com" and password "sashanka1985".
* On next page click Submit.
![alt text](img/welcome.PNG)
* You will land on quiz page where you can select quizes on the top left
![alt text](img/quizpage.PNG)
* Answer questions.
* You can go to First/Prev/Next/Last question.
![alt text](img/quizpagenavigation.PNG)
* After time expires/or after you press Submit Quiz, you go to the review page.
![alt text](img/reviewquiz.PNG)

#### Extra
* App Installed.
![alt text](img/installtheapp.png)
* Online portal as Application.
![alt text](img/onlineexamasapp.PNG)
* Offline access.

