{
  // Could largely (and more appropriately) be expressed in css
  // But this is all about vanilla JavaScript!
  const nav = document.querySelector('nav#main');
  const logo = document.querySelector('.logo');
  const ul = document.querySelector('ul');
  const navOffset = nav.offsetTop;

  function handleScroll() {
    if (window.scrollY >= navOffset) {
      nav.style.position = 'fixed';
      document.body.style.marginTop = `${nav.offsetHeight}px`;
      logo.style.maxWidth = 'none';
      logo.style.flex = '1';
    } else {
      nav.style.position = 'static';
      document.body.style.marginTop = '0';
      logo.style.maxWidth = '0';
      logo.style.flex = '0';
    }
  }

  ul.style.transition = 'all 200ms ease-out';
  nav.style.zIndex = 1;

  window.addEventListener('scroll', handleScroll);
}
