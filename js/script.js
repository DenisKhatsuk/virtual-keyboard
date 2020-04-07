const Keyboard = {
  parent: document.querySelector('.main'),
  output: document.querySelector('textarea[name="textarea"]'),

  elements: {
    main: null,
    keysLayout: [ 
      {keyCode: 'Backquote', eng: '`', engShift: '~', ru: 'ё', ruShift: 'Ё'}, 
      {keyCode: 'Digit1', eng: '1', engShift: '!', ru: '1', ruShift: '!'}, 
      {keyCode: 'Digit2', eng: '2', engShift: '@', ru: '2', ruShift: '"'}, 
      {keyCode: 'Digit3', eng: '3', engShift: '#', ru: '3', ruShift: '№'}, 
      {keyCode: 'Digit4', eng: '4', engShift: '$', ru: '4', ruShift: ';'}, 
      {keyCode: 'Digit5', eng: '5', engShift: '%', ru: '5', ruShift: '%'}, 
      {keyCode: 'Digit6', eng: '6', engShift: '^', ru: '6', ruShift: ':'}, 
      {keyCode: 'Digit7', eng: '7', engShift: '&', ru: '7', ruShift: '?'}, 
      {keyCode: 'Digit8', eng: '8', engShift: '*', ru: '8', ruShift: '*'}, 
      {keyCode: 'Digit9', eng: '9', engShift: '(', ru: '9', ruShift: '('}, 
      {keyCode: 'Digit0', eng: '0', engShift: ')', ru: '0', ruShift: ')'}, 
      {keyCode: 'Minus', eng: '-', engShift: '_', ru: '-', ruShift: '_'}, 
      {keyCode: 'Equal', eng: '=', engShift: '+', ru: '=', ruShift: '+'}, 
      {keyCode: 'Backspace', eng: 'Backspace', engShift: 'none', ru: 'Backspace', ruShift: 'none'}, 
      {eng:'\n'},
      {keyCode: 'Tab', eng: 'Tab', engShift: 'none', ru: 'Tab', ruShift: 'none'}, 
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
      {keyCode: 'Backslash', eng: '\\', engShift: '|', ru: '\\', ruShift: '/'}, 
      {keyCode: 'Delete', eng: 'Del', engShift: 'none', ru: 'Del', ruShift: 'none'}, 
      {eng: '\n'},
      {keyCode: 'CapsLock', eng: 'CapsLock', engShift: 'none', ru: 'CapsLock', ruShift: 'none'}, 
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
      {keyCode: 'Enter', eng: 'Enter', engShift: 'none', ru: 'Enter', ruShift: 'none'}, 
      {eng: '\n'},
      {keyCode: 'ShiftLeft', eng: 'Shift', engShift: 'none', ru: 'Shift', ruShift: 'none'}, 
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
      {keyCode: 'ArrowUp', eng: '▲', engShift: 'none', ru: '▲', ruShift: 'none'}, 
      {keyCode: 'ShiftRight', eng: 'Shift', engShift: 'none', ru: 'Shift', ruShift: 'none'}, 
      {eng: '\n'},
      {keyCode: 'ControlLeft', eng: 'Ctrl', engShift: 'none', ru: 'Ctrl', ruShift: 'none'}, 
      {keyCode: 'MetaLeft', eng: 'Win', engShift: 'none', ru: 'Win', ruShift: 'none'}, 
      {keyCode: 'AltLeft', eng: 'Alt', engShift: 'none', ru: 'Alt', ruShift: 'none'}, 
      {keyCode: 'Space', eng: 'Space', engShift: 'none', ru: 'Space', ruShift: 'none'}, 
      {keyCode: 'AltRight', eng: 'Alt', engShift: 'none', ru: 'Alt', ruShift: 'none'}, 
      {keyCode: 'ArrowLeft', eng: '◄', engShift: 'none', ru: '◄', ruShift: 'none'}, 
      {keyCode: 'ArrowDown', eng: '▼', engShift: 'none', ru: '▼', ruShift: 'none'}, 
      {keyCode: 'ArrowRight', eng: '►', engShift: 'none', ru: '►', ruShift: 'none'}, 
      {keyCode: 'ControlRight', eng: 'Ctrl', engShift: 'none', ru: 'Ctrl', ruShift: 'none'}
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
      switch(el.eng) {
        case '\n':
          let key = document.createElement('br');
          fragment.appendChild(key);
          break;
        case 'Backspace':
          _this.createKey(el, fragment, 'keyboard__key_size-3');
          break;
        case 'CapsLock':
        case 'Shift':
        case 'Enter':  
          _this.createKey(el, fragment, 'keyboard__key_size-4');
          break;
        case 'Space':
          _this.createKey(el, fragment, 'keyboard__key_size-5');  
          break;
        case 'Tab':
          _this.createKey(el, fragment, 'keyboard__key_size-2');
          break;
        default:
          _this.createKey(el, fragment);
          break;
      }
    });
    this.elements.main.appendChild(fragment);
    this.elements.keys = document.querySelectorAll('.keyboard.main__keyboard > .keyboard__key');
    
    // actions handlers
    this.buttonClickHandler();
    this.keyPressHandler();

  },

  createKey(el, fragment, additionalKeyClass) {
    let key;
    let keyContent;
    key = document.createElement('button');
    keyContent = document.createTextNode(el.eng);
    key.classList.add('keyboard__key', additionalKeyClass);
    key.setAttribute('data-code', el.keyCode);
    key.setAttribute('data-eng', el.eng);
    key.setAttribute('data-engShift', el.engShift);
    key.setAttribute('data-ru', el.ru);
    key.setAttribute('data-ruShift', el.ruShift);
    key.appendChild(keyContent);
    fragment.appendChild(key);
  },

  buttonClickHandler() {
    // buttons click handler
    let _this = this;
    this.elements.main.addEventListener('click', function(e) {
      let selectionStart = _this.output.selectionStart;
      let selectionEnd = _this.output.selectionEnd;
      let output = _this.output.value;
      let noSelection = selectionStart === selectionEnd ? true : false;
      if (e.target.classList.contains('keyboard__key')) {
        switch(e.target.getAttribute('data-eng')) {
          case 'Backspace':
            if (noSelection) {
              _this.output.value = output.slice(0, selectionStart - 1) + output.slice(selectionStart);
            } else {
              _this.output.value = output.slice(0, selectionStart) + output.slice(selectionEnd);
            } 
            break;
          case 'Tab':
            _this.output.value = output.slice(0, selectionStart) + '    ' + output.slice(selectionStart);
            break;
          case 'Del':
            if (noSelection) {
              _this.output.value = output.slice(0, selectionStart) + output.slice(selectionStart + 1);
            } else {
              _this.output.value = output.slice(0, selectionStart) + output.slice(selectionEnd);
            } 
            break;
          case 'CapsLock':
            e.target.classList.toggle('keyboard__key_active');
            _this.capsLockHandler();
            break;
          case 'Enter':
            _this.output.value = output.slice(0, selectionStart) + '\n' + output.slice(selectionStart);
            break;
          case 'Shift':
          case 'Ctrl':
          case 'Win':
          case 'Alt':
            break;
          case 'Space':
            _this.output.value = output.slice(0, selectionStart) + ' ' + output.slice(selectionStart);
            break;  
          default:
            _this.output.value = output.slice(0, selectionStart) + e.target.textContent + output.slice(selectionStart);
            break;  
        }
        _this.output.focus();
      }
    })
  },

  capsLockHandler() {
    let _this = this;
    this.properties.capsLock = !this.properties.capsLock;
    this.elements.keys.forEach(function(el) {
      if (el.textContent.match(/^[a-zА-Я]$/i)) {
        el.textContent = _this.properties.capsLock ? el.textContent.toUpperCase() : el.textContent.toLowerCase();
      }
    });
  },

  shiftHandler() {
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
      if (_this.properties.shift) {
        if (el.getAttribute(shift) !== 'none') {
          el.textContent = _this.properties.capsLock ? el.getAttribute(shift).toLowerCase() : el.getAttribute(shift);
        } else {
          el.textContent = el.getAttribute(lang);
        }
      } else {
        if (el.getAttribute(shift) !== 'none') {
          el.textContent = _this.properties.capsLock ? el.getAttribute(lang).toUpperCase() : el.getAttribute(lang);
        } else {
          el.textContent = el.getAttribute(lang);
        }
        }
    });
  },

  keyPressHandler() {
    let _this = this;
    let capsLockButton = document.querySelector('[data-code="CapsLock"]'); 

    //key down
    document.addEventListener('keydown', function(event) {
      //highlight pressed button
      _this.elements.keys.forEach(function(el) {
        if (el.getAttribute('data-code') === event.code && !el.classList.contains('keyboard__key_active') && event.code !== 'CapsLock') el.classList.add('keyboard__key_active');
      });
      //CapsLock 
      if (event.code === 'CapsLock') {
        capsLockButton.classList.toggle('keyboard__key_active');
        _this.capsLockHandler();
      }
      //shift
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        if (!_this.properties.shift) {
          _this.properties.shift = true;
          _this.shiftHandler();  
        } 
      }
      //language switch
      if(event.ctrlKey && event.code === 'AltLeft') {
        if (!_this.properties.languageSwitch) _this.properties.languageSwitch = true;
      }
    });

    //key up
    document.addEventListener('keyup', function(event) {
      _this.elements.keys.forEach(function(el) {
        if (el.getAttribute('data-code') === event.code && event.code !== 'CapsLock') el.classList.remove('keyboard__key_active');
      });
      //shift
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        _this.properties.shift = false;
        _this.shiftHandler();
      }
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