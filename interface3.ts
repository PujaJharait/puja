interface J
{
    abc():string;
    xyz(x:number): void;
    atoz();
}
let obj:J={
        abc:function(){
            return "Hi";
            
        },
        xyz:function(x:number)
        {
                console.log(x);
        },
        atoz:function()
        {
            console.log('hi baby');
        }

};
console.log(obj.abc());
obj.xyz(25);
obj.atoz();   

class Demo implements J{
    abc()
    {
        return"Hello";
    }
    xyz(y: number)
    {
        console.log('y value:'+y);
    }
    atoz()
    {
        console.log('Thanks Pa..')
    }
}
let obj2: J=new Demo();
console.log(obj2.abc());
obj2.xyz(1212);
obj2.atoz();