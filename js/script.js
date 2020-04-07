const Keyboard = {
  parent: document.querySelector('.main'),
  output: document.querySelector('textarea[name="textarea"]'),

  elements: {
    main: null,
    keysLayout: [ 
      {keyCode: 'Backquote', eng: '`', engShift: '~', ru: 'ё', ruShift: 'Ё'}, 
      {keyCode: 'Digit1', eng: '1', engShift: '!', ru: 'none', ruShift: '!'}, 
      {keyCode: 'Digit2', eng: '2', engShift: '@', ru: 'none', ruShift: '"'}, 
      {keyCode: 'Digit3', eng: '3', engShift: '#', ru: 'none', ruShift: '№'}, 
      {keyCode: 'Digit4', eng: '4', engShift: '$', ru: 'none', ruShift: ';'}, 
      {keyCode: 'Digit5', eng: '5', engShift: '%', ru: 'none', ruShift: '%'}, 
      {keyCode: 'Digit6', eng: '6', engShift: '^', ru: 'none', ruShift: ':'}, 
      {keyCode: 'Digit7', eng: '7', engShift: '&', ru: 'none', ruShift: '?'}, 
      {keyCode: 'Digit8', eng: '8', engShift: '*', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'Digit9', eng: '9', engShift: '(', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'Digit0', eng: '0', engShift: ')', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'Minus', eng: '-', engShift: '_', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'Equal', eng: '=', engShift: '+', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'Backspace', eng: 'Backspace', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {eng:'\n'},
      {keyCode: 'Tab', eng: 'Tab', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'KeyQ', eng: 'q', engShift: 'Q', ru: 'й', ruShift: 'Й'}, 
      {keyCode: 'KeyW', eng: 'w', engShift: 'W', ru: 'ц', ruShift: 'Ц'}, 
      {keyCode: 'KeyE', eng: 'e', engShift: 'E', ru: 'у', ruShift: 'У'}, 
      {keyCode: 'KeyR', eng: 'r', engShift: 'R', ru: 'к', ruShift: 'К'}, 
      {keyCode: 'KeyT', eng: 't', engShift: 'T', ru: 'е', ruShift: 'Е'}, 
      {keyCode: 'KeyY', eng: 'y', engShift: 'Y', ru: 'н', ruShift: 'Н'}, 
      {keyCode: 'KeyU', eng: 'u', engShift: 'U', ru: 'г', ruShift: 'Г'}, 
      {keyCode: 'KeyI', eng: 'i', engShift: 'I', ru: 'ш', ruShift: 'Ш'}, 
      {keyCode: 'KeyO', eng: 'o', engShift: 'O', ru: 'щ', ruShift: 'Щ'}, 
      {keyCode: 'KeyP', eng: 'p', engShift: 'P', ru: 'з', ruShift: 'З'}, 
      {keyCode: 'BracketLeft', eng: '{', engShift: '{', ru: 'х', ruShift: 'Х'}, 
      {keyCode: 'BracketRight', eng: ']', engShift: '}', ru: 'ъ', ruShift: 'Ъ'}, 
      {keyCode: 'Backslash', eng: '\\', engShift: '|', ru: 'none', ruShift: '/'}, 
      {keyCode: 'Delete', eng: 'Del', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {eng: '\n'},
      {keyCode: 'CapsLock', eng: 'CapsLock', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'KeyA', eng: 'a', engShift: 'A', ru: 'ф', ruShift: 'Ф'}, 
      {keyCode: 'KeyS', eng: 's', engShift: 'S', ru: 'ы', ruShift: 'Ы'}, 
      {keyCode: 'KeyD', eng: 'd', engShift: 'D', ru: 'в', ruShift: 'В'}, 
      {keyCode: 'KeyF', eng: 'f', engShift: 'F', ru: 'а', ruShift: 'А'}, 
      {keyCode: 'KeyG', eng: 'g', engShift: 'G', ru: 'п', ruShift: 'П'}, 
      {keyCode: 'KeyH', eng: 'h', engShift: 'H', ru: 'р', ruShift: 'Р'}, 
      {keyCode: 'KeyJ', eng: 'j', engShift: 'J', ru: 'о', ruShift: 'О'}, 
      {keyCode: 'KeyK', eng: 'k', engShift: 'K', ru: 'л', ruShift: 'Л'}, 
      {keyCode: 'KeyL', eng: 'l', engShift: 'L', ru: 'д', ruShift: 'Д'}, 
      {keyCode: 'Semicolon', eng: ';', engShift: ':', ru: 'ж', ruShift: 'Ж'}, 
      {keyCode: 'Quote', eng: '\'', engShift: '"', ru: 'э', ruShift: 'Э'}, 
      {keyCode: 'Enter', eng: 'Enter', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {eng: '\n'},
      {keyCode: 'ShiftLeft', eng: 'Shift', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'KeyZ', eng: 'z', engShift: 'Z', ru: 'я', ruShift: 'Я'}, 
      {keyCode: 'KeyX', eng: 'x', engShift: 'X', ru: 'ч', ruShift: 'Ч'}, 
      {keyCode: 'KeyC', eng: 'c', engShift: 'C', ru: 'с', ruShift: 'С'}, 
      {keyCode: 'KeyV', eng: 'v', engShift: 'V', ru: 'м', ruShift: 'М'}, 
      {keyCode: 'KeyB', eng: 'b', engShift: 'B', ru: 'и', ruShift: 'И'}, 
      {keyCode: 'KeyN', eng: 'n', engShift: 'N', ru: 'т', ruShift: 'Т'}, 
      {keyCode: 'KeyM', eng: 'm', engShift: 'M', ru: 'ь', ruShift: 'Ь'}, 
      {keyCode: 'Comma', eng: ',', engShift: '<', ru: 'б', ruShift: 'Б'}, 
      {keyCode: 'Period', eng: '.', engShift: '>', ru: 'ю', ruShift: 'Ю'}, 
      {keyCode: 'Slash', eng: '/', engShift: '?', ru: '.', ruShift: ','}, 
      {keyCode: 'ArrowUp', eng: '▲', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'ShiftRight', eng: 'Shift', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {eng: '\n'},
      {keyCode: 'ControlLeft', eng: 'Ctrl', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'MetaLeft', eng: 'Win', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'AltLeft', eng: 'Alt', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'Space', eng: 'Space', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'AltRight', eng: 'Alt', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'ArrowLeft', eng: '◄', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'ArrowDown', eng: '▼', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'ArrowRight', eng: '►', engShift: 'none', ru: 'none', ruShift: 'none'}, 
      {keyCode: 'ControlRight', eng: 'Ctrl', engShift: 'none', ru: 'none', ruShift: 'none'}
    ],
    keys: null,
  },
  
  properties: {
    capsLock: false,
    shift: false,
    language: 'ENG',
    languageSwitcher: false,
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
          key.setAttribute('data-ru', el.ru);
          key.setAttribute('data-ruShift', el.ruShift);
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
          key.setAttribute('data-ru', el.ru);
          key.setAttribute('data-ruShift', el.ruShift);
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
          key.setAttribute('data-ru', el.ru);
          key.setAttribute('data-ruShift', el.ruShift);
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
          key.setAttribute('data-ru', el.ru);
          key.setAttribute('data-ruShift', el.ruShift);
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
          key.setAttribute('data-ru', el.ru);
          key.setAttribute('data-ruShift', el.ruShift);
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
        if (el.getAttribute('data-code') === event.code && !el.classList.contains('keyboard__key_active') && event.code !== 'CapsLock') el.classList.add('keyboard__key_active');
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
          _this.elements.keys.forEach(function(el) {
            if (el.getAttribute('data-engshift') !== 'none') {
              el.textContent = _this.properties.capsLock ? el.getAttribute('data-engshift').toLowerCase() : el.getAttribute('data-engshift');
            }
          });
        } 
      }
      //language switch
      if(event.ctrlKey && event.code === 'AltLeft') {
        if (!_this.properties.languageSwitch) _this.properties.languageSwitch = true;
      }
    });
    document.addEventListener('keyup', function(event) {
      _this.elements.keys.forEach(function(el) {
        if (el.getAttribute('data-code') === event.code && event.code !== 'CapsLock') el.classList.remove('keyboard__key_active');
      });
      //shift handler
      // if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      //   _this.properties.shift = false;
      // }
      // _this.elements.keys.forEach(function(el) {
      //   if (el.getAttribute('data-engshift') !== 'none') {
      //     el.textContent = _this.properties.capsLock ? el.getAttribute('data-eng').toUpperCase() : el.getAttribute('data-eng');
      //   }

      // });
      //language switch
      if(event.altKey) {
        if (_this.properties.languageSwitch) {
          _this.properties.language = _this.properties.language === 'ENG' ? 'RU' : 'ENG';
          _this.properties.languageSwitch = false;
        }
        _this.setKeysValue();
      }
    });
  },

  setKeysValue() {
    let _this = this;
    let lang;
    let shift;
    if (_this.properties.language === 'ENG') {
      lang = 'data-eng';
      shift = 'data-engshift';
    } else {
      lang = 'data-ru';
      shift = 'data-rushift';
    } 
    _this.elements.keys.forEach(function(el) {
      if (el.getAttribute(lang) !== 'none') {
        el.textContent = el.getAttribute(lang);
      }
    });
  },

}

window.onload = function() { 
  Keyboard.init();
}