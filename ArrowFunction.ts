function abc1()
{
    console.log('Hi');

}
var abc2=function()
{
    console.log('Hello');
}
var abc3 =()=>{
    console.log('Thanks');
}
abc1();
abc2();
abc3();

class Abc{
 str='Hi puji';
 constructor()
 {
     var s=this;
     console.log('Constructor:'+this.str);
     setTimeout(function()
     {
         console.log(this.str);
        
 },3000);
}
display()
{
    console.log('Display:'+this.str);
}
}
class Abc2{
    str='Hi puji';
    constructor()
    {
        
        console.log('Constructor:'+this.str);
        setTimeout(()=>
        {
            console.log(this.str);
           
    },3000);
   }
   display()
   {
       console.log('Display2:'+this.str);
   }
   }
   var a1=new Abc();
   a1.display();
   var a2=new Abc2();
   a2.display();
   
