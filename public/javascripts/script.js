var userAvatar = function(event) {
	var image = document.getElementById('userAvaOutput');
	image.src = URL.createObjectURL(event.target.files[0]);
};