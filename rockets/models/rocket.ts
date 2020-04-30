class Rocket{
    code:string;
    thrusters:Thruster[] = new Array();
    rockets:Rocket[] = new Array();

    constructor(code:string){
        this.code = code;
    }
    // addRocket(rocket:Rocket):void{
    //     this.rockets.push(rocket);
    // }
    addThruster(thruster:Thruster):void{
        this.thrusters.push(thruster);
    }
    thrustersPower():string {
        return this.thrusters.map(function(elem){
            return elem.power;
        }).join(", ");
    }
    accelerate():number{
        var i:number, newSpeed:number = 0;
        for (i = 0; i < this.thrusters.length; i++){
            this.thrusters[i].power += 10;
            // accelerate = this.thrusters[i].speedUp();
            console.log(`thruster ${i+1}: power ${this.thrusters[i].power}`);
            newSpeed += this.thrusters[i].power;
            console.log(`newSpeed = ${newSpeed}`);
        }
        return newSpeed;
    }
    decelerate():number{
        var i:number, newSpeed:number = 0;
        for (i = 0; i < this.thrusters.length; i++){
            this.thrusters[i].power -= 10;
            console.log(`thruster ${i+1}: power ${this.thrusters[i].power}`);
            newSpeed += this.thrusters[i].power;
            console.log(`newSpeed = ${newSpeed}`);
        }
        return newSpeed;
    }
    currentSpeed():number{
        var i:number, currentSpeed:number = 0;
        for (i = 0; i < this.thrusters.length; i++){
             currentSpeed += this.thrusters[i].power;
        }
        return currentSpeed;
    }
}