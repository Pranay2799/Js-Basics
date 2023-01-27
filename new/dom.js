var items = document.getElementsByClassName('list-group-item');
//items.style.fontWeight='bold'
items[2].style.backgroundColor='green'

for(var i=0; i<items.length;i++){
    items[i].style.fontWeight="bold"
    items[i].style.color="pink"
}