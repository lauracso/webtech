

//JavaScript - client side code, running in the browser
    // DOM Manipulation (Document Object Model)
    //Event Handling
    //Form Validation (event handler for form submit)
    //AJAX calls
   //js code goes here

   document.write("is this working?");
   
   function onClick() {
    alert('is this working?');
   }

   function onSubmit(event) {
      answer = confirm('Do you want to submit?');

      if (answer) {
        return true;
      } else { 
        return false; 
      }
   }
