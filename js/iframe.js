// // Iframe
// $(document).ready(function(){
// 	var iframeOculto = '.iframe-1 iframe';

// 	var iframeVisible = '.iframe-2 iframe';

// 	$(iframeOculto).load(function(){
// 		var alturaIFrame = $(this).outerHeight() + 'px';

// 		$(iframeVisible).height(alturaIFrame);
		
// 		console.log(alturaIFrame);
// 	});
// });

$('iframe').load(function() {
    this.style.height =
    this.contentWindow.document.body.offsetHeight + 'px';
});