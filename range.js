class RangeValidator {
    constructor(from = 0, to = 0) {
        this._from = from;
        this._to = to;
    }

    get from() {
        return this._from;
    }

    set from(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Data must be a number');
        }
        else if (v >= this._to) {
            throw new RangeError('The number must not be more than (to)');
        }
        this._from = v;
    }

    get to() {
        return this._to;
    }

    set to(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Data must be a number');
        } else if (v <= this._from) {
            throw new RangeError('The number have not be less than (from)');
        }
        this._to = v;
    }

    get range() {
        return [this.from, this.to];
    }

    validate(number) {
        if (typeof number !== 'number') {
            throw new TypeError('Data must be a number');
        }
        if (number >= this._from && number <= this._to) {
            return number;
        } else {
            throw new RangeError('The number is out of range');
        }
    }

}

const num = new RangeValidator(1, 100);
const someNum = 30;

