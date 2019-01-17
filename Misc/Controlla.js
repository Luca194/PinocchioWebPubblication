function controlla(){
        var myFieldVal = document.getElementById("InserisciNome").value;
		console.log(myFieldVal);
        document.getElementById("nomeLettore").innerHTML="Ehi: "+myFieldVal + " pronto a leggere questa fantastica storia?";
		localStorage.setItem("readerName", myFieldVal);
}