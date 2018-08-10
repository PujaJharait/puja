class Ab
{
     private x:number;
     protected y:number;
    z:number; //default is public
constructor(x:number,y:number,z:number)
{
    this.x=x;
    this.y=y;
    this.z=z;
}
 display()
 {
     console.log(this.x);
     console.log(this.y);
     console.log(this.z);
 }
}

class Bc extends Ab
{
    constructor(x:number,y:number,z:number)
    {
        super(x,y,z);
    }
    displayAll()
    {
        //console.log(this.x);
     console.log(this.y);
     console.log(this.z);
 }
    }
    class Cd 
    {
        obj= new Ab(10,20,34);
        displayAll()
    {
        //console.log(this.x);
    // console.log(this.y);
     console.log(this.obj.z);
 }
    
}
    let b1= new Ab(11,22,33);
    b1.display();
    let b2=new Bc(12,13,14);
    b2.displayAll();
    let b3= new Cd();
    b3.displayAll();

