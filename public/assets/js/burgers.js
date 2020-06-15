$(function(){
	$(".devour").on("click", function(event){
		var id = $(this).data("id");
		var newDevour = $(this).data("newdevour");

		var newDevourState = {
			devoured: newDevour
		};

	    // Send the PUT request.
	    $.ajax("/api/burgers/" + id, {
	    	type: "PUT",
	    	data: newDevourState
	    }).then(
	    function() {
	    	console.log("changed devoured to", newDevour);
	        // Reload the page to get the updated list
	        location.reload();
	    }
    	);
	});

	$("#add-burger").on("submit", function(event){
		// Make sure to preventDefault on a submit event.
		event.preventDefault();

		var newBurger = {
			name: $("#burger").val().trim(),
			//devoured: false - not needed, sql database auto default is false
		};

	    // Send the POST request.
	    $.ajax("/api/burgers", {
	    	type: "POST",
	    	data: newBurger
	    }).then(
	    function() {
	    	console.log("new burger");
	        // Reload the page to get the updated list
	        location.reload();
	    }
	    );
	});

	$(".delete").on("click", function(event) {
		var id = $(this).data("id");

	    // Send the DELETE request.
	    $.ajax("/api/burgers/" + id, {
	    	type: "DELETE",
	    }).then(
	    function() {
	    	console.log("deleted burger", id);
	        // Reload the page to get the updated list
	        location.reload();
	    }
	    );
	});
});