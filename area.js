const sides = document.querySelectorAll(".sides")
const calcbtn = document.querySelector("#calc-button")
const output = document.querySelector("#output")

calcbtn.addEventListener("click",calcArea)

function heron(a,b,c){
   perimeter = (a+b+c)/2
   console.log(perimeter)
   area=((perimeter)*(perimeter-a)*(perimeter-b)*(perimeter-c))
   area =Math.sqrt(area)
return parseFloat(area).toFixed(4)
    }
function calcArea(){
    output.innerText=heron((Number(sides[0].value)),Number(sides[1].value),Number(sides[2].value))
}
