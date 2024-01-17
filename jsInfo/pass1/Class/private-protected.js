class CoffeeMachine {
    _waterAmount = 0;
    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }
        this._waterAmount = value;
    }
    get waterAmount() {
        return this._waterAmount;
    }
    constructor(power) {
        this._power = power;
    }
    get power() {
        return this._power;
    }
}
let coffeeMachine = new CoffeeMachine(100);
console.log(`power is: ${coffeeMachine.power}W`);
CoffeeMachine.power = 25;


// class CoffeeMachine{
//     #waterLimit = 200;
//     #fixWaterAmount(value) {
//         if(value < 0) return 0;
//         if(value > this.#waterLimit) return this.#waterLimit;
//     }
//     setWaterAmount(value) {
//         this.#waterLimit = this.#fixWaterAmount(value);
//     }
// }
// let coffeeMachine = new coffeeMachine();
// console.log(coffeeMachine.#fixWaterAmount(123))  /// these private identifiers not allowed otside 
// coffeeMachine.#waterLimit


