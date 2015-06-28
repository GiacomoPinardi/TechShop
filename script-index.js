var prezzo_prodotto = [230, 39, 161, 154, 83, 211, 153, 34];
var n_prodotti = [0, 0, 0, 0, 0, 0, 0, 0];
var n_magazzino = [11, 73, 6, 15, 21, 9, 5, 13];
var nome_prodotto = ["Intel i5 4690K", "Kingston HyperX 4GB", "Asus Sabertooth 990FX R2.0", "Asus GTX 750 Ti", "Western Digital 1TB Black", "Samsung SSD 500GB", "CM Storm Stryker White", "Artic Freezer Xtreme R2"];
var id_prodotto = ["122-946", "245-355", "954-453", "654-451", "643-131", "986-453", "857-493", "344-547"];

function openCart () {
	var selected = 0;
	for (var i = 0; i < n_prodotti.length; i++) {
		selected += n_prodotti[i];
	}
	if (selected === 0) {
		alert("Per favore selezionare almeno un prodotto.");
	}
	else {
		saveCookies();
		window.open("cart.html", name="_self");
	}	
}

function saveCookies () {
	for (var i = 0; i < n_prodotti.length; i++) {
		document.cookie = "nome_prodotto".concat(i).concat("=").concat(nome_prodotto[i]);
		document.cookie = "prezzo_prodotto".concat(i).concat("=").concat(prezzo_prodotto[i]);
		document.cookie = "n_prodotti".concat(i).concat("=").concat(n_prodotti[i]);
		document.cookie = "id_prodotto".concat(i).concat("=").concat(id_prodotto[i]);
	};
}

function addProdotto (n) {
	if (n_prodotti[n] < n_magazzino[n]) {
		n_prodotti[n] += 1;
		setCarrelloProdotto();
	}
	else {
		alert("Ci scusiamo, ma non abbiamo abbastanza merce nel magazzino per soddisfare la sua richiesta.");
	}
};

function removeProdotto (n) {
	if (n_prodotti[n] > 0) {
		n_prodotti[n] -= 1;
		setCarrelloProdotto();
	}	
};

function setNomeProdotto () {
	for (var i = 0; i < nome_prodotto.length; i++) {
		document.getElementById('nome_p'.concat(i)).innerHTML = nome_prodotto[i];
	};	
};

function setPrezzoProdotto () {
	for (var i = 0; i < prezzo_prodotto.length; i++) {
		document.getElementById('prezzo_p'.concat(i)).innerHTML = Number(prezzo_prodotto[i]).toFixed(2) + " \u20AC";
	};	
};

function setCarrelloProdotto () {
	for (var i = 0; i < n_prodotti.length; i++) {
		document.getElementById('carrello_n_p'.concat(i)).innerHTML = n_prodotti[i] + " pz.";
	};	
};

function setMagazzinoProdotto () {
	for (var i = 0; i < n_magazzino.length; i++) {
		document.getElementById('magazzino_n_p'.concat(i)).innerHTML = n_magazzino[i] + " pz.";
	};	
};

function setIDProdotto () {
	for (var i = 0; i < id_prodotto.length; i++) {
		document.getElementById('id_n'.concat(i)).innerHTML = id_prodotto[i];
	};	
};

setNomeProdotto();
setPrezzoProdotto();
setCarrelloProdotto();
setMagazzinoProdotto();
setIDProdotto();