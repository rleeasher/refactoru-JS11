$(document).ready(function(){


// // You have some Javascript data (primitive value, array, object, etc)
// var numDocs = 10;

// // Use jQuery to create a new DOM element.
// var messageEl = $("<p>You have {0} documents.</p>".supplant(numDocs));

// // Add the DOM element to the page.
// $("body").append(messageEl);

var updateInfo = function(){
	var fname = $('#fname').text();
	var bio = $('#biography').text();
	var books = $('#books').text();
	var libs = $('#js-libraries').text();

	$('#formName').val(fname);
	$('#formBio').val(bio);
	$('#formBook').val(books);
	$('#formLibraries').val(libs);


	$('#change-form').css('display','block');
};

var submitInfo = function(e){
	e.preventDefault();

	var fnamesubmit = $('#formName').val();
	var biosubmit = $('#formBio').val();
	var bookssubmit = $('#formBook').val();
	var libssubmit = $('#formLibraries').val();

	$('#fname').text(fnamesubmit);
	$('#biography').text(biosubmit);
	$('#books').text(bookssubmit);
	$('#js-libraries').text(libssubmit);

	$('#change-form').css('display','none');

};

$(document).on('click','#edit-button', updateInfo);

$(document).on('submit','#input-form', submitInfo);


});