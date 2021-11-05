function Scroll(e) {
  e.preventDefault();
  const ident = e.target.id;
  let ob;
  switch (ident) {
    case 'about':
      ob = document.getElementById('about__scroll');
      ob.scrollIntoView(top);
      break;
    case 'work':
      ob = document.getElementById('work__scroll');
      ob.scrollIntoView(top);
      break;
    case 'shop':
      ob = document.getElementById('shop__scroll');
      ob.scrollIntoView(top);
      break;
    case 'contact':
      ob = document.getElementById('contact__scroll');
      ob.scrollIntoView(top);
      break;    
    default:
      break;
  }
}

document.querySelector('#nav').addEventListener('click' , Scroll);

document.querySelector('#h__bur').addEventListener('click' , Scroll);






const burger__btn = document.getElementById('h-ico');
function Burger() {
  burger__btn.classList.toggle('header__icon-active');

  document.getElementById('n__mob').classList.toggle('nav__mob-active');

  document.getElementById('h__inner').classList.toggle('header-active')

  document

}
burger__btn.addEventListener('click' , Burger);
















