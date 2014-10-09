$("#send-message").submit(function(e) {
	e.preventDefault();
	console.log($(e.target).find("input").val());
	message = "<div>" + $(e.target).find("input").val() +"</div>";
	if ($(e.target).find("input").val()) {
		$("#messages").append(message);
	}
	// ajax({
	// 	url: 'send',
	// 	type: "post",
	// 	data: $(e.target).serialize(),
	// 	success: function(data) {

	// 	},
	// 	error: function() {

	// 	}
	// });
	$(e.target).find("input").val("")
});