const input = prompt("Enter the string");
const formatted = input.toLowerCase().replace(/[^a-z0-9]/g,'')
let reversed = formatted.split('').reverse().join('');
if(formatted===reversed){
    console.log("This string is palindrome");
    
}
else{
    console.log("This is not  palindrome");
    
}