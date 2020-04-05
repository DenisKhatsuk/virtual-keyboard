const Keyboard = {
  parent: document.querySelector('.main'),
  output: document.querySelector('textarea[name="textarea"]'),

  elements: {
    main: null,
    keys: [ '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace', '\n',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', '\n',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', '\n',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', '\n',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'],
  },
  
  properties: {
    value: '',
    capsLock: false,
    language: 'RU',
  },

  init() {
    let _this = this;

    // create keyboard element
    this.elements.main = document.createElement('div');
    this.elements.main.classList.add('keyboard', 'main__keyboard');
    this.parent.appendChild(this.elements.main);

    // add keys to keyboard
    let fragment = new DocumentFragment();
    this.elements.keys.forEach(function(el) {
      let key;
      let keyContent;
      switch(el) {
        case '\n':
          key = document.createElement('br');
          fragment.appendChild(key);
          break;
        case 'Backspace':
          key = document.createElement('button');
          keyContent = document.createTextNode(el);
          key.classList.add('keyboard__key', 'keyboard__key_size-3');
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
        case 'CapsLock':
        case 'Shift':
        case 'Enter':  
          key = document.createElement('button');
          keyContent = document.createTextNode(el);
          key.classList.add('keyboard__key', 'keyboard__key_size-4');
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
        case 'Space':  
          key = document.createElement('button');
          keyContent = document.createTextNode(el);
          key.classList.add('keyboard__key', 'keyboard__key_size-5');
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
        case 'Tab':
          key = document.createElement('button');
          keyContent = document.createTextNode(el);
          key.classList.add('keyboard__key', 'keyboard__key_size-2');
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
        default:
          key = document.createElement('button');
          keyContent = document.createTextNode(el);
          key.classList.add('keyboard__key');
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
      }
    });
    this.elements.main.appendChild(fragment);

    // track buttons click
    this.elements.main.addEventListener('click', function(e) {
      if (e.target.classList.contains('keyboard__key')) {
        _this.properties.value += e.target.textContent;
        _this.output.value = _this.properties.value;
      }
    })
  },

}

window.onload = function() { 
  Keyboard.init();
}