var items=[];// for var Example
for(var i in items)
{
    console.log(i);
}
console.log(i);

for(const j in items) //const example
{
    console.log(j);
}
//console.log(j);------cant find name j error`


  // Template String

  var str=
  `<html>
  <h1>hello</h1>
  <hr>
  <form>
  <input type='text' name='t1'>
  <br>
  <p>Just For Demo</p>;`
  console.log(str);

  let x=5;
  let y=10;
   var result=`<div> Result is ${x+y}</div>`;
    console.log(result);