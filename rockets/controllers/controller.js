var rockets = new Array();
// ---------------- GLOBAL FUNCTION CREATE ROCKET---------------- //
function createRocket(rocket, code, thrusters, outputRocket) {
    var i;
    var existent = false;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === code) {
            existent = true;
            outputRocket.style.color = '#d43648';
            outputRocket.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " already exists. Cannot be created again.";
            break;
        }
    }
    if (existent === false) {
        rocket = new Rocket(code);
        var j;
        for (j = 0; j < thrusters.length; j++) {
            rocket.addThruster(thrusters[j]);
        }
        rockets.push(rocket);
        outputRocket.style.color = '#38a3b7';
        outputRocket.innerHTML = "Rocket " + rocket.code + " was created.<br><br>";
    }
}
// ---------------- GLOBAL FUNCTION ACCELERATE ROCKET ---------------- //
function accelerateRocket(code, outputRocket) {
    var i = 0;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === code && rockets[i].currentSpeed() < rockets[i].maxPower()) {
            rockets[i].accelerate();
            outputRocket.style.color = '#3ea648';
            outputRocket.innerHTML = "Accelerating rocket " + rockets[i].code + " ...<br><br>";
            break;
        }
        if (rockets[i].code === code && rockets[i].currentSpeed() === rockets[i].maxPower()) {
            outputRocket.style.color = '#d43648';
            outputRocket.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " cannot accelerate. It is at maximum power.";
            break;
        }
    }
}
// ---------------- GLOBAL FUNCTION DECELLERATE ROCKET ---------------- //
function decelerateRocket(code, outputRocket) {
    var i;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === code && rockets[i].currentSpeed() > 0) {
            rockets[i].decelerate();
            outputRocket.style.color = '#d43648';
            outputRocket.innerHTML = "Decelerating rocket " + rockets[i].code + " ...<br><br>";
            break;
        }
        if (rockets[i].code === code && rockets[i].currentSpeed() === 0) {
            outputRocket.style.color = '#d43648';
            outputRocket.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " cannot decelerate. Its current speed is 0.";
            break;
        }
    }
}
// ---------------- GLOBAL FUNCTION PRINT ROCKET ---------------- //
function printRocket(code, outputRocket) {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code === code) {
            outputRocket.style.color = '#fac027';
            outputRocket.innerHTML = "Rocket " + rockets[i].code + " has " + rockets[i].thrusters.length + " thrusters.<br>\n        Its current speed is " + rockets[i].currentSpeed() + "<br><br>";
        }
    }
}
// ------------- PRINT ALL ROCKETS ------------- //
function printAllRockets() {
    var outputAllRockets = document.getElementById('allRockets');
    outputAllRockets.innerHTML = '';
    for (var i = 0; i < rockets.length; i++) {
        outputAllRockets.innerHTML += "Rocket " + rockets[i].code + " has " + rockets[i].thrusters.length + " thrusters. Its current speed is " + rockets[i].currentSpeed() + ".<br><br>";
    }
}
// |||||||||||||||||||||||||||||||||||||||||||||||||| //
// |||||||||||||||||||| ROCKET 1 |||||||||||||||||||| //
// |||||||||||||||||||||||||||||||||||||||||||||||||| //
// ---------------- CREATE rocket 1 ---------------- //
function createRocket1() {
    var outputRocket1 = document.getElementById('rocket1');
    var rocket1 = new Rocket('32WESSDS');
    var code = '32WESSDS';
    var thruster1 = new Thruster(0, 10);
    var thruster2 = new Thruster(0, 30);
    var thruster3 = new Thruster(0, 80);
    var thrusters = [thruster1, thruster2, thruster3];
    createRocket(rocket1, code, thrusters, outputRocket1);
}
// ---------------- ACCELERATE rocket 1 ---------------- //
function accelerateRocket1() {
    var code = '32WESSDS';
    var outputRocket1 = document.getElementById('rocket1');
    accelerateRocket(code, outputRocket1);
}
// ---------------- DECELLERATE rocket 1 ---------------- //
function decelerateRocket1() {
    var code = '32WESSDS';
    var outputRocket1 = document.getElementById('rocket1');
    decelerateRocket(code, outputRocket1);
}
// ---------------- PRINT rocket 1 ---------------- //
function printRocket1() {
    var code = '32WESSDS';
    var outputRocket1 = document.getElementById('rocket1');
    printRocket(code, outputRocket1);
}
// |||||||||||||||||||||||||||||||||||||||||||||||||| //
// |||||||||||||||||||| ROCKET 2 |||||||||||||||||||| //
// |||||||||||||||||||||||||||||||||||||||||||||||||| //
// ---------------- CREATE rocket 2 ---------------- //
function createRocket2() {
    var outputRocket2 = document.getElementById('rocket2');
    var rocket2 = new Rocket('LDSFJA32');
    var code = 'LDSFJA32';
    var thruster1 = new Thruster(0, 30);
    var thruster2 = new Thruster(0, 40);
    var thruster3 = new Thruster(0, 50);
    var thruster4 = new Thruster(0, 50);
    var thruster5 = new Thruster(0, 30);
    var thruster6 = new Thruster(0, 10);
    var thrusters = [thruster1, thruster2, thruster3, thruster4, thruster5, thruster6];
    createRocket(rocket2, code, thrusters, outputRocket2);
}
// ---------------- ACCELERATE rocket 2 ---------------- //
function accelerateRocket2() {
    var code = 'LDSFJA32';
    var outputRocket2 = document.getElementById('rocket2');
    accelerateRocket(code, outputRocket2);
}
// ---------------- DECELLERATE rocket 2 ---------------- //
function decelerateRocket2() {
    var code = 'LDSFJA32';
    var outputRocket2 = document.getElementById('rocket2');
    decelerateRocket(code, outputRocket2);
}
// ---------------- PRINT rocket 2 ---------------- //
function printRocket2() {
    var code = 'LDSFJA32';
    var outputRocket2 = document.getElementById('rocket2');
    printRocket(code, outputRocket2);
}
