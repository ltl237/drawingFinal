var lebron1 = document.querySelector('#lebron-1');
var lebron2 = document.querySelector('#lebron-2');
var steph = document.querySelector('#steph');
var russel = document.querySelector('#russel');

var curryImage = document.querySelector('#embed-curry');

var russelImage = document.querySelector('#embed-russel');

var lebronImage = document.querySelector('#embed-lebron');

curryImage.addEventListener('mouseover', function(){
	this.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.style = 'animation:visible 1s forwards';;
});

curryImage.addEventListener('mouseout', function(){
	this.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.style = 'animation:notvisible 1s forwards';
});

russelImage.addEventListener('mouseover', function(){
	this.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.style = 'animation:visible 1s forwards';;
});

russelImage.addEventListener('mouseout', function(){
	this.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.style = 'animation:notvisible 1s forwards';
});

lebronImage.addEventListener('mouseover', function(){
	this.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.style = 'animation:visible 1s forwards';;
});

lebronImage.addEventListener('mouseout', function(){
	this.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.style = 'animation:notvisible 1s forwards';
});


lebron1.addEventListener('mouseover', function(){

	this.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.style = 'animation:visible 1s forwards';
});

lebron1.addEventListener('mouseout', function(){
	this.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.style = 'animation:notvisible 1s forwards';
});

lebron2.addEventListener('mouseover', function(){
	this.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.style = 'animation:visible 1s forwards';
});

lebron2.addEventListener('mouseout', function(){
	this.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.style = 'animation:notvisible 1s forwards';
});

steph.addEventListener('mouseover', function(){
	this.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.style = 'animation:visible 1s forwards';;
});

steph.addEventListener('mouseout', function(){
	this.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.style = 'animation:notvisible 1s forwards';
});

russel.addEventListener('mouseover', function(){
	this.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.style = 'animation:visible 1s forwards';;
});

russel.addEventListener('mouseout', function(){
	this.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.style = 'animation:notvisible 1s forwards';
});