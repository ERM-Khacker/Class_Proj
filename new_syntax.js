class User {
    constructor(name, surName, age) {
        this._name = name;
        this._surName = surName;
        this._age = age;
    }

    set fullName(newfullName) {
        if (typeof newfullName !== 'string') {
            throw new TypeError('Data must be a string');
        }
        const nameArray = newfullName.split(' ');

        this._name = nameArray[0];
        this._surName = nameArray[1];

    }

    get fullName() {
        return `${this._name} ${this._surName}`;
    }

    static isAdult(obj) {
        if (obj instanceof User) {
            return obj.isAdult
        }
        throw new TypeError('Parameter must be a User');
    }

    static isUser(obj) {
        return obj instanceof User;
    }

}

class Worker {
    constructor(name, surName, numberOfDaysWorked = 0, rate) {
        this.name = name;
        this.surName = surName;
        this.numberOfDaysWorked = numberOfDaysWorked;
        this.rate = rate;
    }

    getSalary() {
        return this.numberOfDaysWorked * this.rate;
    }
}

class Fuel {
    constructor(volume, density) {
        this._volume = volume;
        this._density = density;
    }

    set volume(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Data must be a number');
        }
        this._volume = v;
    }

    get volume() {
        return this._volume;
    }

    set density(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Data must be a number');
        }
        this._density = v;
    }

    get density() {
        return this._density;
    }


    getFuelWeight() {
        const res = this.volume - this.density;
        if (isNaN(res)) {
            throw new TypeError;
        }
        return this.volume * this.density;
    }
}


class Car {
    constructor(model, weight, fuel = new Fuel(50, 1.2)) {
        this.model = model;
        this.ownWeight = weight;
        this.fuel = fuel;
    }
    getCarWeight() {
        const res = this.ownWeight - this.fuel.getFuelWeight();
        if (isNaN(res)) {
            throw new TypeError();
        }

        return this.ownWeight + this.fuel.getFuelWeight();
    }
}
const car1 = new Car('Aston Martin', 1500);
console.log(car1.getCarWeight());

class Friend {
    constructor(name, appleAmount, friend = []) {
        this.name = name;
        this.appleAmount = appleAmount;
        this.friend = friend;
    }

    calcAllApples() {
        return this.appleAmount + [this.friend.appleAmount];
    }
}
const friend1 = new Friend('John', 5);
const friend2 = new Friend('Tom', 5);
const friend3 = new Friend('Jack', 10)


console.log(friend4.calcAllApples());
