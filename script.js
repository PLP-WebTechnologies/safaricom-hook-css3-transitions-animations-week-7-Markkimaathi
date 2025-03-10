// Global variables
let globalCounter = 0;

// Function with parameters and return values
function calculateArea(width, height) {
    // Local variable
    const area = width * height;
    return area;
}

// Function demonstrating scope concepts
function scopeDemo() {
    // Local variable
    const localVar = "I'm local to scopeDemo";
    
    // Accessing global variable
    globalCounter++;
    
    // Nested function demonstrating closure
    function innerFunction() {
        console.log(localVar); // Can access parent's local variable
        console.log("Inner function accessed globalCounter:", globalCounter);
    }
    
    innerFunction();
    
    return {
        message: localVar,
        counter: globalCounter
    };
}

// Function to toggle CSS class for animations
function toggleClass(element, className) {
    element.classList.toggle(className);
}

// Event Listeners for Interactive Elements

// Calculator functionality
document.getElementById('calculateBtn').addEventListener('click', function() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (!isNaN(width) && !isNaN(height)) {
        const area = calculateArea(width, height);
        document.getElementById('result').innerHTML = `
            <p>The area of the rectangle is: <strong>${area}</strong></p>
            <p>Calculation: ${width} × ${height} = ${area}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `
            <p class="error">Please enter valid numbers for width and height</p>
        `;
    }
});

// Spinner toggle
document.getElementById('toggleSpinner').addEventListener('click', function() {
    const spinner = document.getElementById('spinner');
    toggleClass(spinner, 'active');
});

// Card flip
document.getElementById('toggleCard').addEventListener('click', function() {
    const card = document.getElementById('interactiveCard');
    toggleClass(card, 'flipped');
});

// Modal toggle
document.getElementById('toggleModal').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    toggleClass(modal, 'active');
});

// Close modal
document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    toggleClass(modal, 'active');
});

// Demo scope concept
document.getElementById('scopeDemoBtn').addEventListener('click', function() {
    const result = scopeDemo();
    console.log("Scope Demo Result:", result);
    alert(`Local message: ${result.message}\nGlobal counter: ${result.counter}`);
});

// Window click to close modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        toggleClass(modal, 'active');
    }
});