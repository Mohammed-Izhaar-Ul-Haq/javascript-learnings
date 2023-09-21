//old schol

// document.getElementById('01').onclick=function (params) {
//     alert("was clicked")
// }


//other important methods

//type,timestamp,preventDefault
//target,toElement,srcElement,currentTarget

//interview
//clientX,clientY,screenX,screenY
//altKey,ctrlKey,shiftKey,keyCode

//event propogation 
//bubbling ,event capturing

// document.getElementById("images").addEventListener('click',function (e) {
//     console.log("clicked inside the ul");
  
// },false);

// document.getElementById("01").addEventListener(
//   'click',
//   function (e) {
//     console.log("clicked on 01");
//     e.stopPropagation();
//   },false
// );

document.getElementById("google").addEventListener(
    'click',
    function (e) {
      
     e.preventDefault();
     e.stopPropagation();
     console.log("clicked on google");
    },false
  );


  //to create capch image gayab

//   document.querySelector('#images').addEventListener('click',function(e) {
//     console.log(e.target.parentNode);
//     let removeIt=e.target.parentNode
//     removeIt.remove()
//   })

document.querySelector('#images').addEventListener('click',function(e) {
    console.log(e.target.tagName);
    if(e.target.tagName==='IMG'){
        let removeIt=e.target.parentNode
        removeIt.remove()

    }
  })




