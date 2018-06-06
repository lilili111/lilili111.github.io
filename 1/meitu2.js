function prepareGallery(){
	if(!document.getElementsByTagName)return false;
	if(!document.getElementsByTagName("a"))return false;
	var links=document.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return showPic(this)?false:true;
		}
	}
}
function showPic(whichpic){
	if(!document.getElementById)return false;
	if(!document.getElementById("tu"))return false;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("tu");
	if(placeholder.nodeName!="IMG")return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
		var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
		var description=document.getElementById("description");
		if(description.firstChild.nodeType==3){
			description.firstChild.nodeValue=text;
		}
	}
	return true;
}
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else {
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(prepareGallery());