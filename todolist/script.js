$ (document).ready(function() {

	$( "#taskInput" ).keypress(function(e){
		if(e.keyCode == 13 && $("#taskInput").val().trim() !== '') {
			$('#toDoList').prepend('<li class="itemElement">'+
				'<i class="fas fa-check-circle check"></i>'+
				'<span class="listItems">'+$("#taskInput").val()+'</span>'
				+'<i class="fas fa-times removeTask"></i></li>');
			$("#taskInput").val('');
			$("#NoElementsMsg").addClass("displayNone");
		}
	});

	$('#toDoList').on('click','.removeTask', function(e){
		$(this).parent().remove();
		DisplayNoElementsMsg();
	});
	$('#toDoList').on('click','.listItems', function(e){
		$(this).toggleClass('crossText');
	});
	$('#toDoList').on('click', '.check', function(e){
		$(this).toggleClass('checkGreen');
	});
	$('#selectAll').on('click',function(e){
		$('.check').addClass('checkGreen');
	});

	$('#deselectAll').on('click',function(e){
		$('.check').removeClass('checkGreen');
	});

	$('#deleteAll').on('click', function(e){
		$('.checkGreen').parent().remove();
		DisplayNoElementsMsg();
	});

	$('#uncheckAll').on('click', function(e){
		$('.listItems').removeClass('crossText');
	});

	$('#showAll').click(function(e){
		$('.listItems').parent().removeClass('displayNone');
		DisplayNoElementsMsg();
	});

	$('#showCheck').click(function(e){
		filterElement('.checkGreen');
	});

	$('#showCross').click(function(e){
		filterElement('.crossText');
	});

	$('#slideUp').click(function(e){
		slideContainer();
	});

	$('#slideDown').click(function(e){
		slideContainer();
	});

	function slideContainer(){
		$('.allContainer').slideToggle();
		$('#slideUp, #slideDown').toggleClass('displayNone');
	};

	function filterElement(className){
		let Elements = false;
		$('.itemElement').removeClass('displayNone');
		$('#NoElementsMsg').addClass('displayNone');
		$('.itemElement').each(function(elementIndex){
			if ($(this).find(className).length == 0){
				$(this).addClass('displayNone');
			} else {
				Elements = true;
			}
		})
		if(Elements === false){
			$('#NoElementsMsg').removeClass('displayNone');
		}
	};

	function DisplayNoElementsMsg(){
		if($('.listItems').length == 0){
			$('#NoElementsMsg').removeClass('displayNone');
		} else {
			$('#NoElementsMsg').addClass('displayNone');
		};
	};
});
