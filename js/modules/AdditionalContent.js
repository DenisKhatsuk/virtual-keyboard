export default class AdditionalContent {
  constructor() {
    this.parent = document.querySelector('.body');
  }

  init() {
    // add additional header content
    const header = document.createElement('header');
    const heading = document.createElement('h1');
    header.classList.add('header');
    heading.classList.add('header__title');
    heading.textContent = 'RS School Virtual Keyboard';
    header.appendChild(heading);
    this.parent.prepend(header);

    // add additional footer content
    const footer = document.createElement('footer');
    const script = document.querySelector('script');
    footer.classList.add('footer');
    footer.innerHTML = '<div class="description"><p class="description__text">Keyboard is created in OS Windows.<br><br>To switch language use left ctrl + alt.</p></div>';
    this.parent.insertBefore(footer, script);
  }
}
