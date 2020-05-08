let rockets:Rocket[] = new Array();
// ---------------- GLOBAL FUNCTION CREATE ROCKET---------------- //
function createRocket(rocket:Rocket, code:string, thrusters:Thruster[], outputRocket:HTMLParagraphElement) {
    var i:number;
    let existent:boolean = false;
    for (i = 0; i < rockets.length; i++){
        if (rockets[i].code === code){
            existent = true;
            outputRocket.style.color = '#d43648';
            outputRocket.innerHTML = `ALERT!<br>Rocket ${rockets[i].code} already exists. Cannot be created again.`;
            break;
        }
    }
    if (existent === false){
        rocket = new Rocket(code);
        var j:number;
        for (j = 0; j < thrusters.length; j++){
            rocket.addThruster(thrusters[j]);
        }
        rockets.push(rocket);
        outputRocket.style.color = '#38a3b7';
        outputRocket.innerHTML = `Rocket ${rocket.code} was created.<br><br>`;
    }
}
// ---------------- GLOBAL FUNCTION ACCELERATE ROCKET ---------------- //
function accelerateRocket(code:string, outputRocket:HTMLParagraphElement){
    let i:number = 0;
    for (i = 0; i < rockets.length; i++){
        if (rockets[i].code === code && rockets[i].currentSpeed() < rockets[i].maxPower()){
            rockets[i].accelerate();
            outputRocket.style.color = '#3ea648';
            outputRocket.innerHTML = `Accelerating rocket ${rockets[i].code} ...<br><br>`;
            break;
        }
        if (rockets[i].code === code && rockets[i].currentSpeed() === rockets[i].maxPower()){
            outputRocket.style.color = '#d43648';
            outputRocket.innerHTML = `ALERT!<br>Rocket ${rockets[i].code} cannot accelerate. It is at maximum power.`;
            break;
        }
    }
}
// ---------------- GLOBAL FUNCTION DECELLERATE ROCKET ---------------- //
function decelerateRocket(code:string, outputRocket:HTMLParagraphElement){
    let i:number;
    for (i = 0; i < rockets.length; i++){
        if (rockets[i].code === code && rockets[i].currentSpeed() > 0){
            rockets[i].decelerate();
            outputRocket.style.color = '#d43648';
            outputRocket.innerHTML = `Decelerating rocket ${rockets[i].code} ...<br><br>`;
            break;
        }
        if (rockets[i].code === code && rockets[i].currentSpeed() === 0){
            outputRocket.style.color = '#d43648';
            outputRocket.innerHTML = `ALERT!<br>Rocket ${rockets[i].code} cannot decelerate. Its current speed is 0.`;
            break;
        }
    }
}
// ---------------- GLOBAL FUNCTION PRINT ROCKET ---------------- //
function printRocket(code:string, outputRocket:HTMLParagraphElement){
    for (var i = 0; i < rockets.length; i++){
        if (rockets[i].code === code){
        outputRocket.style.color = '#fac027';
        outputRocket.innerHTML = `Rocket ${rockets[i].code} has ${rockets[i].thrusters.length} thrusters.<br>
        Its current speed is ${rockets[i].currentSpeed()}<br><br>`;
        }  
    }
}
// ------------- PRINT ALL ROCKETS ------------- //
function printAllRockets(){
    let outputAllRockets = document.getElementById('allRockets') as HTMLParagraphElement;
    outputAllRockets.innerHTML = '';
    for (var i = 0; i < rockets.length; i++){
        outputAllRockets.innerHTML += `Rocket ${rockets[i].code} has ${rockets[i].thrusters.length} thrusters. Its current speed is ${rockets[i].currentSpeed()}.<br><br>`;
    }
}
// |||||||||||||||||||||||||||||||||||||||||||||||||| //
// |||||||||||||||||||| ROCKET 1 |||||||||||||||||||| //
// |||||||||||||||||||||||||||||||||||||||||||||||||| //
// ---------------- CREATE rocket 1 ---------------- //
function createRocket1(){
    let outputRocket1 = document.getElementById('rocket1') as HTMLParagraphElement;
    let rocket1 = new Rocket('32WESSDS');
    let code = '32WESSDS';
    let thruster1 = new Thruster(0, 10);
    let thruster2 = new Thruster(0, 30);
    let thruster3 = new Thruster(0, 80);
    let thrusters:Thruster[] = [thruster1, thruster2, thruster3];
    createRocket(rocket1, code, thrusters, outputRocket1 );
}
// ---------------- ACCELERATE rocket 1 ---------------- //
function accelerateRocket1(){
    let code:string = '32WESSDS';
    let outputRocket1 = document.getElementById('rocket1') as HTMLParagraphElement;
    accelerateRocket(code, outputRocket1);
}
// ---------------- DECELLERATE rocket 1 ---------------- //
function decelerateRocket1(){
    let code:string = '32WESSDS';
    let outputRocket1 = document.getElementById('rocket1') as HTMLParagraphElement;
    decelerateRocket(code, outputRocket1);
}
// ---------------- PRINT rocket 1 ---------------- //
function printRocket1(){
    let code:string = '32WESSDS';
    let outputRocket1 = document.getElementById('rocket1') as HTMLParagraphElement;
    printRocket(code, outputRocket1);
}
// |||||||||||||||||||||||||||||||||||||||||||||||||| //
// |||||||||||||||||||| ROCKET 2 |||||||||||||||||||| //
// |||||||||||||||||||||||||||||||||||||||||||||||||| //
// ---------------- CREATE rocket 2 ---------------- //
function createRocket2(){
    let outputRocket2 = document.getElementById('rocket2') as HTMLParagraphElement;
    let rocket2 = new Rocket('LDSFJA32');
    let code = 'LDSFJA32';
    let thruster1 = new Thruster(0, 30);
    let thruster2 = new Thruster(0, 40);
    let thruster3 = new Thruster(0, 50);
    let thruster4 = new Thruster(0, 50);
    let thruster5 = new Thruster(0, 30);
    let thruster6 = new Thruster(0, 10);
    let thrusters:Thruster[] = [thruster1, thruster2, thruster3, thruster4, thruster5, thruster6];
    createRocket(rocket2, code, thrusters, outputRocket2);
}
// ---------------- ACCELERATE rocket 2 ---------------- //
function accelerateRocket2(){
    let code = 'LDSFJA32';
    let outputRocket2 = document.getElementById('rocket2') as HTMLParagraphElement;
    accelerateRocket(code, outputRocket2);
}
// ---------------- DECELLERATE rocket 2 ---------------- //
function decelerateRocket2(){
    let code = 'LDSFJA32';
    let outputRocket2 = document.getElementById('rocket2') as HTMLParagraphElement;
    decelerateRocket(code,outputRocket2);
}
// ---------------- PRINT rocket 2 ---------------- //
function printRocket2(){
    let code = 'LDSFJA32';
    let outputRocket2 = document.getElementById('rocket2') as HTMLParagraphElement;
    printRocket(code,outputRocket2);
}