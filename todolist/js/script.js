$ (document).ready(function(){

	$( "#taskInput" ).keypress(function(e){
		if(e.keyCode == 13) {
			$("#taskList").append('<li>'+$('#taskInput').val()+'<span class="removeTask">X<span>''<li>');
			$('#taskList').val('');
		}
	});

});