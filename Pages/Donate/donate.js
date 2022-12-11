window.onload =  (event) => {
   
    validateInput();
    highlightcircle();
    
  };
function validateInput(){
    let inputAmount = document.getElementById("inputAmount");
    inputAmount.addEventListener("keydown", (event)=>{
        if(inputAmount.value.length>3){
            inputAmount.style.background="red";
            
        }else{
            inputAmount.style.background="green";
        }
    })
}


function highlightcircle(){
    let inputAmount = document.getElementById("inputAmount");
    let getCircle = document.getElementsByName("amount");
    getCircle.forEach(x=>{
        x.addEventListener("click", (event)=>{
        let y = x.nextElementSibling.innerHTML; 
        let z = y.substring(1,y.length);
        let amount = parseInt(z);
     //inputAmount.innerHTML="";
     inputAmount.value=amount;
                 
        })

    })
}


