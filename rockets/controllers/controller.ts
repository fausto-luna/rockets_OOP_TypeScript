let rockets:Rocket[] = new Array();
let outputRocket1 = document.getElementById('rocket1') as HTMLParagraphElement;
let outputRocket2 = document.getElementById('rocket2') as HTMLParagraphElement;
// ---------------- CREATE ROCKET 1 ---------------- //
function createRocket1() {
    let rocket1 = new Rocket('32WESSDS');
    rocket1.addThruster(new Thruster(10));
    rocket1.addThruster(new Thruster(30));
    rocket1.addThruster(new Thruster(80));
    rockets.push(rocket1);
    outputRocket1.innerHTML += `Rocket ${rocket1.code} was created.<br><br>`;
}
// ---------------- CREATE ROCKET 2 ---------------- //
function createRocket2(){
    let rocket2 = new Rocket('LDSFJA32');
    rocket2.addThruster(new Thruster(30));
    rocket2.addThruster(new Thruster(40));
    rocket2.addThruster(new Thruster(50));
    rocket2.addThruster(new Thruster(50));
    rocket2.addThruster(new Thruster(30));
    rocket2.addThruster(new Thruster(10));
    rockets.push(rocket2);
    outputRocket2.innerHTML += `Rocket ${rocket2.code} was created.<br><br>`;
}
// ---------------- ACCELERATE ROCKET 1 ---------------- //
function accelerateRocket1(){
    let i:number = 0;
    for (i = 0; i < rockets.length; i++){
        if (rockets[i].code === '32WESSDS'){
            rockets[i].accelerate();
            outputRocket1.innerHTML += `Accelerating rocket ${rockets[i].code} ...<br><br>`;
            break;
        }
    }
}
// ---------------- DECELLERATE ROCKET 1 ---------------- //
function decelerateRocket1(){
    let i:number = 0;
    for (i = 0; i < rockets.length; i++){
        if (rockets[i].code === '32WESSDS'){
            rockets[i].decelerate();
            outputRocket1.innerHTML += `Decellerating rocket ${rockets[i].code} ...<br><br>`;
            break;
        }
    }
}
// ---------------- PRINT ROCKET 1 ---------------- //
function printRocket1(){
    for (var i = 0; i < rockets.length; i++){
        if (rockets[i].code === '32WESSDS'){
        outputRocket1.innerHTML += `Rocket ${rockets[i].code} has ${rockets[i].thrusters.length} thrusters.<br>
        Its current speed is ${rockets[i].currentSpeed()}<br><br>`;
        }  
    }
}
// ---------------- ACCELERATE ROCKET 2 ---------------- //
function accelerateRocket2(){
    let i:number = 0;
    for (i = 0; i < rockets.length; i++){
        if (rockets[i].code === 'LDSFJA32'){
            rockets[i].accelerate();
            outputRocket2.innerHTML += `Accelerating rocket ${rockets[i].code} ...<br><br>`;
            break;
        }
    }
}
// ---------------- DECELLERATE ROCKET 2 ---------------- //
function decelerateRocket2(){
    let i:number = 0;
    for (i = 0; i < rockets.length; i++){
        if (rockets[i].code === 'LDSFJA32'){
            rockets[i].decelerate();
            outputRocket2.innerHTML += `Decellerating rocket ${rockets[i].code} ...<br><br>`;
            break;
        }
    }
}
// ---------------- PRINT ROCKET 2 ---------------- //
function printRocket2(){
    for (var i = 0; i < rockets.length; i++){
        if (rockets[i].code === 'LDSFJA32'){
        outputRocket2.innerHTML += `Rocket ${rockets[i].code} has ${rockets[i].thrusters.length} thrusters.<br>
        Its current speed is ${rockets[i].currentSpeed()}<br><br>`;
        }  
    }
}
// ------------- PRINT ALL ROCKETS ------------- //
function printAllRockets(){
    const outputAllRockets = document.getElementById('allRockets') as HTMLParagraphElement;
    for (var i = 0; i < rockets.length; i++){
        outputAllRockets.innerHTML += `Rocket ${rockets[i].code} has ${rockets[i].thrusters.length} thrusters.<br>
        Its current speed is ${rockets[i].currentSpeed()}<br><br>`;    
    }
}