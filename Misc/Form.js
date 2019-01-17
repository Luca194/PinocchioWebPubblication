let arrRisp = {"risp1":"", "risp2":"", "risp3":"", "risp4":""};

let x=0;


function Verifica(idDom, valore){
	if(valore == "giusta"){
		document.getElementById("audioGiusto").play();
			x++;
			 document.getElementById("risultato").innerHTML="Complimenti! il tuo punteggio è:" + x;
				alert("Complimenti! il tuo punteggio è:" + x);
	} else {
		document.getElementById("audioSbagliato").play();
			x--;
				document.getElementById("risultato").innerHTML="Sbagliato! il tuo punteggio è:" + x;
					alert("Sbagliato! il tuo punteggio è:" + x);
	}
	arrRisp[idDom] = valore;
}
