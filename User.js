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
    constructor(name, surname, yearOfAdmission) {
        super(name, surname);
        this.yearOfAdmission = yearOfAdmission;
    }

    get year() {
        return this._yearOfAdmission;
    }

    set year(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Year have to a number');
        }
        if (v < 2016) {
            throw new RangeError('You are not a student)))');
        }
        this._yearOfAdmission = v;
    }

    getCourse() {
        const course = new Date();
        return `${course.getFullYear() - this.yearOfAdmission} курс`;
    }
}

const stud = new Student('Test', 'Testovna', 2016);
console.log(stud.getFullName());
console.log(stud.getCourse());