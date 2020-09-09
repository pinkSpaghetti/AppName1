var userAvatar = function(event) {
	var image = document.getElementById('userAvaOutput');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var channelAvatar = function(event) {
	var image = document.getElementById('channelAvaOutput');
	image.src = URL.createObjectURL(event.target.files[0]);
}