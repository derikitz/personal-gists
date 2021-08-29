var div = document.getElementsByClassName('contetnText')[0].getElementsByTagName('div')
var selected = "";
var tags = "";
var links = "";
var imgs = "";
for(var i = 0; i < div.length; i++) {
	if ( div[i].className == "" ) {
		selected = div[i];
		links = selected.getElementsByTagName('a');
	}

	if ( div[i].className == "sztaxonomy" ) {
		tags = div[i].getElementsByTagName('a');
	}
}

// Lets check if there are links
console.log("Number of Links:" + links.length)

// Get Tags
var to_paste = ""
for(var i = 0; i < tags.length; i++) {
	to_paste += tags[i].innerText + ","
}
console.log("Tags:" + to_paste)

// Get Images
var imgs = selected.getElementsByTagName('img')
var pre = (Math.random() + 1).toString(36).substring(7);
for(var i = 0; i < imgs.length; i++) {
	var element = document.createElement('a');
	element.setAttribute('href', imgs[i].src);
	var path = imgs[i].src.split('/');
	element.setAttribute('download', pre + 'img-'+i+"-"+path[path.length-1]);
	element.setAttribute('target', '_blank');
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

