$(document).ready(function(){
	var str=location.href.toLowerCase();
	$("nav a").each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
			$("nav a").removeClass("activa");
			$(this).addClass("activa");
		}
	});
});