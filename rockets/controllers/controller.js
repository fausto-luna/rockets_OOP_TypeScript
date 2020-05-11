var rockets = new Array();
// ---------------- GLOBAL FUNCTION CREATE ROCKET---------------- //
function createRocket(button) {
    var btn = button.id;
    if (btn === 'create1') {
        var outputRocket1 = document.getElementById('rocket1');
        var code = '32WESSDS';
        var thruster1 = new Thruster(0, 10);
        var thruster2 = new Thruster(0, 30);
        var thruster3 = new Thruster(0, 80);
        var thrusters = [thruster1, thruster2, thruster3];
        create(code, thrusters);
    }
    if (btn === 'create2') {
        var code = 'LDSFJA32';
        var thruster1 = new Thruster(0, 30);
        var thruster2 = new Thruster(0, 40);
        var thruster3 = new Thruster(0, 50);
        var thruster4 = new Thruster(0, 50);
        var thruster5 = new Thruster(0, 30);
        var thruster6 = new Thruster(0, 10);
        var thrusters = [thruster1, thruster2, thruster3, thruster4, thruster5, thruster6];
        create(code, thrusters);
    }
    function create(code, thrusters) {
        var i;
        var existent = false;
        for (i = 0; i < rockets.length; i++) {
            if (rockets[i].code === code) {
                existent = true;
                var outputRocket = document.getElementById('rocket' + (i + 1));
                outputRocket.style.color = '#d43648';
                outputRocket.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " already exists. Cannot be created again.";
                break;
            }
        }
        if (existent === false) {
            var rocket = new Rocket(code);
            var j;
            for (j = 0; j < thrusters.length; j++) {
                rocket.addThruster(thrusters[j]);
            }
            rockets.push(rocket);
            var outputRocket = document.getElementById('rocket' + (i + 1));
            outputRocket.style.color = '#38a3b7';
            outputRocket.innerHTML = "Rocket " + rocket.code + " was created.<br><br>";
        }
    }
}
// ---------------- GLOBAL FUNCTION ACCELERATE ROCKET ---------------- //
function accelerateRocket(button) {
    var btn = button.id;
    if (btn === 'accelerate1') {
        accelerate('32WESSDS');
    }
    if (btn === 'accelerate2') {
        accelerate('LDSFJA32');
    }
    function accelerate(code) {
        var i;
        for (i = 0; i < rockets.length; i++) {
            if (rockets[i].code === code && rockets[i].currentSpeed() < rockets[i].maxPower()) {
                rockets[i].accelerate();
                var outputRocket = document.getElementById('rocket' + (i + 1));
                outputRocket.style.color = '#3ea648';
                outputRocket.innerHTML = "Accelerating rocket " + rockets[i].code + " ...<br><br>";
                break;
            }
            if (rockets[i].code === code && rockets[i].currentSpeed() === rockets[i].maxPower()) {
                var outputRocket = document.getElementById('rocket' + (i + 1));
                outputRocket.style.color = '#d43648';
                outputRocket.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " cannot accelerate. It is at maximum power.";
                break;
            }
        }
    }
}
// ---------------- GLOBAL FUNCTION DECELLERATE ROCKET ---------------- //
function decelerateRocket(button) {
    var btn = button.id;
    if (btn === 'decelerate1') {
        decelerate('32WESSDS');
    }
    if (btn === 'decelerate2') {
        decelerate('LDSFJA32');
    }
    function decelerate(code) {
        var i;
        for (i = 0; i < rockets.length; i++) {
            if (rockets[i].code === code && rockets[i].currentSpeed() > 0) {
                rockets[i].decelerate();
                var outputRocket = document.getElementById('rocket' + (i + 1));
                outputRocket.style.color = '#d43648';
                outputRocket.innerHTML = "Decelerating rocket " + rockets[i].code + " ...<br><br>";
                break;
            }
            if (rockets[i].code === code && rockets[i].currentSpeed() === 0) {
                var outputRocket = document.getElementById('rocket' + (i + 1));
                outputRocket.style.color = '#d43648';
                outputRocket.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " cannot decelerate. Its current speed is 0.";
                break;
            }
        }
    }
}
// ---------------- GLOBAL FUNCTION PRINT ROCKET ---------------- //
function printRocket(button) {
    var btn = button.id;
    if (btn === 'print1') {
        print('32WESSDS');
    }
    if (btn === 'print2') {
        print('LDSFJA32');
    }
    function print(code) {
        for (var i = 0; i < rockets.length; i++) {
            if (rockets[i].code === code) {
                var outputRocket = document.getElementById('rocket' + (i + 1));
                outputRocket.style.color = '#fac027';
                outputRocket.innerHTML = "Rocket " + rockets[i].code + " has " + rockets[i].thrusters.length + " thrusters.<br>\n                                            Its current speed is " + rockets[i].currentSpeed() + "<br><br>";
            }
        }
    }
}
// ------------- PRINT ALL ROCKETS ------------- //
function printAllRockets() {
    var outputAllRockets = document.getElementById('allRockets');
    outputAllRockets.innerHTML = '';
    outputAllRockets.style.color = '#fac027';
    for (var i = 0; i < rockets.length; i++) {
        outputAllRockets.innerHTML += "Rocket " + rockets[i].code + " has " + rockets[i].thrusters.length + " thrusters. Its current speed is " + rockets[i].currentSpeed() + ".<br><br>";
    }
}
