export default class TextArea {
  constructor() {
    this.parent = document.querySelector('.body');
  }

  init() {
    // create textarea element
    const main = document.createElement('div');
    const textArea = document.createElement('div');
    main.classList.add('main');
    textArea.classList.add('textarea-wrapper', 'main__textarea');
    textArea.innerHTML = '<textarea name="textarea" id="textarea" class="textarea" cols="100" rows="10"></textarea>';
    main.appendChild(textArea);
    this.parent.prepend(main);
  }
}
