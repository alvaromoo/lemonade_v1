$(document).ready(function() {

	// Menú principal | Opción activa
	navActiveOpt = function(){

		var str = location.href.toLowerCase();
		$("nav a").each(function() {
			if (str.indexOf(this.href.toLowerCase()) > -1) {
				$("nav a").removeClass("activa");
				$(this).addClass("activa");
			}
		});
	};


	// Data-tab y data-content (no sé bien qué hace)
	dataTabDataContent = function() {

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
	};


	// Fancybox
	fancybox = function() {
		$('.fancybox').fancybox();
	};


	// Swiper
	swiper = function() {

		//initialize swiper when document ready  
		var mySwiper = new Swiper ('.swiper-container', {

			// Optional parameters
			direction: 'horizontal',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			scrollbar: '.swiper-scrollbar',
		})
	};


	// Focus Tab vs Focus Click
	navTabVsClick = function() {

		var lastFocusedElement = null;
		var isClick = false;
		var elementos = 'a, input';

		$(elementos).mousedown(function(e) {     
			isClick= true;
		}).focus(function(e){

			// To prevent focus firing when element already had focus
			if (lastFocusedElement != e.target) {
				if (isClick) {
					console.log('click ----');
				} else {
					console.log('tab -----');    
				}
				lastFocusedElement = e.target;
				isClick = false;
			}
		});

		$(document.body).focus(function(){
			lastFocusedElement = document.body;
		});
	};


	// Sticky element
	stickyElement = function() {

		var clase = '.sticky-element';
		var elemento = $(clase);

		if ( elemento.length ) {

			var stickyNavTop = elemento.offset().top;
			
			stickyNav = function(){
				var scrollTop = $(window).scrollTop();

				if (scrollTop > stickyNavTop) { 
					elemento.addClass('sticky');
				} else {
					elemento.removeClass('sticky'); 
				}
			};
			
			stickyNav();
			 
			$(window).scroll(function() {
				stickyNav();
			});
		}
	};





	// Lanzamiento de funciones
	navActiveOpt();
	dataTabDataContent();
	fancybox();
	swiper();
	navTabVsClick();
	stickyElement();	
	
});











































// Menú | Tab
// $(document).ready(function(){
//  var modulo = '.menu-tab';

//  $(modulo).each(function(){
//      var tabs = $(this).find('.menu-tab-options');
//      var tab = $(tabs).find('li');
//      var tabLink = $(tab).find('a');
//      var content = $(modulo).find('.menu-tab-content > *')

//      function prevenirEnlace() {
//          $(tabLink).click(function (e){
//              e.preventDefault();
//          })
//      }

//      function definirAnchoTab() {
//          var numeroTabs = $(tab).length;
//          var anchoTab = 100 / numeroTabs + '%';

//          $(tab).width(anchoTab);
//      }

//      function activarPrimerTab(){
//          var primerTab = $(tab).first();

//          $(primerTab).addClass('activa');
//      }

//      function cambiarTabActivo(){
//          $(tab).click(function(){
//              $(tab).removeClass('activa');
//              $(this).addClass('activa')
//          });
//      }

//      function mostrarPrimerContenido() {
//          var firstContent = $(content).eq(0);
			
//          $(content).hide();
//          $(firstContent).show();
//      }

//      // function filtrarContenido() {
//      //  var primerContent = $(content).first();

//      //  $(content).hide();
//      //  $(primerContent).show();

//      //  $(tab).click(function(){
//      //      indexActual = $(this).index();
//      //      contentActual = $(content).eq(indexActual);
//      //      if ($(contentActual)){
//      //          $(content).hide();
//      //          $(contentActual).show();
//      //      }
//      //  })
//      // }

//      prevenirEnlace();
//      definirAnchoTab();
//      activarPrimerTab();
//      cambiarTabActivo();
//      mostrarPrimerContenido();
//      // filtrarContenido();
//  });
// });