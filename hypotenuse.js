const sides = document.querySelectorAll(".sides")
const calcbtn = document.querySelector("#calc-button")
const output = document.querySelector("#output")

calcbtn.addEventListener("click",calcHypotenuse)

function sumOfSquare(a,b){
    console.log(a)
    console.log(b)
    sum=Number(a*a)+Number(b*b);
    rootofsum=Math.sqrt(sum)
    rootofsum=parseFloat(rootofsum).toFixed(4)
    return rootofsum

    }
function calcHypotenuse(){
    output.innerText=sumOfSquare(sides[0].value,sides[1].value)+" units"
}
