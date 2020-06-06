var doc = document;

doc.write("<p>Paragraph</p>");
doc.getElementById("test").innerHTML = "Aditya";

btnon = doc.getElementById('on');
btnoff = doc.getElementById('off');

btnon.onclick = function(){
    doc.getElementById('myimg').src = 'pic_bulbon.gif';
}

btnoff.onclick = function(){
    doc.getElementById('myimg').src = 'pic_bulboff.gif';
}

doc.getElementById('test').style.fontFamily = "Arial";




