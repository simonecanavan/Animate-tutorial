# Animate-tutorial
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Titillium+Web" rel="stylesheet">
    <title>Website</title>
    <style>

        .content{
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            padding: 25% 0 35% 0;
            background-color:floralwhite;
        }

        .moving-object{
            font-size: 500%;
            font-family: 'Indie Flower', cursive;
            color: coral;
            transition: all .2s;
        }

        .moving-object.bounce{
            animation: bounce 1.5s infinite;
        }

        .moving-object.rotate{
            animation: rotate 2s infinite;
        }

        .moving-object.flash{
            animation: flash 1s infinite;
        }

        .moving-object.pulse{
            animation: pulse .5s infinite;
        }

        .moving-object.rubberband{
            animation: rubberband 3s;
        }

        .moving-object.swing{
            animation: swing 3s;
        }

        .moving-object.slideout{
            animation: slideout 3s;
        }

        .moving-object.hinge{
            animation: hinge 3s;
        }

        .moving-object.jelly{
            animation: jelly 1s infinite;
        }

        .moving-object.shake{
            animation: shake 1s infinite;
        }

        select{
            width: 40%;
            flex: 1 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 200%;
            font-family: 'Titillium Web', sans-serif;
            border:chocolate solid 1px;
            color: coral;
        }

        .try{
            margin-top: 2%;
            width: 12%;
            font-size: 150%;
            background-color: coral;
            color: white;
            border-radius: 5px;
            font-family: 'Titillium Web', sans-serif;
        }

        @keyframes bounce {
            0%,
            20%,
            53%,
            80%{
                animation-timing-function: cubic-bezier(.215, .61, .355, 1);
                transform: none
            }
            40%,
            43% {
                animation-timing-function: cubic-bezier(.755, .05, .855, .06);
                transform: translate(0, -50px)
            }
            70% {
                animation-timing-function: cubic-bezier(.755, .05, .855, .06);
                transform: translate(0, -25px)
            }
            90% {
                transform: translate(0, -4px)
            }
        }

        @keyframes rotate {
            0%{
                transform: rotate(0);
            }
            50%{
                transform: rotate(360deg);
            }
        }

        @keyframes flash {
            0%,
            50%{
                opacity: 1
            }
            25%,
            75% {
                opacity: 0
            }
        }

        @keyframes pulse {
            0% {
                transform: scaleX(1)
            }
            50% {
                transform: scale(1.5, 1.5)
            }
            to {
                transform: scaleX(1)
            }
        }

        @keyframes rubberband {
            0% {
                transform: scaleX(1)
            }
            30% {
                transform: scale(1.25, .75)
            }
            40% {
                transform: scale(.75, 1.25)
            }
            50% {
                transform: scale(1.15, .85)
            }
            65% {
                transform: scale(.95, 1.05)
            }
            75% {
                transform: scale(1.05, .95)
            }
            100% {
                transform: scaleX(1)
            }
        }

        @keyframes swing {
            20% {
                transform: rotate(15deg)
            }
            40% {
                transform: rotate(-10deg)
            }
            60% {
                transform: rotate(5deg)
            }
            80% {
                transform: rotate(-5deg)
            }
            100% {
                transform: rotate(0deg)
            }
        }

        @keyframes slideout {
            0% {
                transform: translateY(0);
                opacity: 1;
            }
            100% {
                transform: translateY(-100%);
                opacity: 0;
            }
        }

        @keyframes hinge {
            0% {
                transform-origin: top left;
                animation-timing-function: ease-in-out
            }
            20%,
            60% {
                transform: rotate(80deg);
                transform-origin: top left;
                animation-timing-function: ease-in-out
            }
            40%,
            80% {
                transform: rotate(60deg);
                transform-origin: top left;
                animation-timing-function: ease-in-out;
                opacity: 1
            }
            100% {
                transform: translate(0, 700px);
                opacity: 0
            }
        }

        @keyframes jelly {
            0%,
            11% {
                transform: none
            }
            22% {
                transform: skewX(-12.5deg) skewY(-12.5deg)
            }
            33% {
                transform: skewX(6.25deg) skewY(6.25deg)
            }
            44% {
                transform: skewX(-3.125deg) skewY(-3.125deg)
            }
            55% {
                transform: skewX(1.5625deg) skewY(1.5625deg)
            }
            66% {
                transform: skewX(-.78125deg) skewY(-.78125deg)
            }
            77% {
                transform: skewX(.390625deg) skewY(.390625deg)
            }
            88% {
                transform: skewX(-.1953125deg) skewY(-.1953125deg)
            }
        }

        @keyframes shake {
        0%{
            transform: none
        }
        10%,
        30%,
        50%,
        70%,
        90% {
            transform: translate(-10px, 0)
        }
        20%,
        40%,
        60%,
        80% {
            transform: translate(10px, 0)
        }
    }

    
    </style>

</head>

<body>

    <div class="content">

        <h1 class="moving-object">Animate Me!</h1>

            <select class="animation-selection">
                <option selected disabled>Choose an Animation</option>
                <option value="bounce">Bounce</option>
                <option value="rotate">Rotate</option>
                <option value="flash">Flash</option>
                <option value="pulse">Pulse</option>
                <option value="rubberband">Rubberband</option>
                <option value="swing">Swing</option>
                <option value="slideout">Slide Out</option>
                <option value="hinge">Hinge</option>
                <option value="jelly">Jelly</option>
                <option value="shake">Shake</option>
            </select>

        <button class="try" onclick="applyClass()">Try Me!</button>

    </div>
    
    <script src="js/scripts.js">
        
    </script>
</body>
</html>
