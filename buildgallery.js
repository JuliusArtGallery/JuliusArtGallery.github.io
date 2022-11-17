//Table for Animal art collection
document.write("<table><caption>Animal Art Collection</caption><tr><th>Art Title</th><th>Picture of Art</th></tr>")
for (let i=0; i < artGal.length; i++) {
	if(artGal[i].art.collection == 'Animals'){
		document.write("<tr><td><p>" + artGal[i].art.title + "</p></td><td><img src=\"images" + artGal[i].art.filename + "\" alt=\"" + artGal[i].art.altTxt + "\"></img></td></tr>");
	}
};
document.write("</table>")

//Table for Anime art collection
document.write("<table><caption>Anime Art Collection</caption><tr><th>Art Title</th><th>Picture of Art</th></tr>")
for (let i=0; i < artGal.length; i++) {
	if(artGal[i].art.collection == 'Anime'){
		document.write("<tr><td><p>" + artGal[i].art.title + "</p></td><td><img src=\"images" + artGal[i].art.filename + "\" alt=\"" + artGal[i].art.altTxt + "\"></img></td></tr>");
	}
};
document.write("</table>")

//Table for Cartoon art collection 
document.write("<table><caption>Cartoon Art Collection</caption><tr><th>Art Title</th><th>Picture of Art</th></tr>")
for (let i=0; i < artGal.length; i++) {
	if(artGal[i].art.collection == 'Cartoon'){
		document.write("<tr><td><p>" + artGal[i].art.title + "</p></td><td><img src=\"images" + artGal[i].art.filename + "\" alt=\"" + artGal[i].art.altTxt + "\"></img></td></tr>");
	}
};
document.write("</table>")

//Table for Julius art collection
document.write("<table><caption>Julius Art Collection</caption><tr><th>Art Title</th><th>Picture of Art</th></tr>")
for (let i=0; i < artGal.length; i++) {
	if(artGal[i].art.collection == 'Julius'){
		document.write("<tr><td><p>" + artGal[i].art.title + "</p></td><td><img src=\"images" + artGal[i].art.filename + "\" alt=\"" + artGal[i].art.altTxt + "\"></img></td></tr>");
	}
};
document.write("</table>")

//Table for People art collection 
document.write("<table><caption>People Art Collection</caption><tr><th>Art Title</th><th>Picture of Art</th></tr>")
for (let i=0; i < artGal.length; i++) {
	if(artGal[i].art.collection == 'People'){
		document.write("<tr><td><p>" + artGal[i].art.title + "</p></td><td><img src=\"images" + artGal[i].art.filename + "\" alt=\"" + artGal[i].art.altTxt + "\"></img></td></tr>");
	}
};
document.write("</table>")

//Table for Scary art collection 
document.write("<table><caption>Scary Art Collection</caption><tr><th>Art Title</th><th>Picture of Art</th></tr>")
for (let i=0; i < artGal.length; i++) {
	if(artGal[i].art.collection == 'Scary'){
		document.write("<tr><td><p>" + artGal[i].art.title + "</p></td><td><img src=\"images" + artGal[i].art.filename + "\" alt=\"" + artGal[i].art.altTxt + "\"></img></td></tr>");
	}
};
document.write("</table>")

//Table for Scenery art collection 
document.write("<table><caption>Scenery Art Collection</caption><tr><th>Art Title</th><th>Picture of Art</th></tr>")
for (let i=0; i < artGal.length; i++) {
	if(artGal[i].art.collection == 'Scenary'){
		document.write("<tr><td><p>" + artGal[i].art.title + "</p></td><td><img src=\"images" + artGal[i].art.filename + "\" alt=\"" + artGal[i].art.altTxt + "\"></img></td></tr>");
	}
};
document.write("</table>")

//Table for Spongebob art collection 
document.write("<table><caption>Spongebob Art Collection</caption><tr><th>Art Title</th><th>Picture of Art</th></tr>")
for (let i=0; i < artGal.length; i++) {
	if(artGal[i].art.collection == 'Spongebob'){
		document.write("<tr><td><p>" + artGal[i].art.title + "</p></td><td><img src=\"images" + artGal[i].art.filename + "\" alt=\"" + artGal[i].art.altTxt + "\"></img></td></tr>");
	}
};
document.write("</table>")

//Table for Video Game art collection 
document.write("<table><caption>Video Game Art Collection</caption><tr><th>Art Title</th><th>Picture of Art</th></tr>")
for (let i=0; i < artGal.length; i++) {
	if(artGal[i].art.collection == 'Video Game'){
		document.write("<tr><td><p>" + artGal[i].art.title + "</p></td><td><img src=\"images" + artGal[i].art.filename + "\" alt=\"" + artGal[i].art.altTxt + "\"></img></td></tr>");
	}
};
document.write("</table>")

//Table for Misc art collection
document.write("<table><caption>Miscellaneous Art Collection</caption><tr><th>Art Title</th><th>Picture of Art</th></tr>")
for (let i=0; i < artGal.length; i++) {
	if(artGal[i].art.collection == 'Misc.'){
		document.write("<tr><td><p>" + artGal[i].art.title + "</p></td><td><img src=\"images" + artGal[i].art.filename + "\" alt=\"" + artGal[i].art.altTxt + "\"></img></td></tr>");
	}
};
document.write("</table>")