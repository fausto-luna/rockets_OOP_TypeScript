let rockets:Rocket[] = new Array();
// ---------------- GLOBAL FUNCTION CREATE ROCKET---------------- //
function createRocket(button:HTMLButtonElement) {
    let btn = button.id;
    if (btn === 'create1'){
        let outputRocket1 = document.getElementById('rocket1') as HTMLParagraphElement;
        let code = '32WESSDS';
        let thruster1 = new Thruster(0, 10);
        let thruster2 = new Thruster(0, 30);
        let thruster3 = new Thruster(0, 80);
        let thrusters:Thruster[] = [thruster1, thruster2, thruster3];
        create(code, thrusters);
    }
    if (btn === 'create2'){
        let code = 'LDSFJA32';
        let thruster1 = new Thruster(0, 30);
        let thruster2 = new Thruster(0, 40);
        let thruster3 = new Thruster(0, 50);
        let thruster4 = new Thruster(0, 50);
        let thruster5 = new Thruster(0, 30);
        let thruster6 = new Thruster(0, 10);
        let thrusters:Thruster[] = [thruster1, thruster2, thruster3, thruster4, thruster5, thruster6];
        create(code, thrusters);
    }
    function create(code:string, thrusters:Thruster[]){
        var i:number;
        let existent:boolean = false;
        for (i = 0; i < rockets.length; i++){
            if (rockets[i].code === code){
                existent = true;
                let outputRocket = document.getElementById('rocket' + (i+1)) as HTMLParagraphElement;
                outputRocket.style.color = '#d43648';
                outputRocket.innerHTML = `ALERT!<br>Rocket ${rockets[i].code} already exists. Cannot be created again.`;
                break;
            }
        }
        if (existent === false){
            let rocket = new Rocket(code);
            var j:number;
            for (j = 0; j < thrusters.length; j++){
                rocket.addThruster(thrusters[j]);
            }
            rockets.push(rocket);
            let outputRocket = document.getElementById('rocket' + (i+1)) as HTMLParagraphElement;
            outputRocket.style.color = '#38a3b7';
            outputRocket.innerHTML = `Rocket ${rocket.code} was created.<br><br>`;
        }
    }
}
// ---------------- GLOBAL FUNCTION ACCELERATE ROCKET ---------------- //
function accelerateRocket(button:HTMLButtonElement){
    let btn = button.id;
    if (btn === 'accelerate1'){
        accelerate('32WESSDS');
    }
    if (btn === 'accelerate2'){
        accelerate('LDSFJA32');
    }
    function accelerate(code:string){
        var i:number;
        for (i = 0; i < rockets.length; i++){
            if (rockets[i].code === code && rockets[i].currentSpeed() < rockets[i].maxPower()){
                rockets[i].accelerate();
                let outputRocket = document.getElementById('rocket' + (i+1)) as HTMLParagraphElement;
                outputRocket.style.color = '#3ea648';
                outputRocket.innerHTML = `Accelerating rocket ${rockets[i].code} ...<br><br>`;
                break;
            }
            if (rockets[i].code === code && rockets[i].currentSpeed() === rockets[i].maxPower()){
                let outputRocket = document.getElementById('rocket' + (i+1)) as HTMLParagraphElement
                outputRocket.style.color = '#d43648';
                outputRocket.innerHTML = `ALERT!<br>Rocket ${rockets[i].code} cannot accelerate. It is at maximum power.`;
                break;
            }
        }
    }
}
// ---------------- GLOBAL FUNCTION DECELLERATE ROCKET ---------------- //
function decelerateRocket(button:HTMLButtonElement){
    let btn = button.id;
    if (btn === 'decelerate1'){
        decelerate('32WESSDS');
    }
    if (btn === 'decelerate2'){
        decelerate('LDSFJA32');
    }
    function decelerate(code:string){
        let i:number;
        for (i = 0; i < rockets.length; i++){
            if (rockets[i].code === code && rockets[i].currentSpeed() > 0){
                rockets[i].decelerate();
                let outputRocket = document.getElementById('rocket' + (i+1)) as HTMLParagraphElement;
                outputRocket.style.color = '#d43648';
                outputRocket.innerHTML = `Decelerating rocket ${rockets[i].code} ...<br><br>`;
                break;
            }
            if (rockets[i].code === code && rockets[i].currentSpeed() === 0){
                let outputRocket = document.getElementById('rocket' + (i+1)) as HTMLParagraphElement;
                outputRocket.style.color = '#d43648';
                outputRocket.innerHTML = `ALERT!<br>Rocket ${rockets[i].code} cannot decelerate. Its current speed is 0.`;
                break;
            }
        }
    }
  
}
// ---------------- GLOBAL FUNCTION PRINT ROCKET ---------------- //
function printRocket(button:HTMLButtonElement){
    let btn = button.id;
    if(btn === 'print1'){
        print('32WESSDS');
    }
    if (btn === 'print2'){
        print('LDSFJA32');
    }
    function print(code:string) {
        for (var i = 0; i < rockets.length; i++) {
            if (rockets[i].code === code) {
                let outputRocket = document.getElementById('rocket' + (i+1)) as HTMLParagraphElement;
                outputRocket.style.color = '#fac027';
                outputRocket.innerHTML = `Rocket ${rockets[i].code} has ${rockets[i].thrusters.length} thrusters.<br>
                                            Its current speed is ${rockets[i].currentSpeed()}<br><br>`;
            }
        }
    }
}
// ------------- PRINT ALL ROCKETS ------------- //
function printAllRockets(){
    let outputAllRockets = document.getElementById('allRockets') as HTMLParagraphElement;
    outputAllRockets.innerHTML = '';
    outputAllRockets.style.color = '#fac027';
    for (var i = 0; i < rockets.length; i++){
        outputAllRockets.innerHTML += `Rocket ${rockets[i].code} has ${rockets[i].thrusters.length} thrusters. Its current speed is ${rockets[i].currentSpeed()}.<br><br>`;
    }
}