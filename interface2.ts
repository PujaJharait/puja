interface I
{
    name:string;
    age:number;
    desg?:string;
}
let emp1:I ={name:'Pu',age:23,desg:'Develpoer' };
let emp2:I ={ name:'Adi',age:35};
console.log(emp1.name);
console.log(emp1.age);
console.log(emp1.desg);
console.log('---------');
console.log(emp2.name);
console.log(emp2.age);
console.log(emp2.desg);