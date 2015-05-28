/**
 * Created by Sophie on 18-5-15.
 */

//----------------------------------------ONLOAD OF THE PAGE FOR DEVICE READY------------------------------------------
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, true);
}

//Check if it is Cordova
var isCordova = typeof window.cordova !== 'undefined' ? true : false;

//Deciding what it should load
if(isCordova) {
    document.addEventListener('deviceready', onDeviceReady, false);
} else {
    window.addEventListener('load', onDeviceReady, false);
}

//everything that needs to load for the application
function onDeviceReady() {
    Phonon.Navigator().start('welkomscherm');                    //load the content for the indexscreen: welkomscherm.html
}

//--------------------------------------------HERE IS ALL THE EXTRA CODE FOR PHONON-------------------------------------

//function to render some text on a element
function write (el, text) {
    if(!('textContent' in el)) {
        el.innerText = text;
    } else {
        el.textContent = text;
    }
}

//the first content for the page loaded in index
Phonon.Navigator({
    defaultPage: 'welkomscherm',
    templatePath: 'pages',
    pageAnimations: true
});

//functions for the first page
//don't need much because we don't have to use a link to load this content to click on, it's the homepage.
//If you go to the second page (down) there are more functions necessary to load it.
Phonon.Navigator().on({page: 'welkomscherm', template: 'welkomscherm', asynchronous: false}, function(activity) {

    activity.onCreate(function(self, el, req) {
        console.log('welkomscherm: onCreate');                       //loads when you open the page

        //hide the buttons at the beginning
        $(".deviceready.startloader").hide();
        //self.runReady();
    });

    activity.onReady(function(self, el, req) {

        //hide loading gif and show buttons to login
        setTimeout(function(){
            $(".loading").fadeOut("slow", function() {
                $(".deviceready.startloader").fadeIn("slow");
            });
        }, 2000);

        console.log('welkomscherm: onReady');                        //loads when you open the page
    });

    activity.onTransitionEnd(function() {
        console.log('welkomscherm: onTransitionEnd');                //loads when you open the page
    });

    activity.onQuit(function(self) {
        console.log('welkomscherm: onQuit');                         //loads when you leave the page
    });

    activity.onHidden(function(el) {
        console.log('welkomscherm: onHidden');                       //loads when you leave the page
    });
});

//Loginscreen
Phonon.Navigator().on({page: 'login', template: 'login', asynchronous: false}, function(activity) {
    activity.onCreate(function(self, el, req) {
        console.log('login: onCreate');                       //loads when you open the page
        self.runReady();
    });
});

//Registreet screen
Phonon.Navigator().on({page: 'registreer', template: 'registreer', asynchronous: false}, function(activity) {
    activity.onCreate(function(self, el, req) {
        console.log('registreer: onCreate');                       //loads when you open the page
        self.runReady();
    });
});

//Loading after loggin in
Phonon.Navigator().on({page: 'inloggenloading', template: 'inloggenloading', asynchronous: false}, function(activity) {

    activity.onCreate(function(self, el, req) {
        console.log('inloggenloading: onCreate');                       //loads when you open the page

        //hide the buttons at the beginning
        $(".header-bar").hide();
        $(".deviceready").hide();
        $(".iconsbottom").hide();
        self.runReady();
    });

    activity.onReady(function(self, el, req) {

        //hide loading gif and show buttons to login
        setTimeout(function(){
            $(".loadingscreen").fadeOut("slow", function() {
                $(".header-bar").fadeIn("slow");
                $(".deviceready").fadeIn("slow");
                $(".iconsbottom").fadeIn("slow");
            });
        }, 2000);

        console.log('inloggenloading: onReady');                        //loads when you open the page
    });

});

//To Do
Phonon.Navigator().on({page: 'todo', template: 'todo', asynchronous: false}, function(activity) {
    activity.onCreate(function(self, el, req) {
        console.log('todo: onCreate');                       //loads when you open the page
        self.runReady();
    });
});