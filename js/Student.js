import Person from "./Person.js";

export default class Student extends Person {
    constructor(maths, physics, chemistry, ...rest) {
        super(...rest);
        this.maths = maths;
        this.physics = physics;
        this.chemistry = chemistry;
        this.average = 0;
    }

    getAverage() {
        this.average = (this.maths + this.physics + this.chemistry) / 3
    }
}