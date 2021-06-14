var addto=document.getElementById("btn");
var inputfielddata=document.getElementById("inputfield");
var Todocontainer=document.getElementById("todoContainer");
var paragraph;
addto.addEventListener('click', function()
{
   var paragraph=document.createElement('p');
   paragraph.innerHTML=inputfielddata.value;
   paragraph.classList.add("paragraph-styling");
   
  
 //  var b= document.createElement("button");
 // paragraph.appendChild(b);
  Todocontainer.appendChild(paragraph);
   inputfielddata.value="";
   paragraph.addEventListener('click',function(){
    //alert("Hi");
    paragraph.style.textDecoration="line-through";
   // alert("By");

   })
   paragraph.addEventListener('dblclick',function(){
   // alert("Hi");
    Todocontainer.removeChild(paragraph);
    alert("Item Remove sucessfully");

   })
})
