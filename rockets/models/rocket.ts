class Rocket{
    code:string;
    thrusters:Thruster[] = new Array();
    constructor(code:string){
        this.code = code;
    }
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
            newSpeed += this.thrusters[i].power;
        }
        return newSpeed;
    }
    decelerate():number{
        var i:number, newSpeed:number = 0;
        for (i = 0; i < this.thrusters.length; i++){
            this.thrusters[i].power -= 10;
            newSpeed += this.thrusters[i].power;
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