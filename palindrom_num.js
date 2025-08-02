const input  = prompt("Enter the number");
const reversed = input.split('').reverse().join('');
if(input===reversed){
    console.log("This is an palindrome");
    
}
else{
    console.log("This is not a palindrome");
    
}