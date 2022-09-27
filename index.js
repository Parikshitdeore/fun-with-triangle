const angles = document.querySelectorAll(".angle");
const calcbutton = document.querySelector("#calc-btn")
const output = document.querySelector("#output")

function calculateSum(){
    const sumOfAngles= calculateangles(Number(angles[1].value),Number(angles[1].value),Number(angles[2].value))

    if (sumOfAngles===180){
        output.innerText="Your angles make a Triangle"
    }
    else{
        console.log(angles[1].value)
        output.innerText = "Your angles do no  make a Triangle"
    }

}
function calculateangles(angle1,angle2,angle3){
    sumOfAngles= angle1+angle2+angle3;
    return sumOfAngles
}
    
calcbutton.addEventListener("click",calculateSum)
