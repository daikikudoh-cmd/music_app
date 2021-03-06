<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- ajax -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <!-- bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
        <!-- ongaq js -->
        <script src="https://cdn.jsdelivr.net/gh/codeninth/ongaq-js/build/ongaq.js"></script>
        <!-- jquery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>


        <!-- Styles -->
        <style>
        html {
            height: 100%;
        }
        body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            /*background: #f9f8e9;*/
            background-image: url("./wall.png");
        }
        main {
            /*position: absolute;*/
            /*top: 200px;*/
            /*left: 50%;*/
            /*transform: translateX(-50%) translateY(-50%);*/
            width: 400px;
            height: 150px;
            display: flex;
            justify-content: center;
            flex-flow: column;
            align-items: center;
            background-color: rgba(255,255,255,.9);
            border-radius: 3px;
            box-shadow: 0 1px 10px rgba(0,0,0,.2);
            text-align:center;
            margin:0 auto;
        }
        h1 {
            font-size: 20px;
            font-weight: bold;
            color: #31494e;
            margin-top: 0;
        }
        ul {
            display: flex;
            justify-content: center;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        li .button {
            display: block;
            text-decoration: none;
            color: #33634f;
            background-color: #aeefc4;
            cursor: pointer;
            transition: all .1s ease;
            padding: 10px 20px;
            font-size: 20px;
            border-radius: 4px;
        }
        li .button:not(.start):not(.pause) {
            background-color: #eee;
            cursor: default;
            transition: none;
        }
        .button:before {
            display: inline;
            text-transform: capitalize;
        }
        .button.start:before {
            content: "start"
        }
        .button.pause:before {
            content: "pause"
        }
        .button:not(.start):not(.pause):before {
            content: "...loading"
        }
        .button.start:hover,
        .button.pause:hover {
            opacity: 0.7;
        }
        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 50px;
            text-align: center;
            font-size: 14px;
            background: rgba(255,255,255,.9);
            padding-top: 10px;
        }
        footer a {
            color: #22b4d6;
        }
        p {
            margin: 0;
        }

        .cssadd{
          color:red;
        }







        </style>
    </head>
    <body>



          <main>
              <h1>CHeck the Music !</h1>
              <ul>
                  <li><a id="button" class="button" href="javascript:;"></a></li>
              </ul>
          </main>



          BPM : <input type="text" name="bpm" class="selected_bpm">
















      <script src="js/index.js"></script>
    </body>
</html>
