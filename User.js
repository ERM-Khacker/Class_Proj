class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get name() {
        return this._name;
    }

    set name(v) {
        if (typeof v !== 'string') {
            throw new TypeError('Name have to a string');
        }
        this._name = v;
    }

    get surname() {
        return this._surname;
    }

    set surname(v) {
        if (typeof v !== 'string') {
            throw new TypeError('Surname have to a string');
        }
        this._surname = v;
    }

    getFullName() {
        return `${this._name} ${this._surname}`;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    get year() {
        return this._year;
    }

    set year(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Year have to a number');
        }
        this._year = v;
    }

    getCourse() {
        const course = new Date;
        course.getFullYear();
        return course - this.year;
    }

}

const stud = new Student('Test','Test',2012);
console.log(stud.getCourse());