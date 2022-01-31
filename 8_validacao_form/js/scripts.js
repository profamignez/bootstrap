(function() {

    'use strict'

  var forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms)
  .forEach(function (form) {
      
      form.addEventListener('submit', function (event) {
          if(!form.checkValidity()) {
              Event.preventDefault();
              Event.stopPropagation();
          }    

          form.classList.add('was-validated');

          }, false);  
      
  });

})() 