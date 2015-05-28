<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />

        <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />

        <!--The Stylesheets for the application-->
        <link rel="stylesheet" type="text/css" href="css/index.css" />
        <link rel="stylesheet" type="text/css" href="css/phonon.css" />
        <link rel="stylesheet" type="text/css" href="css/jquery.fancybox.css" />

        <!--Title of the Application-->
        <title>Shitapp</title>

        <!--Loading all the Javascript Files-->
        <script type="text/javascript" src="js/jquery-1.11.3.js"></script>

        <!--Loadfunction for Phonegap-->
        <script type="text/javascript" charset="utf-8">

        </script>

    </head>

    <body onLoad="onLoad();">

        <!--All our pages, javascript is found in plugincode.js-->
        <!--Switching pages is done by navigation.js-->
        <div class="app-page start" id="welkomscherm"></div>
        <div class="app-page" id="login"></div>
        <div class="app-page" id="registreer"></div>

        <!--After loggin in or register-->
        <div class="app-page" id="inloggenloading"></div>
        <div class="app-page" id="todo"></div>



    <!--Connect to all the Javascript Files-->
    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
    <script type="text/javascript" src="js/jquery.fancybox.pack.js"></script>
    <script type="text/javascript" src="js/phonon/support.js"></script>
    <script type="text/javascript" src="js/phonon/navigator.js"></script>
    <script type="text/javascript" src="main.js"></script>
    <script type="text/javascript">
        app.initialize();

        $(".fancybox").fancybox();
        $(".various").fancybox({
            maxWidth	: 1100,
            maxHeight	: 2000,
            fitToView	: false,
            width		: '100%',
            height		: '100%',
            autoSize	: false,
            closeClick	: false,
            openEffect	: 'none',
            closeEffect	: 'none'
        });

    </script>

    </body>
</html>
