const Keyboard = {
  parent: document.querySelector('.main'),
  output: document.querySelector('textarea[name="textarea"]'),

  elements: {
    main: null,
    keysLayout: [ '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace', '\n',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', '\n',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', '\n',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', '\n',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'],
    keys: null,
  },
  
  properties: {
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
    this.elements.keysLayout.forEach(function(el) {
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
    this.elements.keys = document.querySelectorAll('.keyboard.main__keyboard > .keyboard__key');

    // buttons click handler
    this.elements.main.addEventListener('click', function(e) {
      if (e.target.classList.contains('keyboard__key')) {
        switch(e.target.textContent) {
          case 'Backspace':
            if (_this.output.selectionStart === _this.output.selectionEnd) {
              _this.output.value = _this.output.value.slice(0, _this.output.selectionStart - 1) + _this.output.value.slice(_this.output.selectionStart);
              
            } else {
              _this.output.value = _this.output.value.slice(0, _this.output.selectionStart) + _this.output.value.slice(_this.output.selectionEnd);
            } 
            break;
          case 'Tab':
            _this.output.value = _this.output.value.slice(0, _this.output.selectionStart) + '    ' + _this.output.value.slice(_this.output.selectionStart);
            break;
          case 'Del':
            if (_this.output.selectionStart === _this.output.selectionEnd) {
              _this.output.value = _this.output.value.slice(0, _this.output.selectionStart) + _this.output.value.slice(_this.output.selectionStart + 1);
              
            } else {
              _this.output.value = _this.output.value.slice(0, _this.output.selectionStart) + _this.output.value.slice(_this.output.selectionEnd);
            } 
            break;
          case 'CapsLock':
            e.target.classList.toggle('keyboard__key_active');
            _this.properties.capsLock = !_this.properties.capsLock;
            _this.elements.keys.forEach(function(el) {
            if (el.textContent.match(/^[a-zА-Я]$/i)) {
              el.textContent = _this.properties.capsLock ? el.textContent.toUpperCase() : el.textContent.toLowerCase();
            }
            });
            break;
          case 'Enter':
            _this.output.value = _this.output.value.slice(0, _this.output.selectionStart) + '\n' + _this.output.value.slice(_this.output.selectionStart);
            break;
          case 'Shift':
          case 'Ctrl':
          case 'Win':
          case 'Alt':
            break;
          case 'Space':
            _this.output.value = _this.output.value.slice(0, _this.output.selectionStart) + ' ' + _this.output.value.slice(_this.output.selectionStart);
            break;  
          default:
            _this.output.value += e.target.textContent;
            break;  
        }
        _this.output.focus();
        
      }
    })
  },

}

window.onload = function() { 
  Keyboard.init();
}