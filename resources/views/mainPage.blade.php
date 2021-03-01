<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>GEITEN BOEDERIJ</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="{{ asset('css/mainPage.css') }}">

    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->

    <script type="text/javascript" src="{{ asset('js/modulSwitcher.js') }}" defer></script>
    <script type="text/javascript" src="{{ asset('js/modules.js') }}" defer></script>

</head>
<body >
<div class="mainPage__Container">
    <h1>GEITEN BOEDERIJ</h1>
    <div class="mainPage__menu">
        <div class="mainPage__menuItem" onclick="changeSelected('costs')">
            <p>Kiadások</p>
        </div><div class="mainPage__menuItem" onclick="changeSelected('revenues')">
            <p>Bevételek</p>
        </div><div class="mainPage__menuItem" onclick="changeSelected('resources')">
            <p>Erőforrások</p>
        </div><div class="mainPage__menuItem" onclick="changeSelected('orders')">
            <p>Rendelések</p>
        </div>
    </div>
    <div id="main-container" class="mainPage__contentContainer">
        <div class="mainContainer__welcome">
            <h4>Szia Pelda, jó hogy újra látunk!</h4>
        </div>


    </div>
</div>
</body>
</html>
