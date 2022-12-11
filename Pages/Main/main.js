let burger=document.getElementsByClassName("burgerOpen");
let burgerButton=document.getElementsByClassName("burger");
let mainTag=document.getElementsByTagName("main");
let backGroundGrey = document.getElementsByClassName("bc-grey");
let animalCards= document.querySelectorAll(".cardImg");

async function openBurger(){
   
    await burger ;
    await burgerButton;
    await backGroundGrey;
 
burgerButton[0].addEventListener("click", (event) =>{
  
   burger[0].style.display="flex";
   backGroundGrey[0].style.display="flex";
    
})
}
function checkScreen(){
  
        burger[0].style.display="none";
        backGroundGrey[0].style.display="none";
    
}
 window.onload =  (event) => {
      openBurger();
      closeBurger();
      popCards();
      eventListener();
      generate();
      carousel();
      testimonialScroll();
      popupTestimonial();
    };


       window.addEventListener("resize",(event)=>{
        console.log(event.target.value)
        checkScreen();
        })

 function closeBurger(){
    backGroundGrey[0].addEventListener("click",(event)=>{
            burger[0].style.display="none";
            backGroundGrey[0].style.display="none";
    })

    burger[0].addEventListener("click",(event)=>{
        burger[0].style.display="none";
        backGroundGrey[0].style.display="none";

    })

}

function AddIDs(){
    let animalCards= document.querySelectorAll(".cardImg");
for(var i=0; i<animalCards.length;  i++){
    animalCards[i].id=`${i}`;
  }
}

async function popCards(){
    let popupImg;
    let fixDisplay=document.getElementsByTagName("html");
    let body=document.getElementsByTagName("body")
    let animalCards= document.querySelectorAll(".Card");
 AddIDs();
   

   animalCards.forEach(x => {
    x.addEventListener("click", async(event)=>{
        console.log(event.target.id)

        backGroundGrey[0].style.display="flex";
        popupImg = document.createElement("img");
         popupImg.src=`${event.target.src}`;
        
        popupImg.style.cssText=`position:fixed;
        top:21%;
        right:25%;
        z-index:150;
        width:500px;
        height:400px;`;
        body[0].append(popupImg);
        fixDisplay[0].style.overflow="hidden";
    })
   });
   backGroundGrey[0].addEventListener("click",(event)=>{
    if(body[0].contains(popupImg)){
    body[0].removeChild(popupImg);
    }
    fixDisplay[0].style.overflow="auto";
   })
}



//carousel
function generate(){
    let cards = document.getElementsByClassName("Card");
    let numbers = [];
    for(var i=0; i<7; i++){
        let number = Math.floor(Math.random() * 7);  //Math.random(0,cards.length);
        if(numbers.includes(number)){
            i--; 
        }else{
            numbers.push(number);
        }
       
    }
    return numbers;
}

//function carousel
 async function carousel(){
    let AnimalsArr =[];
    const  animalsJson = await fetch("./animals.json") //path to the file with json data
    .then(response => {
        return response.json();
    }).then(x=>x.animals.forEach(y=>{
        AnimalsArr.push(y)
    }));
console.log(AnimalsArr)
    let cards = document.querySelectorAll(".Card");
    let numbers =  generate();
    cards.forEach((x,index)=>{
        
        let mainImage =x.childNodes[1];
        let text1=x.childNodes[3].childNodes[1].childNodes[1];
        let text2=x.childNodes[3].childNodes[1].childNodes[3];
       let iconDiv=x.childNodes[3].childNodes[3];
        let icon=x.childNodes[3].childNodes[3].childNodes[1];
     
        mainImage.src=AnimalsArr[numbers[index]].img;
        text1.innerText=AnimalsArr[numbers[index]].name;
        icon.src=AnimalsArr[numbers[index]].food;
        text2.innerText=AnimalsArr[numbers[index]].description;
        iconDiv.style.backgroundImage=`URL(${AnimalsArr[numbers[index]].backGrnd})`;
      ;
        
    });
 }

function eventListener(){
    let next = document.getElementsByClassName("left");
    let next2=document.getElementsByClassName("leftArrow");
    let prev = document.getElementsByClassName("right");
    let prev2= document.getElementsByClassName("rightArrow");
    next[0].addEventListener("click", (event)=>{
          carousel()});
    next2[0].addEventListener("click",  (event)=>{
        carousel()});
    prev[0].addEventListener("click", (event)=>{
        carousel()});
    prev2[0].addEventListener("click",  (event)=>{
        carousel()});

}

function testimonialScroll(){
    let range = document.getElementsByClassName("scrollmenu");
    let content =  document.getElementsByClassName("tetimonialCards");
    content[0].style.objectPosition="0%";
    let rangeValue;
    range[0].addEventListener("change", (event)=>{
    if(rangeValue>range[0].value){
        content[0].scrollBy({
            behavior: 'smooth',
            left:-1200,
            right:0
        });
        
    }else{
        content[0].scrollBy({
            behavior: 'smooth',
            left:1200,
            right:0
        });
    }
        rangeValue=range[0].value;

       
    })
}

//popup testimonials

async function popupTestimonial(){
 
    let cards = document.querySelectorAll(".Tcard");
    let body = document.getElementsByTagName("body");
    let fixDisplay=document.getElementsByTagName("html");
    await cards;
    let backGroundGrey = document.getElementsByClassName("bc-grey");
    cards.forEach(x=>{
        x.addEventListener("click",(event)=>{
            backGroundGrey[0].style.display="block";
            let clone =x.cloneNode(true);
            backGroundGrey[0].append(clone);
        
        clone.style.cssText=`position:fixed;
        top:21%;
        right:20%;
        z-index:150;
        width:400px;
        height:300px;`
        fixDisplay[0].style.overflow="hidden";
    })
        })
    

    
    // if(window.innerWidth<350){
        
    // }
}