
function handleButtonClick() {
    const display = document.getElementById('display');

    if (this.textContent === 'C') {
        display.value = ""; // Clear the display
    } else if (this.textContent === '=') {
        try {
            const result = eval(display.value); // Evaluate the expression in the display
            display.value = result; // Show the result
        } catch (error) {
            display.value = "Error"; // Handle any invalid expression
        }
    } else {
        display.value += this.textContent; // Append the button text to the display
    }
}

document.querySelectorAll('.btn').forEach(button => 
    button.onclick = handleButtonClick
);
