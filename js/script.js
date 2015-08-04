// Menú principal | Opción activa
$(document).ready(function(){
	var str=location.href.toLowerCase();
	$("nav a").each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
			$("nav a").removeClass("activa");
			$(this).addClass("activa");
		}
	});
});

// Menú | Tab
// $(document).ready(function(){
// 	var modulo = '.menu-tab';

// 	$(modulo).each(function(){
// 		var tabs = $(this).find('.menu-tab-options');
// 		var tab = $(tabs).find('li');
// 		var tabLink = $(tab).find('a');
// 		var content = $(modulo).find('.menu-tab-content > *')

// 		function prevenirEnlace() {
// 			$(tabLink).click(function (e){
// 				e.preventDefault();
// 			})
// 		}

// 		function definirAnchoTab() {
// 			var numeroTabs = $(tab).length;
// 			var anchoTab = 100 / numeroTabs + '%';

// 			$(tab).width(anchoTab);
// 		}

// 		function activarPrimerTab(){
// 			var primerTab = $(tab).first();

// 			$(primerTab).addClass('activa');
// 		}

// 		function cambiarTabActivo(){
// 			$(tab).click(function(){
// 				$(tab).removeClass('activa');
// 				$(this).addClass('activa')
// 			});
// 		}

// 		function mostrarPrimerContenido() {
// 			var firstContent = $(content).eq(0);
			
// 			$(content).hide();
// 			$(firstContent).show();
// 		}

// 		// function filtrarContenido() {
// 		// 	var primerContent = $(content).first();

// 		// 	$(content).hide();
// 		// 	$(primerContent).show();

// 		// 	$(tab).click(function(){
// 		// 		indexActual = $(this).index();
// 		// 		contentActual = $(content).eq(indexActual);
// 		// 		if ($(contentActual)){
// 		// 			$(content).hide();
// 		// 			$(contentActual).show();
// 		// 		}
// 		// 	})
// 		// }

// 		prevenirEnlace();
// 		definirAnchoTab();
// 		activarPrimerTab();
// 		cambiarTabActivo();
// 		mostrarPrimerContenido();
// 		// filtrarContenido();
// 	});
// });

$(document).ready(function(){
	$('[data-tab]').on('click', function (e) {
		$(this)
			.addClass('active')
			.siblings('[data-tab]')
			.removeClass('active')
			.siblings('[data-content=' + $(this).data('tab') + ']')
			.addClass('active')
			.siblings('[data-content]')
			.removeClass('active')
			e.preventDefault()      
    });

});


// Fancybox
$(document).ready(function() {
	$('.fancybox').fancybox();
});


// Swiper
$(document).ready(function () {

	//initialize swiper when document ready  
	var mySwiper = new Swiper ('.swiper-container', {

		// Optional parameters
		direction: 'horizontal',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		scrollbar: '.swiper-scrollbar',
	})
});