var rockets = new Array();
var outputRocket1 = document.getElementById('rocket1');
var outputRocket2 = document.getElementById('rocket2');
// ---------------- CREATE ROCKET 1 ---------------- //
function createRocket1() {
    var rocket1;
    rockets.addRocket(new Rocket('32WESSDS'));
    // let rocket1 = new Rocket('32WESSDS');
    rocket1.addThruster(new Thruster(10));
    rocket1.addThruster(new Thruster(30));
    rocket1.addThruster(new Thruster(80));
    // rockets.push(rocket1);
    outputRocket1.innerHTML += "Rocket " + rocket1.code + " was created.<br><br>";
}
// ---------------- CREATE ROCKET 2 ---------------- //
function createRocket2() {
    var rocket2 = new Rocket('LDSFJA32');
    // rockets.addRocket(new Rocket('LDSFJA32')); 
    rocket2.addThruster(new Thruster(30));
    rocket2.addThruster(new Thruster(40));
    rocket2.addThruster(new Thruster(50));
    rocket2.addThruster(new Thruster(50));
    rocket2.addThruster(new Thruster(30));
    rocket2.addThruster(new Thruster(10));
    rockets.push(rocket2);
    outputRocket2.innerHTML += "Rocket " + rocket2.code + " was created.<br><br>";
}
// ---------------- ACCELERATE ROCKET 1 ---------------- //
function accelerateRocket1() {
    var i = 0;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === '32WESSDS') {
            rockets[i].accelerate();
            console.log("current speed " + rockets[i].code + " = " + rockets[i].currentSpeed());
            outputRocket1.innerHTML += "Accelerating rocket " + rockets[i].code + " ...<br><br>";
            break;
        }
    }
}
// ---------------- DECELLERATE ROCKET 1 ---------------- //
function decelerateRocket1() {
    var i = 0;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === '32WESSDS') {
            rockets[i].decelerate();
            console.log("current speed " + rockets[i].code + " = " + rockets[i].currentSpeed());
            outputRocket1.innerHTML += "Decellerating rocket " + rockets[i].code + " ...<br><br>";
            break;
        }
    }
}
// ---------------- PRINT ROCKET 1 ---------------- //
function printRocket1() {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code === '32WESSDS') {
            outputRocket1.innerHTML += "Rocket " + rockets[i].code + " has " + rockets[i].thrusters.length + " thrusters.<br>\n        Its current speed is " + rockets[i].currentSpeed() + "<br><br>";
        }
    }
}
// ---------------- ACCELERATE ROCKET 2 ---------------- //
function accelerateRocket2() {
    var i = 0;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === 'LDSFJA32') {
            rockets[i].accelerate();
            console.log("current speed " + rockets[i].code + " = " + rockets[i].currentSpeed());
            outputRocket2.innerHTML += "Accelerating rocket " + rockets[i].code + " ...<br><br>";
            break;
        }
    }
}
// ---------------- DECELLERATE ROCKET 2 ---------------- //
function decelerateRocket2() {
    var i = 0;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === 'LDSFJA32') {
            rockets[i].decelerate();
            console.log("current speed " + rockets[i].code + " = " + rockets[i].currentSpeed());
            outputRocket2.innerHTML += "Decellerating rocket " + rockets[i].code + " ...<br><br>";
            break;
        }
    }
}
// ---------------- PRINT ROCKET 2 ---------------- //
function printRocket2() {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code === 'LDSFJA32') {
            outputRocket2.innerHTML += "Rocket " + rockets[i].code + " has " + rockets[i].thrusters.length + " thrusters.<br>\n        Its current speed is " + rockets[i].currentSpeed() + "<br><br>";
        }
    }
}
// ------------- PRINT ALL ROCKETS ------------- //
function printAllRockets() {
    var outputAllRockets = document.getElementById('allRockets');
    for (var i = 0; i < rockets.length; i++) {
        outputAllRockets.innerHTML += "Rocket " + rockets[i].code + " has " + rockets[i].thrusters.length + " thrusters.<br>\n        Its current speed is " + rockets[i].currentSpeed() + "<br><br>";
    }
}
// ------------- FASE 2 ------------- //
// Output: 32WESSDS: 10,30,80 LDSFJA32: 30,40,50,50,30,10
//function ShowRocketsPower(){
//createRockets();
//     const outputFase2 = document.getElementById('fase2') as HTMLParagraphElement;
//     for (var i = 0; i < rockets.length; i++) {
//         outputFase2.innerHTML += `${rockets[i].code}: ${rockets[i].thrustersPower()}.<br><br>`;
//     }
// }
// ------------- FASE 3 ------------- //
// - Tots els propulsors tindran una potència actual que començarà amb 0. ?????
// - El coet tindrà dos mètodes, accelerar o frenar i augmentarà o es reduirà de 10 en 10 la potencia del propulsor. 
// - El coet tindrà una velocitat actual que és la suma de totes les potències dels seus propulsors.
//function ShowRocketsSpeed(){
// 1.Creem dos coets amb els codis “32WESSDS” I “LDSFJA32”. 
//createRockets();
// 2.  Mostrar a pantalla el codi dels coets, el número de propulsors que té 
// i la potència màxima de cada propulsor.
// const outputFase3 = document.getElementById('fase3') as HTMLParagraphElement;
// var i:number;
// for (i = 0; i < rockets.length; i++) {
//     outputFase3.innerHTML += `Rocket ${rockets[i].code} has ${rockets[i].thrusters.length} thrusters with a maximum power of ${rockets[i].thrustersPower()}.`;
//     outputFase3.innerHTML += `<br><br>`;
// }
//3. Mostrar a pantalla la velocitat actual dels coets
// let currentSpeed:number, j:number;
// for (i = 0; i < rockets.length; i++){
//     outputFase3.innerHTML += `Rocket ${rockets[i].code} current speed: ${rockets[i].currentSpeed()}<br><br>`
// }
// 4. Accelerar amb els coets tres cops
// for (i = 0; i < rockets.length; i++){
//     for (j = 1; j <= 3; j++){
//         currentSpeed = rockets[i].accelerate();
//         console.log(`current speed rocket ${i+1}: ${currentSpeed}`);
//     }
// 5. Mostrar a pantalla la velocitat actual
//     outputFase3.innerHTML += `Rocket ${rockets[i].code} current speed after accelerating 3 times: ${currentSpeed} <br><br>`
// }
// 6. Frenar cinc cops amb el primer coet (“32WESSDS”) i accelerar set amb el segon coet.
// for (i = 0; i < rockets.length; i++){
//     if(i == 0){
//         console.log(`current speed rocket 1: ${rockets[i].currentSpeed()}`);
//         for (j = 1; j <= 5; j++){
//             currentSpeed = rockets[i].decelerate();
//             console.log(`current speed rocket ${i+1}: ${currentSpeed}`);
//         }
// 7. Mostrar a pantalla la velocitat actual
//     outputFase3.innerHTML += `Rocket ${rockets[i].code} current speed after decellerating 5 times: ${currentSpeed}<br><br>`;
// }
// if (i == 1){
//     console.log(`current speed rocket ${i+1}: ${rockets[i].currentSpeed()}`);
//     for (j = 1; j <= 7; j++){
//         currentSpeed = rockets[i].accelerate();
//         console.log(`current speed rocket ${i+1}: ${currentSpeed}`);
//     }
// 7. Mostrar a pantalla la velocitat actual
//         outputFase3.innerHTML += `Rocket ${rockets[i].code} current speed after accelerating 7 times: ${currentSpeed}<br><br>`;
//     }
// }
// 8. Accelerar 15 cops amb els dos coets.
// for (i = 0; i < rockets.length; i++){
//     for (j = 1; j <= 15; j++){
//         currentSpeed = rockets[i].accelerate();
//     }
// 9. Mostrar a pantalla la velocitat actual
//         outputFase3.innerHTML += `Rocket ${rockets[i].code} current speed after accelerating 15 times: ${currentSpeed}<br><br>`;
//     }
// }
