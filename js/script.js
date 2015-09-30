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
					// console.log('click ----');
				} else {
					// console.log('tab -----');  
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


	// Excerpt
	excerptText = function() {

		$('.app-game-description').addClass('excerpt');

		$('.app-game-show-description-lnk').click(function(e){

			e.preventDefault();

			$('.app-game-description').toggleClass('excerpt');

			// Sustituyendo las palabras más/menos
			if ( $(this).text().indexOf('más') > -1) {
				$(this).text( $(this).text().replace('más', 'menos') )
			}
			else if ( $(this).text().indexOf('menos') > -1 ) {
				$(this).text( $(this).text().replace('menos', 'más') )
			}

		});
	};





	// Lanzamiento de funciones
	navActiveOpt();
	dataTabDataContent();
	swiper();
	navTabVsClick();
	stickyElement();
	excerptText();




	// Elementos
	var elemento = [
		{
			dataname: 'padding',
			option: 'padding',
			description: 'Space inside fancyBox around content. Can be set as array - [top, right, bottom, left].',
			type: 'Integer, Array;',
			default:  15
		},
		{
			dataname: 'margin',
			option: 'margin',
			description: 'Minimum space between viewport and fancyBox. Can be set as array - [top, right, bottom, left]. Right and bottom margins are ignored if content dimensions exceeds viewport',
			type: 'Integer, Array;',
			default: 20
		},
		{
			dataname: 'width',
			option: 'width',
			description: "Default width for 'iframe' and 'swf' content. Also for 'inline', 'ajax' and 'html' if 'autoSize' is set to 'false'. Can be numeric or 'auto'.",
			type: "Number, String",
			default: 800
		},
		{
			dataname: 'height',
			option: 'height',
			description: "Default height for 'iframe' and 'swf' content. Also for 'inline', 'ajax' and 'html' if 'autoSize' is set to 'false'. Can be numeric or 'auto'",
			type: "Number, String",
			default: 600
		},
		{
			dataname: 'minwidth',
			option: 'minWidth',
			description: "Minimum width fancyBox should be allowed to resize to",
			type: "Number",
			default: 100
		},
		{
			dataname: 'minheight',
			option: 'minHeight',
			description: "Minimum height fancyBox should be allowed to resize to",
			type: "Number",
			default: 100
		},
		{
			dataname: 'maxwidth',
			option: 'maxWidth',
			description: "Maximum width fancyBox should be allowed to resize to",
			type: "Number",
			default: 9999
		},
		{
			dataname: 'maxheight',
			option: 'maxHeight',
			description: "Maximum height fancyBox should be allowed to resize to",
			type: "Number",
			default: 9999
		},
		{
			dataname: 'autosize',
			option: 'autoSize',
			description: "If true, then sets both autoHeight and autoWidth to true",
			type: "Boolean",
			default: true
		},
		{
			dataname: 'autoheight',
			option: 'autoHeight',
			description: "If set to true, for 'inline', 'ajax' and 'html' type content width is auto determined. If no dimensions set this may give unexpected results",
			type: "Boolean",
			default: false
		},
		{
			dataname: 'autowidth',
			option: 'autoWidth',
			description: "If set to true, for 'inline', 'ajax' and 'html' type content height is auto determined. If no dimensions set this may give unexpected results",
			type: "Boolean",
			default: false
		},
		{
			dataname: 'autoresize',
			option: 'autoResize',
			description: "If set to true, the content will be resized after window resize event",
			type: "Boolean",
			default: '!isTouch'
		},
		{
			dataname: 'autocenter',
			option: 'autoCenter',
			description: "If set to true, the content will always be centered",
			type: "Boolean",
			default: '!isTouch'
		},
		{
			dataname: 'fittoview',
			option: 'fitToView',
			description: "If set to true, fancyBox is resized to fit inside viewport before opening",
			type: "Boolean",
			default: true
		},
		{
			dataname: 'aspectratio',
			option: 'aspectRatio',
			description: "If set to true, resizing is constrained by the original aspect ratio (images always keep ratio; see this example - if you want to change ratio for other media)",
			type: "Boolean",
			default: false
		},
		{
			dataname: 'topratio',
			option: 'topRatio',
			description: "Top space ratio for vertical centering. If set to 0.5, then vertical and bottom space will be equal. If 0 - fancyBox will be at the viewport top",
			type: "Number",
			default: 0.5
		},
		{
			dataname: 'leftratio',
			option: 'leftRatio',
			description: "Left space ratio for horizontal centering. If set to 0.5, then left and right space will be equal. If 0 - fancyBox will be at the viewport left",
			type: "Number",
			default: 0.5
		},
		{
			dataname: 'scrolling',
			option: 'scrolling',
			description: "Set the overflow CSS property to create or hide scrollbars. Can be set to 'auto', 'yes', 'no' or 'visible'",
			type: "String",
			default: 'auto'
		},
		{
			dataname: 'wrapcss',
			option: 'wrapCSS',
			description: "Customizable CSS class for wrapping element (useful for custom styling)",
			type: "string",
			default: ''
		},
		{
			dataname: 'arrows',
			option: 'arrows',
			description: "If set to true, navigation arrows will be displayed",
			type: "Boolean",
			default: true
		},
		{
			dataname: 'closebtn',
			option: 'closeBtn',
			description: "If set to true, close button will be displayed",
			type: "Boolean",
			default: true
		},
		{
			dataname: 'closeclick',
			option: 'closeClick',
			description: "If set to true, fancyBox will be closed when user clicks the content",
			type: "Boolean",
			default: false
		},
		{
			dataname: 'nextclick',
			option: 'nextClick',
			description: "If set to true, will navigate to next gallery item when user clicks the content",
			type: "Boolean",
			default: false
		},
		{
			dataname: 'mousewheel',
			option: 'mouseWheel',
			description: "If set to true, you will be able to navigate gallery using the mouse wheel",
			type: "Boolean",
			default: true
		},
		{
			dataname: 'autoplay',
			option: 'autoPlay',
			description: "If set to true, slideshow will start after opening the first gallery item",
			type: "Boolean",
			default: false
		},
		{
			dataname: 'playspeed',
			option: 'playSpeed',
			description: "Slideshow speed in milliseconds",
			type: "Integer",
			default: 3000
		},
		{
			dataname: 'preload',
			option: 'preload',
			description: "Number of gallery images to preload",
			type: "Integer",
			default: 3
		},
		{
			dataname: 'modal',
			option: 'modal',
			description: "If set to true, will disable navigation and closing",
			type: "Boolean",
			default: false
		},
		{
			dataname: 'loop',
			option: 'loop',
			description: "If set to true, enables cyclic navigation. This means, if you click 'next' after you reach the last element, first element will be displayed (and vice versa).",
			type: "Boolean",
			default: true
		},
	];
		
	// Comprobación independiente por cada elemento Fancybox
	$('.fancybox').each(function(index){

		// Fancybox actual
		var $currentFancy = $(this);

		// Variable de carga simple
		var simpleLoad = true;

		// Arrays de atributos / opciones / valores personalizados
		var existingAttrs = new Array,
			existingOptions = new Array,
			existingValues = new Array;

		// Comprobación de propiedades definidas
		$(elemento).each(function(i){

			// Nombre del atributo
			var nombreComun = 'fancybox-',
				atributo = nombreComun +  elemento[i].dataname;

			// Valor del atributo
			var value = $currentFancy.data(atributo);

			// Variable de comprobación de existencia del atributo
			var attrExists = typeof value !== typeof undefined && value !== false;

			// Si el atributo existe...
			if ( attrExists ){

				// Recogemos el valor del atributo
				var valueString = value.toString();

				// Añade el atributo / la opción Fancybox / el valor al Array de atributos existentes
				existingAttrs.push(elemento[i].dataname);
				existingOptions.push(elemento[i].option);
				existingValues.push(valueString);

				// Se anula la carga simple de Fancybox
				simpleLoad = false;
			}
		});


		// Carga condicional de Fancybox
		if (simpleLoad){

			// Carga el contenido en Fancybox
			$currentFancy.fancybox();

		} else {

			console.log('Atributos actuales = ' + existingAttrs);
			console.log('Opciones actuales = ' + existingOptions);
			console.log('Valores actuales = ' + existingValues);

			// Carga el contenido en Fancybox personalizado
			$currentFancy.fancybox({

				// Anula el ajustar a vista
				fitToView: false,

				// Tras la carga
				afterLoad: function(){

					// Aplica las opciones personalizadas
					$.extend(this, {
						minHeight: existingValues[0],
						maxWidth: existingValues[1],
					})
				}
			});
		}
	});
});