const Keyboard = {
  parent: document.querySelector('.main'),
  output: document.querySelector('textarea[name="textarea"]'),

  elements: {
    main: null,
    keysLayout: [ 
      {keyCode: 'Backquote', eng: '`', engShift: '~', ru: 'ё'}, 
      {keyCode: 'Digit1', eng: '1', engShift: '!'}, 
      {keyCode: 'Digit2', eng: '2', engShift: '@'}, 
      {keyCode: 'Digit3', eng: '3', engShift: '#'}, 
      {keyCode: 'Digit4', eng: '4', engShift: '$'}, 
      {keyCode: 'Digit5', eng: '5', engShift: '%'}, 
      {keyCode: 'Digit6', eng: '6', engShift: '^'}, 
      {keyCode: 'Digit7', eng: '7', engShift: '&'}, 
      {keyCode: 'Digit8', eng: '8', engShift: '*'}, 
      {keyCode: 'Digit9', eng: '9', engShift: '('}, 
      {keyCode: 'Digit0', eng: '0', engShift: ')'}, 
      {keyCode: 'Minus', eng: '-', engShift: '_'}, 
      {keyCode: 'Equal', eng: '=', engShift: '+'}, 
      {keyCode: 'Backspace', eng: 'Backspace', engShift: 'Backspace'}, 
      {eng:'\n'},
      {keyCode: 'Tab', eng: 'Tab', engShift: 'Tab'}, 
      {keyCode: 'KeyQ', eng: 'q', engShift: 'q'}, 
      {keyCode: 'KeyW', eng: 'w', engShift: 'w'}, 
      {keyCode: 'KeyE', eng: 'e', engShift: 'e'}, 
      {keyCode: 'KeyR', eng: 'r', engShift: 'r'}, 
      {keyCode: 'KeyT', eng: 't', engShift: 't'}, 
      {keyCode: 'KeyY', eng: 'y', engShift: 'y'}, 
      {keyCode: 'KeyU', eng: 'u', engShift: 'u'}, 
      {keyCode: 'KeyI', eng: 'i', engShift: 'i'}, 
      {keyCode: 'KeyO', eng: 'o', engShift: 'o'}, 
      {keyCode: 'KeyP', eng: 'p', engShift: 'p'}, 
      {keyCode: 'BracketLeft', eng: '{', engShift: '{'}, 
      {keyCode: 'BracketRight', eng: ']', engShift: '}'}, 
      {keyCode: 'Backslash', eng: '\\', engShift: '|'}, 
      {keyCode: 'Delete', eng: 'Del', engShift: 'Del'}, 
      {eng: '\n'},
      {keyCode: 'CapsLock', eng: 'CapsLock'}, 
      {keyCode: 'KeyA', eng: 'a', engShift: 'a'}, 
      {keyCode: 'KeyS', eng: 's', engShift: 's'}, 
      {keyCode: 'KeyD', eng: 'd', engShift: 'd'}, 
      {keyCode: 'KeyF', eng: 'f', engShift: 'f'}, 
      {keyCode: 'KeyG', eng: 'g', engShift: 'g'}, 
      {keyCode: 'KeyH', eng: 'h', engShift: 'h'}, 
      {keyCode: 'KeyJ', eng: 'j', engShift: 'j'}, 
      {keyCode: 'KeyK', eng: 'k', engShift: 'k'}, 
      {keyCode: 'KeyL', eng: 'l', engShift: 'l'}, 
      {keyCode: 'Semicolon', eng: ';', engShift: ':'}, 
      {keyCode: 'Quote', eng: '\'', engShift: '"'}, 
      {keyCode: 'Enter', eng: 'Enter', engShift: 'Enter'}, 
      {eng: '\n'},
      {keyCode: 'ShiftLeft', eng: 'Shift', engShift: 'Shift'}, 
      {keyCode: 'KeyZ', eng: 'z', engShift: 'z'}, 
      {keyCode: 'KeyX', eng: 'x', engShift: 'x'}, 
      {keyCode: 'KeyC', eng: 'c', engShift: 'c'}, 
      {keyCode: 'KeyV', eng: 'v', engShift: 'v'}, 
      {keyCode: 'KeyB', eng: 'b', engShift: 'b'}, 
      {keyCode: 'KeyN', eng: 'n', engShift: 'n'}, 
      {keyCode: 'KeyM', eng: 'm', engShift: 'm'}, 
      {keyCode: 'Comma', eng: ',', engShift: '<'}, 
      {keyCode: 'Period', eng: '.', engShift: '>'}, 
      {keyCode: 'Slash', eng: '/', engShift: '?'}, 
      {keyCode: 'ArrowUp', eng: '▲', engShift: '▲'}, 
      {keyCode: 'ShiftRight', eng: 'Shift', engShift: 'Shift'}, 
      {eng: '\n'},
      {keyCode: 'ControlLeft', eng: 'Ctrl', engShift: 'Ctrl'}, 
      {keyCode: 'MetaLeft', eng: 'Win', engShift: 'Win'}, 
      {keyCode: 'AltLeft', eng: 'Alt', engShift: 'Alt'}, 
      {keyCode: 'Space', eng: 'Space', engShift: 'Space'}, 
      {keyCode: 'AltRight', eng: 'Alt', engShift: 'Alt'}, 
      {keyCode: 'ArrowLeft', eng: '◄', engShift: '◄'}, 
      {keyCode: 'ArrowDown', eng: '▼', engShift: '▼'}, 
      {keyCode: 'ArrowRight', eng: '►', engShift: '►'}, 
      {keyCode: 'ControlRight', eng: 'Ctrl', engShift: 'Ctrl'}
    ],
    keys: null,
  },
  
  properties: {
    capsLock: false,
    shift: false,
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
      switch(el.eng) {
        case '\n':
          key = document.createElement('br');
          fragment.appendChild(key);
          break;
        case 'Backspace':
          key = document.createElement('button');
          keyContent = document.createTextNode(el.eng);
          key.classList.add('keyboard__key', 'keyboard__key_size-3');
          key.setAttribute('data-code', el.keyCode);
          key.setAttribute('data-eng', el.eng);
          key.setAttribute('data-engShift', el.engShift);
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
        case 'CapsLock':
        case 'Shift':
        case 'Enter':  
          key = document.createElement('button');
          keyContent = document.createTextNode(el.eng);
          key.classList.add('keyboard__key', 'keyboard__key_size-4');
          key.setAttribute('data-code', el.keyCode);
          key.setAttribute('data-eng', el.eng);
          key.setAttribute('data-engShift', el.engShift);
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
        case 'Space':  
          key = document.createElement('button');
          keyContent = document.createTextNode(el.eng);
          key.classList.add('keyboard__key', 'keyboard__key_size-5');
          key.setAttribute('data-code', el.keyCode);
          key.setAttribute('data-eng', el.eng);
          key.setAttribute('data-engShift', el.engShift);
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
        case 'Tab':
          key = document.createElement('button');
          keyContent = document.createTextNode(el.eng);
          key.classList.add('keyboard__key', 'keyboard__key_size-2');
          key.setAttribute('data-code', el.keyCode);
          key.setAttribute('data-eng', el.eng);
          key.setAttribute('data-engShift', el.engShift);
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
        default:
          key = document.createElement('button');
          keyContent = document.createTextNode(el.eng);
          key.classList.add('keyboard__key');
          key.setAttribute('data-code', el.keyCode);
          key.setAttribute('data-eng', el.eng);
          key.setAttribute('data-engShift', el.engShift);
          key.appendChild(keyContent);
          fragment.appendChild(key);
          break;
      }
    });
    this.elements.main.appendChild(fragment);
    this.elements.keys = document.querySelectorAll('.keyboard.main__keyboard > .keyboard__key');

    // buttons click handler
    this.elements.main.addEventListener('click', function(e) {
      let selectionEnd = _this.output.selectionEnd;
      if (e.target.classList.contains('keyboard__key')) {
        switch(e.target.getAttribute('data-eng')) {
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
    let capsLockButton = document.querySelector('[data-code="CapsLock"]'); 
    document.addEventListener('keydown', function(event) {
      //highlight pressed button
      _this.elements.keys.forEach(function(el) {
        if (el.classList.contains(event.code) && !el.classList.contains('keyboard__key_active') && event.code !== 'CapsLock') el.classList.add('keyboard__key_active');
      });
      //CapsLock handler
      if (event.code === 'CapsLock') {
        capsLockButton.classList.toggle('keyboard__key_active');
        _this.properties.capsLock = !_this.properties.capsLock;
        _this.elements.keys.forEach(function(el) {
          if (el.textContent.match(/^[a-zА-Я]$/i)) {
            el.textContent = _this.properties.capsLock ? el.textContent.toUpperCase() : el.textContent.toLowerCase();
          }
        });
      }
      //shift handler
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        if (!_this.properties.shift) {
          _this.properties.shift = true;
          console.log('Shift active');
          _this.elements.keys.forEach(function(el) {
            if (el.textContent.match(/^[a-zА-Я]$/i)) {
              el.textContent = _this.properties.capsLock ? el.textContent.toLowerCase() : el.textContent.toUpperCase();
            }
          });
        } 
      }
    });
    document.addEventListener('keyup', function(event) {
      _this.elements.keys.forEach(function(el) {
        if (el.classList.contains(event.code) && event.code !== 'CapsLock') el.classList.remove('keyboard__key_active');
      });
      //shift handler
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        _this.properties.shift = false;
      }
      _this.elements.keys.forEach(function(el) {
        if (el.textContent.match(/^[a-zА-Я]$/i)) {
          el.textContent = _this.properties.capsLock ? el.textContent.toUpperCase() : el.textContent.toLowerCase();
        }

      });
    });
  }

}

window.onload = function() { 
  Keyboard.init();
}