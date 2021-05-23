const person ={
    firstName: "Md",
   lastName: "Zaman",
   salary: 13000,
   fullName: function(){
      console.log(this.firstName,this.lastName);
   },
   bill: function(amount){
       console.log(this)
       this.salary = this.salary-amount;
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
