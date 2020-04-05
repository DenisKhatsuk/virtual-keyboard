const Keyboard = {
  parent: document.querySelector('.main'),
  output: document.querySelector('textarea[name="textarea"]'),

  elements: {
    main: null,
    keysLayout: [ ['`', 'Backquote', 'ё'], ['1', 'Digit1'], ['2', 'Digit2'], ['3', 'Digit3'], ['4', 'Digit4'], ['5', 'Digit5'], ['6', 'Digit6'], ['7', 'Digit7'], ['8', 'Digit8'], ['9', 'Digit9'], ['0', 'Digit0'], ['-', 'Minus'], ['=', 'Equal'], ['Backspace', 'Backspace'], ['\n'],
    ['Tab', 'Tab'], ['q', 'KeyQ'], ['w', 'KeyW'], ['e', 'KeyE'], ['r', 'KeyR'], ['t', 'KeyT'], ['y', 'KeyY'], ['u', 'KeyU'], ['i', 'KeyI'], ['o', 'KeyO'], ['p', 'KeyP'], ['[', 'BracketLeft'], [']', 'BracketRight'], ['\\', 'Backslash'], ['Del', 'Delete'], ['\n'],
    ['CapsLock', 'CapsLock'], ['a', 'KeyA'], ['s', 'KeyS'], ['d', 'KeyD'], ['f', 'KeyF'], ['g', 'KeyG'], ['h', 'KeyH'], ['j', 'KeyJ'], ['k', 'KeyK'], ['l', 'KeyL'], [';', 'Semicolon'], ['\'', 'Quote'], ['Enter', 'Enter'], ['\n'],
    ['Shift', 'ShiftLeft'], ['z', 'KeyZ'], ['x', 'KeyX'], ['c', 'KeyC'], ['v', 'KeyV'], ['b', 'KeyB'], ['n', 'KeyN'], ['m', 'KeyM'], [',', 'Comma'], ['.', 'Period'], ['/', 'Slash'], ['▲', 'ArrowUp'], ['Shift', 'ShiftRight'], ['\n'],
    ['Ctrl', 'ControlLeft'], ['Win', 'MetaLeft'], ['Alt', 'AltLeft'], ['Space', 'Space'], ['Alt', 'AltRight'], ['◄', 'ArrowLeft'], ['▼', 'ArrowDown'], ['►', 'ArrowRight'], ['Ctrl', 'ControlRight']],
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
      switch(el[0]) {
        case '\n':
          key = document.createElement('br');
          fragment.appendChild(key);
          break;
        case 'Backspace':
          key = document.createElement('button');
          keyContent = document.createTextNode(el[0]);
          key.classList.add('keyboard__key', 'keyboard__key_size-3', el[1]);
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
        case 'CapsLock':
        case 'Shift':
        case 'Enter':  
          key = document.createElement('button');
          keyContent = document.createTextNode(el[0]);
          key.classList.add('keyboard__key', 'keyboard__key_size-4', el[1]);
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
        case 'Space':  
          key = document.createElement('button');
          keyContent = document.createTextNode(el[0]);
          key.classList.add('keyboard__key', 'keyboard__key_size-5', el[1]);
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
        case 'Tab':
          key = document.createElement('button');
          keyContent = document.createTextNode(el[0]);
          key.classList.add('keyboard__key', 'keyboard__key_size-2', el[1]);
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
        default:
          key = document.createElement('button');
          keyContent = document.createTextNode(el[0]);
          key.classList.add('keyboard__key', el[1]);
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
            _this.output.value = _this.output.value.slice(0, _this.output.selectionStart) + e.target.textContent + _this.output.value.slice(_this.output.selectionStart);
            break;  
        }
        _this.output.focus();
        
      }
    })

    // button press handler
    this.keyPressHandler();

  },

  keyPressHandler() {
    let _this = this;
    let capsLockButton = document.querySelector('.CapsLock'); 
    document.addEventListener('keydown', function(event) {
      _this.elements.keys.forEach(function(el) {
        if (el.classList.contains(event.code) && !el.classList.contains('keyboard__key_active') && event.code !== 'CapsLock') el.classList.add('keyboard__key_active');
      });
      if (event.code === 'CapsLock') {
        capsLockButton.classList.toggle('keyboard__key_active');
        _this.properties.capsLock = !_this.properties.capsLock;
        _this.elements.keys.forEach(function(el) {
          if (el.textContent.match(/^[a-zА-Я]$/i)) {
            el.textContent = _this.properties.capsLock ? el.textContent.toUpperCase() : el.textContent.toLowerCase();
          }
        });
      }
    });
    document.addEventListener('keyup', function(event) {
      _this.elements.keys.forEach(function(el) {
        if (el.classList.contains(event.code) && event.code !== 'CapsLock') el.classList.remove('keyboard__key_active');
      });
    });
  }

}

window.onload = function() { 
  Keyboard.init();
}