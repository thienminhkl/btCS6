import Person from "./Person.js";

export default class Teacher extends Person {
    constructor(workDay, salary, ...rest) {
        super(...rest);
        this.workDay = workDay;
        this.salary = salary;
        this.sumSal = 0;
    }

    getSumSal() {
        this.sumSal = this.workDay * this.salary
    }
}