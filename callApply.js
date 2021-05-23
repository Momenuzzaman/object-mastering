const person ={
    firstName: "Md",
   lastName: "Zaman",
   salary: 13000,
   fullName: function(){
      console.log(this.firstName,this.lastName);
   },
   bill: function(amount, tax){
       console.log(this)
       this.salary = this.salary-amount-tax;
       return this.salary;
   }
};
const person2 = {
    firstName: "Rafiq",
    lastName: "uddin",
    salary:10000
}
// bind

const person2Bill = person.bill.bind(person2);
person2Bill(2000);
person2Bill(2000);
console.log(person2.salary);
console.log(person.salary);


const person3 = {
    firstName:  "hero",
    lastName: "alom",
    salary: 25000
}
// call

person.bill.call(person3,3000,500);
console.log(person3.salary)
