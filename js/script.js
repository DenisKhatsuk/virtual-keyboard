class Keyboard {
  parent = null;
  output = null;

  elements = {
    main: null,
    keysLayout: [
      {
        keyCode: 'Backquote', eng: '`', engShift: '~', ru: 'ё', ruShift: 'Ё',
      },
      {
        keyCode: 'Digit1', eng: '1', engShift: '!', ru: '1', ruShift: '!',
      },
      {
        keyCode: 'Digit2', eng: '2', engShift: '@', ru: '2', ruShift: '"',
      },
      {
        keyCode: 'Digit3', eng: '3', engShift: '#', ru: '3', ruShift: '№',
      },
      {
        keyCode: 'Digit4', eng: '4', engShift: '$', ru: '4', ruShift: ';',
      },
      {
        keyCode: 'Digit5', eng: '5', engShift: '%', ru: '5', ruShift: '%',
      },
      {
        keyCode: 'Digit6', eng: '6', engShift: '^', ru: '6', ruShift: ':',
      },
      {
        keyCode: 'Digit7', eng: '7', engShift: '&', ru: '7', ruShift: '?',
      },
      {
        keyCode: 'Digit8', eng: '8', engShift: '*', ru: '8', ruShift: '*',
      },
      {
        keyCode: 'Digit9', eng: '9', engShift: '(', ru: '9', ruShift: '(',
      },
      {
        keyCode: 'Digit0', eng: '0', engShift: ')', ru: '0', ruShift: ')',
      },
      {
        keyCode: 'Minus', eng: '-', engShift: '_', ru: '-', ruShift: '_',
      },
      {
        keyCode: 'Equal', eng: '=', engShift: '+', ru: '=', ruShift: '+',
      },
      {
        keyCode: 'Backspace', eng: 'Backspace', engShift: 'none', ru: 'Backspace', ruShift: 'none', size: 'keyboard__key_size-3',
      },
      { eng: '\n' },
      {
        keyCode: 'Tab', eng: 'Tab', engShift: 'none', ru: 'Tab', ruShift: 'none', size: 'keyboard__key_size-2',
      },
      {
        keyCode: 'KeyQ', eng: 'q', engShift: 'Q', ru: 'й', ruShift: 'Й',
      },
      {
        keyCode: 'KeyW', eng: 'w', engShift: 'W', ru: 'ц', ruShift: 'Ц',
      },
      {
        keyCode: 'KeyE', eng: 'e', engShift: 'E', ru: 'у', ruShift: 'У',
      },
      {
        keyCode: 'KeyR', eng: 'r', engShift: 'R', ru: 'к', ruShift: 'К',
      },
      {
        keyCode: 'KeyT', eng: 't', engShift: 'T', ru: 'е', ruShift: 'Е',
      },
      {
        keyCode: 'KeyY', eng: 'y', engShift: 'Y', ru: 'н', ruShift: 'Н',
      },
      {
        keyCode: 'KeyU', eng: 'u', engShift: 'U', ru: 'г', ruShift: 'Г',
      },
      {
        keyCode: 'KeyI', eng: 'i', engShift: 'I', ru: 'ш', ruShift: 'Ш',
      },
      {
        keyCode: 'KeyO', eng: 'o', engShift: 'O', ru: 'щ', ruShift: 'Щ',
      },
      {
        keyCode: 'KeyP', eng: 'p', engShift: 'P', ru: 'з', ruShift: 'З',
      },
      {
        keyCode: 'BracketLeft', eng: '[', engShift: '{', ru: 'х', ruShift: 'Х',
      },
      {
        keyCode: 'BracketRight', eng: ']', engShift: '}', ru: 'ъ', ruShift: 'Ъ',
      },
      {
        keyCode: 'Backslash', eng: '\\', engShift: '|', ru: '\\', ruShift: '/',
      },
      {
        keyCode: 'Delete', eng: 'Del', engShift: 'none', ru: 'Del', ruShift: 'none',
      },
      { eng: '\n' },
      {
        keyCode: 'CapsLock', eng: 'CapsLock', engShift: 'none', ru: 'CapsLock', ruShift: 'none', size: 'keyboard__key_size-4',
      },
      {
        keyCode: 'KeyA', eng: 'a', engShift: 'A', ru: 'ф', ruShift: 'Ф',
      },
      {
        keyCode: 'KeyS', eng: 's', engShift: 'S', ru: 'ы', ruShift: 'Ы',
      },
      {
        keyCode: 'KeyD', eng: 'd', engShift: 'D', ru: 'в', ruShift: 'В',
      },
      {
        keyCode: 'KeyF', eng: 'f', engShift: 'F', ru: 'а', ruShift: 'А',
      },
      {
        keyCode: 'KeyG', eng: 'g', engShift: 'G', ru: 'п', ruShift: 'П',
      },
      {
        keyCode: 'KeyH', eng: 'h', engShift: 'H', ru: 'р', ruShift: 'Р',
      },
      {
        keyCode: 'KeyJ', eng: 'j', engShift: 'J', ru: 'о', ruShift: 'О',
      },
      {
        keyCode: 'KeyK', eng: 'k', engShift: 'K', ru: 'л', ruShift: 'Л',
      },
      {
        keyCode: 'KeyL', eng: 'l', engShift: 'L', ru: 'д', ruShift: 'Д',
      },
      {
        keyCode: 'Semicolon', eng: ';', engShift: ':', ru: 'ж', ruShift: 'Ж',
      },
      {
        keyCode: 'Quote', eng: '\'', engShift: '"', ru: 'э', ruShift: 'Э',
      },
      {
        keyCode: 'Enter', eng: 'Enter', engShift: 'none', ru: 'Enter', ruShift: 'none', size: 'keyboard__key_size-4',
      },
      { eng: '\n' },
      {
        keyCode: 'ShiftLeft', eng: 'Shift', engShift: 'none', ru: 'Shift', ruShift: 'none', size: 'keyboard__key_size-4',
      },
      {
        keyCode: 'KeyZ', eng: 'z', engShift: 'Z', ru: 'я', ruShift: 'Я',
      },
      {
        keyCode: 'KeyX', eng: 'x', engShift: 'X', ru: 'ч', ruShift: 'Ч',
      },
      {
        keyCode: 'KeyC', eng: 'c', engShift: 'C', ru: 'с', ruShift: 'С',
      },
      {
        keyCode: 'KeyV', eng: 'v', engShift: 'V', ru: 'м', ruShift: 'М',
      },
      {
        keyCode: 'KeyB', eng: 'b', engShift: 'B', ru: 'и', ruShift: 'И',
      },
      {
        keyCode: 'KeyN', eng: 'n', engShift: 'N', ru: 'т', ruShift: 'Т',
      },
      {
        keyCode: 'KeyM', eng: 'm', engShift: 'M', ru: 'ь', ruShift: 'Ь',
      },
      {
        keyCode: 'Comma', eng: ',', engShift: '<', ru: 'б', ruShift: 'Б',
      },
      {
        keyCode: 'Period', eng: '.', engShift: '>', ru: 'ю', ruShift: 'Ю',
      },
      {
        keyCode: 'Slash', eng: '/', engShift: '?', ru: '.', ruShift: ',',
      },
      {
        keyCode: 'ArrowUp', eng: '▲', engShift: 'none', ru: '▲', ruShift: 'none',
      },
      {
        keyCode: 'ShiftRight', eng: 'Shift', engShift: 'none', ru: 'Shift', ruShift: 'none', size: 'keyboard__key_size-4',
      },
      { eng: '\n' },
      {
        keyCode: 'ControlLeft', eng: 'Ctrl', engShift: 'none', ru: 'Ctrl', ruShift: 'none',
      },
      {
        keyCode: 'MetaLeft', eng: 'Win', engShift: 'none', ru: 'Win', ruShift: 'none',
      },
      {
        keyCode: 'AltLeft', eng: 'Alt', engShift: 'none', ru: 'Alt', ruShift: 'none',
      },
      {
        keyCode: 'Space', eng: 'Space', engShift: 'none', ru: 'Space', ruShift: 'none', size: 'keyboard__key_size-5',
      },
      {
        keyCode: 'AltRight', eng: 'Alt', engShift: 'none', ru: 'Alt', ruShift: 'none',
      },
      {
        keyCode: 'ArrowLeft', eng: '◄', engShift: 'none', ru: '◄', ruShift: 'none',
      },
      {
        keyCode: 'ArrowDown', eng: '▼', engShift: 'none', ru: '▼', ruShift: 'none',
      },
      {
        keyCode: 'ArrowRight', eng: '►', engShift: 'none', ru: '►', ruShift: 'none',
      },
      {
        keyCode: 'ControlRight', eng: 'Ctrl', engShift: 'none', ru: 'Ctrl', ruShift: 'none',
      },
    ],
    keys: null,
  };

  properties = {
    capsLock: false,
    shift: false,
    language: 'ENG',
    languageSwitcher: false,
  };

  init() {
    const $this = this;
    this.parent = document.querySelector('.main');
    this.output = document.querySelector('textarea[name="textarea"]');
    this.keepOutputFocus();
    // create keyboard element
    this.elements.main = document.createElement('div');
    this.elements.main.classList.add('keyboard', 'main__keyboard');
    

    // add keys to keyboard
    const fragment = new DocumentFragment();
    const lineBrake = document.createElement('br');
    this.elements.keysLayout.forEach((el) => {
      if (el.eng === '\n') {
        fragment.appendChild(lineBrake);
      } else {
        $this.createKey(el, fragment);
      }
    });
    this.elements.main.appendChild(fragment);
    this.parent.appendChild(this.elements.main);
    this.elements.keys = document.querySelectorAll('.keyboard.main__keyboard > .keyboard__key');

    // actions handlers
    this.bindButtonClickHandler();
    this.keyPressHandler();
  }

  keepOutputFocus() {
    const $this = this;
    $this.output.focus();
    const body = document.querySelector('.body');
    body.addEventListener('keydown', () => {
      $this.output.focus();
    });
    body.addEventListener('click', () => {
      $this.output.focus();
    });
  }

  createKey(el, fragment) {
    const key = document.createElement('button');
    const content = this.properties.language === 'ENG' ? el.eng : el.ru;
    const keyContent = document.createTextNode(content);
    key.classList.add('keyboard__key');
    if (el.size !== undefined) key.classList.add(el.size);
    key.setAttribute('data-code', el.keyCode);
    key.setAttribute('data-eng', el.eng);
    key.setAttribute('data-engShift', el.engShift);
    key.setAttribute('data-ru', el.ru);
    key.setAttribute('data-ruShift', el.ruShift);
    key.appendChild(keyContent);
    fragment.appendChild(key);
  }

  bindButtonClickHandler() {
    // buttons click handler
    let shiftClick = false;
    this.elements.main.addEventListener('click', (e) => {
      if (!e.target.classList.contains('keyboard__key')) { return; }
      const targetContent = e.target.textContent;
      const selectionStart = this.output.selectionStart;
      const selectionEnd = this.output.selectionEnd;
      const output = this.output.value;
      const noSelection = selectionStart === selectionEnd;
      const outputBeforeSelection = output.slice(0, selectionStart);
      const outputAfterSelection = output.slice(selectionEnd);
      switch (e.target.getAttribute('data-eng')) {
        case 'Backspace':
          if (noSelection) {
            this.output.value = output.slice(0, selectionStart - 1) + outputAfterSelection;
            this.output.setSelectionRange(selectionStart - 1, selectionStart - 1);
          } else {
            this.output.value = outputBeforeSelection + output.slice(selectionEnd);
            this.output.setSelectionRange(selectionStart, selectionStart);
          }
          break;
        case 'Tab':
          this.output.value = `${outputBeforeSelection}\t${outputAfterSelection}`;
          this.output.setSelectionRange(selectionStart + 1, selectionStart + 1);
          break;
        case 'Del':
          if (noSelection) {
            this.output.value = outputBeforeSelection + output.slice(selectionStart + 1);
          } else {
            this.output.value = outputBeforeSelection + output.slice(selectionEnd);
          }
          this.output.setSelectionRange(selectionStart, selectionStart);
          break;
        case 'CapsLock':
          e.target.classList.toggle('keyboard__key_active');
          this.capsLockHandler();
          break;
        case 'Enter':
          this.output.value = `${outputBeforeSelection}\n${outputAfterSelection}`;
          break;
        case 'Shift':
        case 'Ctrl':
        case 'Win':
        case 'Alt':
          break;
        case 'Space':
          this.output.value = `${outputBeforeSelection} ${outputAfterSelection}`;
          this.output.setSelectionRange(selectionStart + 1, selectionStart + 1);
          break;
        default:
          this.output.value = outputBeforeSelection + targetContent + outputAfterSelection;
          break;
      }
      
    });
    // shift click handler
    this.elements.main.addEventListener('mousedown', (e) => {
      if (!this.properties.shift && e.target.getAttribute('data-eng') === 'Shift') {
        this.properties.shift = true;
        shiftClick = true;
        this.shiftHandler();
      }
    });
    this.elements.main.addEventListener('mouseup', () => {
      if (shiftClick) {
        this.properties.shift = false;
        shiftClick = false;
        this.shiftHandler();
      }
    });
  }

  capsLockHandler() {
    this.properties.capsLock = !this.properties.capsLock;
    const caps = this.properties.capsLock;
    this.elements.keys.forEach((el) => {
      if (el.textContent.match(/^[a-zА-Яё]$/i)) {
        el.textContent = caps ? el.textContent.toUpperCase() : el.textContent.toLowerCase();
      }
    });
  }

  shiftHandler() {
    let keyData;
    let keyDataShift;
    keyData = this.properties.language === 'ENG' ? 'data-eng' : 'data-ru';
    keyDataShift = this.properties.language === 'ENG' ? 'data-engshift' : 'data-rushift';
    this.elements.keys.forEach((el) => {
      const caps = this.properties.capsLock;
      if (this.properties.shift) {
        if (el.getAttribute(keyDataShift) !== 'none') {
          el.textContent = caps ? el.getAttribute(keyDataShift).toLowerCase() : el.getAttribute(keyDataShift);
        } else {
          el.textContent = el.getAttribute(keyData);
        }
      } else if (el.getAttribute(keyDataShift) !== 'none') {
        el.textContent = caps ? el.getAttribute(keyData).toUpperCase() : el.getAttribute(keyData);
      } else {
        el.textContent = el.getAttribute(keyData);
      }
    });
  }

  keyPressHandler() {
    const $this = this;
    const capsLockButton = document.querySelector('[data-code="CapsLock"]');

    // key down
    document.addEventListener('keydown', (event) => {
      // highlight pressed button
      $this.elements.keys.forEach((el) => {
        if (el.getAttribute('data-code') === event.code && !el.classList.contains('keyboard__key_active') && event.code !== 'CapsLock') el.classList.add('keyboard__key_active');
      });
      // CapsLock
      if (event.code === 'CapsLock') {
        capsLockButton.classList.toggle('keyboard__key_active');
        $this.capsLockHandler();
      }
      // shift
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        if (!$this.properties.shift) {
          $this.properties.shift = true;
          $this.shiftHandler();
        }
      }
      // tab
      if (event.code === 'Tab') {
        const output = $this.output.value;
        const selectionStart = $this.output.selectionStart;
        const outputBeforeSelection = output.slice(0, selectionStart);
        const outputAfterSelection = output.slice(selectionStart);
        event.preventDefault();
        $this.output.value = `${outputBeforeSelection}    ${outputAfterSelection}`;
        $this.output.setSelectionRange(selectionStart + 4, selectionStart + 4);
      }
      // language switch
      if (event.ctrlKey && event.code === 'AltLeft') {
        if (!$this.properties.languageSwitch) $this.properties.languageSwitch = true;
      }
      // current language detect
      if (event.key.match(/^[А-Яё"№;%:?*.]$/i) && $this.properties.language === 'ENG') {
        $this.properties.language = 'RU';
        $this.setKeysValue();
      }
      if (event.key.match(/^[a-z`~@#$&/]$/i) && $this.properties.language === 'RU') {
        $this.properties.language = 'ENG';
        $this.setKeysValue();
      }
    });

    // key up
    document.addEventListener('keyup', (event) => {
      $this.elements.keys.forEach((el) => {
        if (el.getAttribute('data-code') === event.code && event.code !== 'CapsLock') el.classList.remove('keyboard__key_active');
      });
      // shift
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        $this.properties.shift = false;
        $this.shiftHandler();
      }
      // language switch
      if (event.altKey) {
        if ($this.properties.languageSwitch) {
          $this.properties.language = $this.properties.language === 'ENG' ? 'RU' : 'ENG';
          localStorage.setItem('lang', $this.properties.language);
          $this.properties.languageSwitch = false;
        }
        $this.setKeysValue();
      }
    });
  }

  setKeysValue() {
    const $this = this;
    const caps = $this.properties.capsLock;
    const lang = $this.properties.language === 'ENG' ? 'data-eng' : 'data-ru';
    $this.elements.keys.forEach((element) => {
      const el = element;
      if (el.getAttribute(lang) !== 'none') {
        if (el.textContent.match(/^[a-zА-Яё]$/i)) {
          el.textContent = caps ? el.getAttribute(lang).toUpperCase() : el.getAttribute(lang);
        } else {
          el.textContent = el.getAttribute(lang);
        }
      }
    });
  }
}

class TextArea {
  parent = document.querySelector('.body');

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

class AdditionalContent {
  parent = document.querySelector('.body');

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

window.addEventListener('DOMContentLoaded', () => {
  let output = new TextArea();
  let content = new AdditionalContent();
  let keyboard = new Keyboard();
  output.init();
  keyboard.properties.language = localStorage.getItem('lang');
  keyboard.init();
  content.init();
});
