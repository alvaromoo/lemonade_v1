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
$(document).ready(function(){
	var modulo = '.menu-tab';
	var tab = modulo + ' .menu-tab-options > li';
	var tabLink = modulo + ' .menu-tab-options > li';
	var content = modulo + ' .menu-tab-content > *';

	function prevenirEnlace() {
		$(tabLink).click(function (e){
			e.preventDefault();
		})
	}

	function definirAnchoTab() {
		var numeroTabs = $(tab).length;
		var anchoTab = 100 / numeroTabs + '%';

		$(tab).width(anchoTab);
	}

	function activarPrimerTab(){
		var primerTab = tab + ':first-of-type';

		$(primerTab).addClass('activa');
	}

	function cambiarTabActivo(){
		$(tab).click(function(){
			$(tab).removeClass('activa');
			$(this).addClass('activa')
		});
	}

	function filtrarContenido() {
		var primerContent = content + ':first-of-type';

		$(content).hide();
		$(primerContent).show();

		$(tab).click(function(){
			indexActual = $(this).index();
			contentActual = content + ':nth(' + indexActual + ')'
			if ($(contentActual)){
				$(content).hide();
				$(contentActual).show();
			}
		})
	}

	prevenirEnlace();
	definirAnchoTab();
	activarPrimerTab();
	cambiarTabActivo();
	filtrarContenido();
});