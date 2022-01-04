function getValues(){
    let startValue = document.getElementById("startValue").value;
    let stringReversed = reverseString(startValue);
    displayString(stringReversed);
}

//reverse the string
function reverseString(startValue){
    let stringReversed = "";
    for(i=startValue.length-1; i>=0; i--){
        stringReversed += startValue[i];
    }
    return stringReversed;
}

//display the reversed string on the page
function displayString(stringReversed){
    
    let templateRows = `<p>${stringReversed}</p>`
    document.getElementById("results").innerHTML = templateRows;
}
