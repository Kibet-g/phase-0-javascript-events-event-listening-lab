function addingEventListener() {
    const input = document.getElementById('button'); // Select the button element
    input.addEventListener('click', function() {     // Add click event listener
      alert('I was clicked!');
    });
  }
  
  // Call the function to bind the event listener
  addingEventListener();
  