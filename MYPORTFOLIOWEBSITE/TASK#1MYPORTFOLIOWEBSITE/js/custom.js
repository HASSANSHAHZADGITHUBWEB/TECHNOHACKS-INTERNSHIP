$( document ).ready(function() {

	           

				$("#rate_input").hide();
				$("input[name='contact_type']").click(function() {
			        var test = $(this).val();
			        if(test=="hiring"){
			        	$("#rate_input").show();
			        }else{
			        	$("#rate_input").hide();
			        }			        
			    });	


                $('#contactForm').on('submit', function (e) {
                e.preventDefault();
                    var value=$("#postal_code").val();                          
					var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
					var match = regex.exec(value);
					if (match){										
					    e.currentTarget.submit();
					} else {
					       alert('Please enter a valid postal code!');
					}
            });        
        });
		document.getElementById('contactForm').addEventListener('submit', function(event) {
			event.preventDefault(); // Prevent the form from submitting normally
	  
			// Assuming you want to redirect to a new page after submission
			window.location.href = '/index.html';
