for(var i=0;i<4;i++)
{
	document.getElementsByTagName("a")[i].onclick=function(){
		var source=this.getAttribute("href");
		document.getElementById("tu").setAttribute("src",source);
		var description=document.getElementById("description");
		description.firstChild.nodeValue=this.getAttribute("title");
		return false;
	}
}