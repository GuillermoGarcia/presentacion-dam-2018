/*
 * Custom JS
 */

/*
 * Cargar partes comunes
 */

 $(function() {
	console.log("Funcionando Cargar Vistas");
	$("#header").load(
		"comun/header.html",
		function(responseTxt, statusTxt, jqXHR) {
    	if (statusTxt == "error") {
        alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
    	}
	});
});