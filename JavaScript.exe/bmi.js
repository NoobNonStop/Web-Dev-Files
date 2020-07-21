var mark = {
    name : 'Mark White',
    mass : 67,
    height:1.8,
    bmiCalc : function() {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};
var john = {
    name: 'John Wick',
    mass: 74,
    height: 1.9,
    bmiCalc: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
john.bmi > mark.bmi ? console.log(john.name, john.bmi) : console.log(mark.name, mark.bmi);

