var prezzo_prodotto = [];
var n_prodotti = [];
var nome_prodotto = [];
var id_prodotto = [];
var n_articoli = 0;

function getPrezzoTotaleProdotto (n) {
	var totale = n_prodotti[n] * prezzo_prodotto[n];
	
	return totale;
};

function getPrezzoTotaleProdotti () {
	var totale = 0;
	for (var i = 0; i < n_prodotti.length; i++) {
		totale += n_prodotti[i] * prezzo_prodotto[i];
	};

	return totale;
};

function readData () {
	n_articoli = document.getElementById('tabella').rows.length;

	var cookie = document.cookie;
	var splitted = cookie.split("; ");

	for (var i = 0; i < n_articoli; i++) {
		var k = i * 4;

		if (splitted[k] !== undefined) {
			nome_prodotto[i] = splitted[k].split("=")[1];			
		};

		if (splitted[k+1] !== undefined) {
			prezzo_prodotto[i] = splitted[k+1].split("=")[1];			
		};

		if (splitted[k+2] !== undefined) {
			n_prodotti[i] = splitted[k+2].split("=")[1];
			
		};

		if (splitted[k+3] !== undefined) {
			id_prodotto[i] = splitted[k+3].split("=")[1];
		}
	};	
};

function setData () {
	document.getElementById('totale').innerHTML = "Totale: " + Number(getPrezzoTotaleProdotti()).toFixed(2) + " \u20AC";
	for (var i = 0; i < n_articoli; i++) {
		if (n_prodotti[i] == 0) {
			document.getElementById("riga_n".concat(i)).style.display = "none";
		}
		else {
			document.getElementById('nome_p'.concat(i)).innerHTML = nome_prodotto[i];
			document.getElementById('prezzo_p'.concat(i)).innerHTML =  Number(prezzo_prodotto[i]).toFixed(2) + " \u20AC";
			document.getElementById('carrello_n_p'.concat(i)).innerHTML = n_prodotti[i] + " pz.";
			document.getElementById('id_n'.concat(i)).innerHTML = id_prodotto[i];
			document.getElementById('tot_p_n'.concat(i)).innerHTML = Number(getPrezzoTotaleProdotto(i)).toFixed(2) + " \u20AC";
		};		
	};	
};

function procedi () {
	//window.open("receipt.html",name="_blank");
	window.open("thanksgiving.html",name="_new");
}

readData();
setData();