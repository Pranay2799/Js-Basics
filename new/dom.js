var itemlist=document.querySelector('#items');
itemlist.parentNode.style.backgroundColor='#f4f4f4'
itemlist.children[1].style.backgroundColor='yellow'
itemlist.firstElementChild.textContent='hello 1'
itemlist.lastElementChild.textContent='hello 4'
itemlist.parentElementSibling.style.color='green';
var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('HEllo');
newDiv.appendChild(newDivText);
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);