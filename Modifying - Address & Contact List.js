var address = document.getElementsByClassName('group-address--contact')[0].getElementsByClassName('content')[0].getElementsByClassName('field')
var content = document.getElementsByClassName('group-address--contact')[0].getElementsByClassName('content')[0]
document.getElementsByClassName('group-address--contact')[0].getElementsByClassName('description')[0].remove()
var heading = document.getElementsByClassName('group-address--contact')[0].getElementsByTagName('h2')[0].innerText
document.getElementsByClassName('group-address--contact')[0].getElementsByTagName('h2')[0].remove()
var heading4 = document.createElement('h4')
heading4.innerText = heading
document.getElementsByClassName('group-address--contact')[0].insertBefore(heading4,content)

var new_html = document.createElement('ul')
for (var i = 0; i < address.length; i++) {
	var list_item = document.createElement('li')
	var label_tag = address[i].getElementsByClassName('field-label-inline-first')[0]
	if ( typeof(label_tag) != "undefined" ) {
		var label = document.createElement('strong')
		label.innerText = label_tag.innerText
		list_item.appendChild(label)
		label_tag.remove()

		var item_content = document.createElement('span')
		item_content.innerHTML = address[i].getElementsByClassName('field-item')[0].innerHTML
		list_item.appendChild(item_content)
	} else {
		var list = new_html.getElementsByTagName('li')[new_html.getElementsByTagName('li').length - 1]
		var j_text = document.createElement('span')
		j_text.innerText = address[i].getElementsByClassName('field-item')[0].innerText
		list.appendChild(j_text)
	}
	if ( list_item.innerHTML.length >= 1 ) {
		new_html.appendChild(list_item)
	}
}
// console.log(new_html)
content.innerHTML = ""
content.appendChild(new_html)