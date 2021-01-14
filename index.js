class User {
    constructor(login, email, age, isBanned = false) {
        this.login = login;
        this.email = email;
        this.age = age;
        this._isBanned = isBanned;
    }

    set isBanned(v) {
        this._isBanned = v;
    }

    get isBanned() {
        return this._isBanned;
    }

    getFullInfo() {
        return `${this.login}:${this.email}`;
    }
}

class Admin extends User {
    constructor(login, email, age) {
        super('AdminLogin', email, age, false);

    }

    ban(user) {
        if (user instanceof User) {
            user.isBanned = true;
            return;
        }
        throw new TypeError();
    }
    unBun(user) {
        if (user instanceof User) {
            user.isBanned = false;
            return;
        }
        throw new TypeError();
    }

    toggleBan(user) {
        if (user instanceof User) {
            user.isBanned = !user.isBanned;
            return;
        }
        throw new TypeError();
    }
}

class Squirrel {
    constructor(name) {
        this.name = name;
    }

    eat() {
        return `${this.name} is eating`;
    }

    climb() {
        return `${this.name} is climbing`;
    }
}
const chip = new Squirrel('Chip');

class FlyingSquirrel extends Squirrel {
    constructor(name, maxDistance) {
        super(name);
        this.maxDistance = maxDistance;
    }

    fly(name) {
        return `${this.name} ${this.maxDistance} meters`;
    }

}
const dale = new FlyingSquirrel('Dale', 50);
console.log(dale.fly());

class FableSquirrel extends FlyingSquirrel {
    constructor(name, maxDistance, songs) {
        super(name, maxDistance);
        this.songs = songs;
    }
    dance() {
        return `${this.name} is dancing`;
    }
    sang() {
        this.songs.forEach(song => console.log(song));
    }

    climb() {
        throw new Error('Сказочная белка по деревьям не лазают');
    }

}
const bat = new FableSquirrel('Teil', 500, ['song1', 'song2']);

class Shape {
    constructor(name) {
        this._name = name;
    }
    getArea() { };
}
class Circle extends Shape{
    constructor(radius){
        super('Circle');
        this._radius = radius;
    }
    getArea(){
        return (this._radius * this._radius) * 3,14;
    }
}
const circle = new Circle(23);
console.log(circle.getArea());