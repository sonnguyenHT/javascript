// object orientation in js
let employee = {
    baseSalary: 50,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime*this.rate)
    }
};
console.log(employee.getWage());