const person ={
    firstName: "Md",
   lastName: "Zaman",
   salary: 3000,
   fullName: function(){
      return(this.firstName,this.lastName);
   },
   bill: function(amount){
       this.salary = this.salary-amount;
       return this.salary;
   }

}
console.log(person.firstName,person.lastName);

person.bill(1000);
console.log(person.salary);
