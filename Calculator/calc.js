
const screen = document.querySelector(".screen")
const Num_btns = document.querySelectorAll(".btn .num")
const operations = document.querySelectorAll(".btn .opt")
const equal = document.querySelector(".equal")
const report = document.querySelector(".report")

const ac = document.querySelector(".ac")

ac.addEventListener("click",()=>{
    screen.innerText = 0
    localStorage.removeItem("first-value")
})

var signs = []
var struct ,new_sign


screen.innerText = 0


Num_btns.forEach((b)=>{
    b.onclick = (e)=>{

        if(screen.innerText==='0'){

            screen.innerText = ''
            screen.innerText = e.target.innerText


        }else{
            
            if(screen.innerText.length >= 9){
                
            }else{

                const text = e.target.innerText
                screen.innerText += text
                
            }
           

        }


    }
})


operations.forEach(operation=>{
    operation.onclick = (e)=>{

        const sign = e.target.innerText

        signs.push(sign)

        localStorage.setItem("first-value",screen.innerText)

        screen.innerText = ''

        if(sign.length<=2){
            new_sign = signs[signs.length-1]
            console.log(new_sign)
       
          
        }

     
     }
     
})


equal.onclick = ()=>{
    Solve(localStorage.getItem("first-value"),screen.innerText,new_sign)
}

let update

function Solve(storageA,storageB,symbol){
    const digitA = Number(storageA)
    const digitB = Number(storageB)
 
   switch(new_sign){
    case '/':
      update = digitA / digitB;
      break;
    case '*':
      update = digitA * digitB;
      break;
    case '+':
      update = digitA + digitB;
      break;
    case '-':
        update = digitA - digitB;
        break;
   }
    
    if(screen.innerText=="infinity"){
        screen.innerText = '∞'
    }else{
        screen.innerText = update
    }
}



