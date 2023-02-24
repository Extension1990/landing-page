// Setting active link using Javascript
function active() {
  const navLinkEls = document.querySelectorAll('.nav-link');
  const sectionId = document.location.hash;
  
  console.log(sectionId);
  navLinkEls.forEach(navLinkEl => {
    if(navLinkEl.href.includes(sectionId)) {
      navLinkEl.classList.add('active');
    }
  });
}

