$(document).ready(function() {
		var specifics = {
				'Residential': ['Lock Repair', 'Lock Installation', 'Alarm System Installation', 'Garage Door Locks', 'Gates and Fencing Lock', 'Peephole Installation'],
				'Automotive': ['Emergency Car Lockout', 'Ignition Repair', 'Ignition Unlock', 'Broken Key Extration', 'Transponder Chip Key Production'],
				'Commercial': ['Safe Installation', 'Full Service Alarm Installation', 'Panic Doors','File Cabinet Locks', 'Access Control Systems'],
		}
		var $specifics = $('#specific_service');
		$('#services').change(function () {
				var services = $(this).val(), spcs = specifics[services] || [];
				var html = $.map(spcs, function(spc){
						return '<option value="' + spc + '">' + spc + '</option>'
				}).join('');
				$specifics.html(html);
		});
		// Capture the form inputs
		$("#submitRequest").on("click", function(){
			// Form validation
			function validateForm() {
			var isValid = true;
			$('.service-form').each(function() {
				if ( $(this).val() === '' )
						isValid = false;
			});
			$('.chosen-select').each(function() {
				if( $(this).val() === "")
					isValid = false
			})
			return isValid;
		}
		// If all required fields are filled
		if (validateForm() == true)
		{
			// Create an object for the user's data
				var userData = {
					client_name: $("#client_name").val(),
					client_location: $("#client_location").val(),
					client_contact: $('#client_contact').val(),
					services: $('#services').val(),
					specific_service: $('#specific_service').val()
				}

        // send an AJAX POST-request with jQuery
        $.post("/api/new", userData)
          // on success, run this callback
          .done(function(data) {
            // log the data we found
            console.log(data);
          });

				alert("Your request is being processed. Thank you!");
				$('.full-services-form').trigger('reset');
				$('#service-modal').modal('hide');
		}
		else
		{
			alert("Please fill out all fields before submitting!");
		}
			return false;
		});

});
