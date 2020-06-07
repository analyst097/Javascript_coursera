var name = prompt('Whats your name');
document.write(name);

var date = Date();
document.write(date);

document.write(document.baseURI+"<br>");
var width = window.innerWidth;
document.write(width);

var num = 5;
var name = "aditya";
var bool = false;
var obj = {
    num : "5",
    name: "ADITYA",
    bool: false
};

document.write(obj.num == num);
document.write(obj.num === num);
document.write(obj.name == name);
document.write(obj.name === name);
document.write(obj.bool == bool);
document.write(obj.bool === bool);



