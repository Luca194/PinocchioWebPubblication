$(document).ready(function(){
    
	let rName = localStorage.getItem("readerName");
	$("#intestazione").append(rName);
	/* clear all items
	localStorage.clear();*/
});