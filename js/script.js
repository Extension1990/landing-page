// Setting active link using Javascript
let lists = document.querySelectorAll('.nav-link');
function activeLink(li) {
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}
lists.forEach((item) =>
  item.addEventListener('click', function(){
    activeLink(this);
}));

