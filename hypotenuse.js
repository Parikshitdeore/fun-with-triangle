const sides = document.querySelectorAll(".sides")
const calcbtn = document.querySelector("#calc-button")
const output = document.querySelector("#output")

calcbtn.addEventListener("click",calcHypotenuse)

function sumOfSquare(a,b){
    sum=Number(a*a)+Number(b*b);
    rootofsum=Math.sqrt(sum)
    rootofsum=parseFloat(rootofsum).toFixed(4)
    return rootofsum

    }
function calcHypotenuse(){
    if(sides[0].value&&sides[1].value>0){
    output.innerText=sumOfSquare(sides[0].value,sides[1].value)+" units"
    }
    else{
        alert("Please Enter proper Input")
    }
}
