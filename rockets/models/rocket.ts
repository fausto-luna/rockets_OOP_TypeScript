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
            return elem.maxPower;
        }).join(", ");
    }
    currentSpeed():number{
        var i:number, currentSpeed:number = 0;
        for (i = 0; i < this.thrusters.length; i++){
            currentSpeed += this.thrusters[i].currentPower;
        }
        return currentSpeed;
    }
    maxPower():number{
        var i:number, maxPower:number = 0;
        for (i = 0; i < this.thrusters.length; i++){
            maxPower += this.thrusters[i].maxPower;
        }
        return maxPower;
    }
    accelerate():number{
        var i:number, newSpeed:number = 0;
        for (i = 0; i < this.thrusters.length; i++){
            if (this.thrusters[i].currentPower < this.thrusters[i].maxPower){
                this.thrusters[i].currentPower += 10;
                newSpeed += this.thrusters[i].currentPower;
            }
        }
        return newSpeed;
    }
    decelerate():number{
        var i:number, newSpeed:number = 0;
        for (i = 0; i < this.thrusters.length; i++){
            if (this.thrusters[i].currentPower > 0){
                this.thrusters[i].currentPower -= 10;
                newSpeed += this.thrusters[i].currentPower;
            }
        }
        return newSpeed;
    }

}