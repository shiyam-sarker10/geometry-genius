function callId (id){
    const call  = document.getElementById(id);
    return call
}
function getInputValue (inputId){
    if(inputId <= 0){
        alert("Please give a positive number")
        return null
    }
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const inputValueToNumber = parseFloat(inputValue);
    return inputValueToNumber;
}
function setText(inputId, setMaterial){
const input = document.getElementById(inputId).innerText = setMaterial;
}