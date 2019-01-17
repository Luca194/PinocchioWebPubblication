function visioneSemplice(){
var x= document.getElementsByClassName("Semplice");
	for(i=0;i<x.length;i++){
		
			document.getElementById('VisioneSemplice').disabled=true;
			x[i].style.display="none";
			document.getElementById('VisioneComplessa').disabled=false;
	}
}