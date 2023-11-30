// throttling :-  kisi particular code ke number of execution ko kam kar dena ya limit kar dena


//  har baar ek div banao
// div ko absolute banao ek width and height do overflow hidden karo and div ke andar iamge banao and us imageko neeche
// push kardo 
// image ko animated way mei ooper lao

var box = document.querySelector(".box");
    // box.addEventListener("mousemove",function(details){
    //     console.log(details.clientX , details.clientY);     
    // })

const throttleFunction=(func, delay)=>{
     
    // Previously called time of the function
    let prev = 0; 
    return (...args) => {
      // Current called time of the function
      let now = new Date().getTime(); 
   
      // Logging the difference between previously 
      // called and current called timings
    //   console.log(now-prev, delay); 
       
      // If difference is greater than delay call
      // the function again.
      if(now - prev> delay){ 
        prev = now;
   
        // "..." is the spread operator here 
        // returning the function with the 
        // array of arguments
        return func(...args);  
      }
    };
  };
box.addEventListener("mousemove", throttleFunction((details)=>{
//   console.log("mouse is moving");  //kuch time par function chalega
    var div = document.createElement("div"); //creation of the div
    div.classList.add("imagediv"); //giving the class to the div

    div.style.left = details.clientX+'px'
    div.style.top = details.clientY+'px'

    var img = document.createElement("img"); //create the image element
    img.setAttribute("src","https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")  //give src by set attribute
    div.appendChild(img);

    document.body.appendChild(div);  // div me img append kar do

    gsap.to(img,{
        y:'0%',  //poora ooper le aao img ko
        ease:Power3,
        duration : 0.8
    })

    gsap.to(img,{
        y:'100%',  //img ko poora neeche le aao
        delay : 0.7,
        ease:Power2,
        // duration : 0.4
    })

    setTimeout(function(){
        div.remove();
    }, 1500);
    
}, 250));