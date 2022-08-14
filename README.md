# Template connection user all secure with middlewear (captcha and AWP token) and realtime Database

Fullstack template app with dependencie includes in .json. Easy deploy thanks to a bash script.

## Requirements
[Create mongo account and new cluster](https://www.mongodb.com)

[Create Pusher acount and new channel](https://pusher.com/)

[Create an Heroku account](https://dashboard.heroku.com/)

### Technologies

- MongoDB API
- Pusher trigger
- Vue.js / Vuex
- Node.js
- Express.js

### Deployement on Heroku
- Heroku

# Settings to do before everythings:

## Access to your mongo database :
On mongoDB create new database, new cluster, go to netword acess set : all IP then go to databse access and create your acount with name and password

Set .env File :
---
    cd Backend/.env

### Edit :

---
    MONGOUSER=""
    MONGOPASSWORD=""

Back on mongo go to database and click on connect and connect your application and look at the two names after "@" separate by a "."

Go to :
---
    cd Backend/.env

### Edit :

---
    CLUSTERNAME=""
    RANDOMMONGONAME=""

## Access to your mongo database in real time with Pusher:
On pusher create a new channel and copy variable variable keys

Set .env File :
---
    cd Backend/.env

### Edit :

---
    PUSHERAPPID=""
    PUSHERKEY=""
    PUSHERSECRET=""
    PUSHERCLUSTER=""

Go to :
---
    cd Frontend/src/components/HomePage.vue

### Edit :

---
    var pusher = new Pusher('', {
    cluster: ''
    });

## Access to your authorization middlewear :
Generate on your browser a [random String](https://www.random.org/strings/) and copy paste it here :

Set .env File :
---
    cd Backend/.env

### Edit :

---
    TOKEN=""

## Access to your recaptcha middlewear :
Go to [recaptcha google](https://www.google.com/recaptcha/about/) create an acount and create a recaptcha then :

Set UserConnect.vue.data :
---
    cd Frontend/src/components/UserConnect.vue
    <script>
        data() {
            return {

### Edit with the client key :

---
    sitekey: ''

Set .env File :
---
    cd Backend/.env

### Edit with the server key :

---
    RECAPTACHASERVEUR=''

# To run in Local :

In the root :
---
    cd ../

On every UNIX OS to run the app in local just run (Back is runnning on port 5000 and Front on port 8081) :
---
    bash connect
In your web application go to : http://localhost:8081/ to access to your front app and : http://localhost:5000/ to access to your back app (it opens automatically)

And to shut down the app in local just run : 
---
    bash disconnect

# To deploy the app :

## Create your heroku repositiry :
On heroku click on new app and copy the name you enter then :

Set deploy-init file :
---
    cd deploy-init

### Edit (line 13):

---
    heroku git:remote -a ""

In the root :
---
    cd ../

And to deploy the app for the fist time just run  :
---
    bash deploy-init

And to deploy the app for all the other time time just run  :
---
    bash deploy-common