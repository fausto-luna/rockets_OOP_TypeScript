var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.thrusters = new Array();
        this.rockets = new Array();
        this.code = code;
    }
    // addRocket(rocket:Rocket):void{
    //     this.rockets.push(rocket);
    // }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    Rocket.prototype.thrustersPower = function () {
        return this.thrusters.map(function (elem) {
            return elem.power;
        }).join(", ");
    };
    Rocket.prototype.accelerate = function () {
        var i, newSpeed = 0;
        for (i = 0; i < this.thrusters.length; i++) {
            this.thrusters[i].power += 10;
            // accelerate = this.thrusters[i].speedUp();
            console.log("thruster " + (i + 1) + ": power " + this.thrusters[i].power);
            newSpeed += this.thrusters[i].power;
            console.log("newSpeed = " + newSpeed);
        }
        return newSpeed;
    };
    Rocket.prototype.decelerate = function () {
        var i, newSpeed = 0;
        for (i = 0; i < this.thrusters.length; i++) {
            this.thrusters[i].power -= 10;
            console.log("thruster " + (i + 1) + ": power " + this.thrusters[i].power);
            newSpeed += this.thrusters[i].power;
            console.log("newSpeed = " + newSpeed);
        }
        return newSpeed;
    };
    Rocket.prototype.currentSpeed = function () {
        var i, currentSpeed = 0;
        for (i = 0; i < this.thrusters.length; i++) {
            currentSpeed += this.thrusters[i].power;
        }
        return currentSpeed;
    };
    return Rocket;
}());
