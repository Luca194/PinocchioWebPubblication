function visioneComplessa(){
var x= document.getElementsByClassName("Semplice");
	for(i=0;i<x.length;i++){
			document.getElementById('VisioneComplessa').disabled=true;
			x[i].style.display="table-cell";
			document.getElementById('VisioneSemplice').disabled=false;
	}
}