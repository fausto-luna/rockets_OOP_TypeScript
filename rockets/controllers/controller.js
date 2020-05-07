var rockets = new Array();
var outputRocket1 = document.getElementById('rocket1');
var outputRocket2 = document.getElementById('rocket2');
// ---------------- CREATE ROCKET 1 ---------------- //
function createRocket1() {
    var i;
    var existent = false;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === '32WESSDS') {
            existent = true;
            outputRocket1.style.color = '#d43648';
            outputRocket1.innerHTML = "ALERT!<br>Rocket 32WESSDS already exists. Cannot be created again.";
            break;
        }
    }
    if (existent === false) {
        var rocket1 = new Rocket('32WESSDS');
        rocket1.addThruster(new Thruster(0, 10));
        rocket1.addThruster(new Thruster(0, 30));
        rocket1.addThruster(new Thruster(0, 80));
        rockets.push(rocket1);
        outputRocket1.style.color = '#38a3b7';
        outputRocket1.innerHTML = "Rocket " + rocket1.code + " was created.<br><br>";
    }
}
// ---------------- CREATE ROCKET 2 ---------------- //
function createRocket2() {
    var i;
    var existent = false;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === 'LDSFJA32') {
            existent = true;
            outputRocket2.style.color = '#d43648';
            outputRocket2.innerHTML = "ALERT!<br>Rocket LDSFJA32 already exists. Cannot be created again.";
            break;
        }
    }
    if (existent === false) {
        var rocket2 = new Rocket('LDSFJA32');
        rocket2.addThruster(new Thruster(0, 30));
        rocket2.addThruster(new Thruster(0, 40));
        rocket2.addThruster(new Thruster(0, 50));
        rocket2.addThruster(new Thruster(0, 50));
        rocket2.addThruster(new Thruster(0, 30));
        rocket2.addThruster(new Thruster(0, 10));
        rockets.push(rocket2);
        outputRocket2.style.color = '#38a3b7';
        outputRocket2.innerHTML = "Rocket " + rocket2.code + " was created.<br><br>";
    }
}
// ---------------- ACCELERATE ROCKET 1 ---------------- //
function accelerateRocket1() {
    var i = 0;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === '32WESSDS' && rockets[i].currentSpeed() < 120) {
            rockets[i].accelerate();
            outputRocket1.style.color = '#3ea648';
            outputRocket1.innerHTML = "Accelerating rocket " + rockets[i].code + " ...<br><br>";
            break;
        }
        if (rockets[i].code === '32WESSDS' && rockets[i].currentSpeed() === 120) {
            outputRocket1.style.color = '#d43648';
            outputRocket1.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " cannot accelerate. It is at maximum power.";
            break;
        }
    }
}
// ---------------- DECELLERATE ROCKET 1 ---------------- //
function decelerateRocket1() {
    var i = 0;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === '32WESSDS' && rockets[i].currentSpeed() > 0) {
            rockets[i].decelerate();
            outputRocket1.style.color = '#d43648';
            outputRocket1.innerHTML = "Decelerating rocket " + rockets[i].code + " ...<br><br>";
            break;
        }
        if (rockets[i].code === '32WESSDS' && rockets[i].currentSpeed() === 0) {
            outputRocket1.style.color = '#d43648';
            outputRocket1.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " cannot decelerate. Its current speed is 0.";
            break;
        }
    }
}
// ---------------- PRINT ROCKET 1 ---------------- //
function printRocket1() {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code === '32WESSDS') {
            outputRocket1.style.color = '#fac027';
            outputRocket1.innerHTML = "Rocket " + rockets[i].code + " has " + rockets[i].thrusters.length + " thrusters.<br>\n        Its current speed is " + rockets[i].currentSpeed() + "<br><br>";
        }
    }
}
// ---------------- ACCELERATE ROCKET 2 ---------------- //
function accelerateRocket2() {
    var i = 0;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === 'LDSFJA32' && rockets[i].currentSpeed() < 210) {
            rockets[i].accelerate();
            outputRocket2.style.color = '#3ea648';
            outputRocket2.innerHTML = "Accelerating rocket " + rockets[i].code + " ...<br><br>";
            break;
        }
        if (rockets[i].code === 'LDSFJA32' && rockets[i].currentSpeed() === 210) {
            outputRocket2.style.color = '#d43648';
            outputRocket2.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " cannot accelerate. It is at maximum power.";
            break;
        }
    }
}
// ---------------- DECELLERATE ROCKET 2 ---------------- //
function decelerateRocket2() {
    var i = 0;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === 'LDSFJA32' && rockets[i].currentSpeed() > 0) {
            rockets[i].decelerate();
            outputRocket2.style.color = '#d43648';
            outputRocket2.innerHTML = "Decellerating rocket " + rockets[i].code + " ...<br><br>";
            break;
        }
        if (rockets[i].code === 'LDSFJA32' && rockets[i].currentSpeed() === 0) {
            outputRocket2.style.color = '#d43648';
            outputRocket2.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " cannot decelerate. Its current speed is 0.";
        }
    }
}
// ---------------- PRINT ROCKET 2 ---------------- //
function printRocket2() {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code === 'LDSFJA32') {
            outputRocket2.style.color = '#fac027';
            outputRocket2.innerHTML = "Rocket " + rockets[i].code + " has " + rockets[i].thrusters.length + " thrusters.<br>\n            Its current speed is " + rockets[i].currentSpeed() + "<br><br>";
        }
    }
}
// ------------- PRINT ALL ROCKETS ------------- //
function printAllRockets() {
    var outputAllRockets = document.getElementById('allRockets');
    outputAllRockets.innerHTML = '';
    for (var i = 0; i < rockets.length; i++) {
        outputAllRockets.style.color = '#fac027';
        outputAllRockets.innerHTML += "Rocket " + rockets[i].code + " has " + rockets[i].thrusters.length + " thrusters.<br>\n        Its current speed is " + rockets[i].currentSpeed() + "<br><br>";
    }
}
