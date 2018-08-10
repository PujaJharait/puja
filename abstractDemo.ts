 abstract class Aa
{
    constructor()
    {
        console.log("Aa()");
    }
    abc1()
    {
            console.log("Hi");
    }
    abstract xyz1();
}
 abstract class  BB extends Aa
{
    constructor()
    {
        super();
        console.log("BB()")
    }
}
class CC extends BB
{
    constructor()
    {
        super();
        console.log("CC()");
    }
    xyz1()
    {
        console.log("Hello");

    }
}
var obj4= new CC();
obj4.abc1();
obj4.xyz1();