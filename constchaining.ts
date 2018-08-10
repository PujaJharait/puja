class A
{
    constructor()
    {
        console.log("A()");
    }
}
class B extends A
{
    constructor()
    {
        super();
        console.log("B()");
    }
}
class C extends B
{
    constructor()
    {
        
        super();
        console.log("C()");
    }
}
var c1=new C();