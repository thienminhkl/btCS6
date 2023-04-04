import Person from "./Person.js";

export default class Customer extends Person {
    constructor(company, bill, rating, ...rest) {
        super(...rest);
        this.company = company;
        this.bill = bill;
        this.rating = rating;
    }
}