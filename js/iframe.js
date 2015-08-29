// iFrame
$(document).ready(function(){
	$('iframe').iframeHeight();
	// $('#iframe-2 iframe').iframeHeight();
	if($('iframe')){
		$('iframe').trigger('updateIframe');
	}
});