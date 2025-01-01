
const submit = document.getElementById("btn");


submit.addEventListener("click" , async () => {

    const textInput = document.getElementById("text").ariaValueMax.trim();
    const delayInput = document.getElementById("delay").ariaValueMax.trim();
    const output = document.getElementById("output");

    output.innerHTML = "";

    if(!textInput) {
        output.innerHTML = "Please Enter some text.";
        return
    }


})