// // Gets an optional query string from our url (i.e. ?post_id=23)
// var url = window.location.search;
// var jobId;
// // Sets a flag for whether or not we're updating a post to be false initially
// var updating = false;
//
// // If we have this section in our url, we pull out the post id from the url
// // In localhost:8080/cms?post_id=1, postId is 1
// if (url.indexOf("?job_id=") !== -1) {
//   jobId = url.split("=")[1];
//   getJobData(jobId);
// }
//
// // Getting jQuery references to the post body, title, form, and category select
// var nameInput = $("#inputClient");
// var locationInput = $("#inputLocation");
// var contactInput = $('#inputContact');
// var serviceInput = $('#services');
// var specificInput: $('#specific');
// var clientForm = $("#clientForm");
// // Adding an event listener for when the form is submitted
// $(clientForm).on("submit", function handleFormSubmit(event) {
//   event.preventDefault();
//   // Wont submit the post if we are missing a body or a title
//   if (!nameInput.val().trim() || !locationInput.val().trim() || !contactInput.val().trim() || !serviceInput.val().trim() || !specificInput.val().trim()) {
//     return;
//   }
//   // Constructing a newPost object to hand to the database
//   var newJob = {
//     name: nameInput.val().trim(),
//     location: locationInput.val().trim(),
//     contact: contactInput.val().trim(),
//     service: serviceInput.val().trim(),
//     specific: specificInput.val().trim()
//   };
//
//   console.log(newJob);
//
//   // If we're updating a post run updatePost to update a post
//   // Otherwise run submitPost to create a whole new post
//   if (updating) {
//     newPost.id = postId;
//     updatePost(newPost);
//   }
//   else {
//     submitPost(newPost);
//     alert("Your request is being processed. Thank you!");
//     $('.full-services-form').trigger('reset');
//     $('#service-modal').modal('hide');
//   }
// });
