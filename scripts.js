/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/AdditionalContent.js":
/*!*****************************************!*\
  !*** ./js/modules/AdditionalContent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AdditionalContent; });\nclass AdditionalContent {\n  constructor() {\n    this.parent = document.querySelector('.body');\n  }\n\n  init() {\n    // add additional header content\n    const header = document.createElement('header');\n    const heading = document.createElement('h1');\n    header.classList.add('header');\n    heading.classList.add('header__title');\n    heading.textContent = 'RS School Virtual Keyboard';\n    header.appendChild(heading);\n    this.parent.prepend(header);\n\n    // add additional footer content\n    const footer = document.createElement('footer');\n    const script = document.querySelector('script');\n    footer.classList.add('footer');\n    footer.innerHTML = '<div class=\"description\"><p class=\"description__text\">Keyboard is created in OS Windows.<br><br>To switch language use left ctrl + alt.</p></div>';\n    this.parent.insertBefore(footer, script);\n  }\n}\n\n\n//# sourceURL=webpack:///./js/modules/AdditionalContent.js?");

/***/ }),

/***/ "./js/modules/Keyboard.js":
/*!********************************!*\
  !*** ./js/modules/Keyboard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Keyboard; });\nclass Keyboard {\n  constructor() {\n    this.parent = null;\n    this.output = null;\n\n    this.elements = {\n      main: null,\n      keysLayout: [\n        {\n          keyCode: 'Backquote', eng: '`', engShift: '~', ru: 'ё', ruShift: 'Ё',\n        },\n        {\n          keyCode: 'Digit1', eng: '1', engShift: '!', ru: '1', ruShift: '!',\n        },\n        {\n          keyCode: 'Digit2', eng: '2', engShift: '@', ru: '2', ruShift: '\"',\n        },\n        {\n          keyCode: 'Digit3', eng: '3', engShift: '#', ru: '3', ruShift: '№',\n        },\n        {\n          keyCode: 'Digit4', eng: '4', engShift: '$', ru: '4', ruShift: ';',\n        },\n        {\n          keyCode: 'Digit5', eng: '5', engShift: '%', ru: '5', ruShift: '%',\n        },\n        {\n          keyCode: 'Digit6', eng: '6', engShift: '^', ru: '6', ruShift: ':',\n        },\n        {\n          keyCode: 'Digit7', eng: '7', engShift: '&', ru: '7', ruShift: '?',\n        },\n        {\n          keyCode: 'Digit8', eng: '8', engShift: '*', ru: '8', ruShift: '*',\n        },\n        {\n          keyCode: 'Digit9', eng: '9', engShift: '(', ru: '9', ruShift: '(',\n        },\n        {\n          keyCode: 'Digit0', eng: '0', engShift: ')', ru: '0', ruShift: ')',\n        },\n        {\n          keyCode: 'Minus', eng: '-', engShift: '_', ru: '-', ruShift: '_',\n        },\n        {\n          keyCode: 'Equal', eng: '=', engShift: '+', ru: '=', ruShift: '+',\n        },\n        {\n          keyCode: 'Backspace', eng: 'Backspace', engShift: 'none', ru: 'Backspace', ruShift: 'none', size: 'keyboard__key_size-3',\n        },\n        { eng: '\\n' },\n        {\n          keyCode: 'Tab', eng: 'Tab', engShift: 'none', ru: 'Tab', ruShift: 'none', size: 'keyboard__key_size-2',\n        },\n        {\n          keyCode: 'KeyQ', eng: 'q', engShift: 'Q', ru: 'й', ruShift: 'Й',\n        },\n        {\n          keyCode: 'KeyW', eng: 'w', engShift: 'W', ru: 'ц', ruShift: 'Ц',\n        },\n        {\n          keyCode: 'KeyE', eng: 'e', engShift: 'E', ru: 'у', ruShift: 'У',\n        },\n        {\n          keyCode: 'KeyR', eng: 'r', engShift: 'R', ru: 'к', ruShift: 'К',\n        },\n        {\n          keyCode: 'KeyT', eng: 't', engShift: 'T', ru: 'е', ruShift: 'Е',\n        },\n        {\n          keyCode: 'KeyY', eng: 'y', engShift: 'Y', ru: 'н', ruShift: 'Н',\n        },\n        {\n          keyCode: 'KeyU', eng: 'u', engShift: 'U', ru: 'г', ruShift: 'Г',\n        },\n        {\n          keyCode: 'KeyI', eng: 'i', engShift: 'I', ru: 'ш', ruShift: 'Ш',\n        },\n        {\n          keyCode: 'KeyO', eng: 'o', engShift: 'O', ru: 'щ', ruShift: 'Щ',\n        },\n        {\n          keyCode: 'KeyP', eng: 'p', engShift: 'P', ru: 'з', ruShift: 'З',\n        },\n        {\n          keyCode: 'BracketLeft', eng: '[', engShift: '{', ru: 'х', ruShift: 'Х',\n        },\n        {\n          keyCode: 'BracketRight', eng: ']', engShift: '}', ru: 'ъ', ruShift: 'Ъ',\n        },\n        {\n          keyCode: 'Backslash', eng: '\\\\', engShift: '|', ru: '\\\\', ruShift: '/',\n        },\n        {\n          keyCode: 'Delete', eng: 'Del', engShift: 'none', ru: 'Del', ruShift: 'none',\n        },\n        { eng: '\\n' },\n        {\n          keyCode: 'CapsLock', eng: 'CapsLock', engShift: 'none', ru: 'CapsLock', ruShift: 'none', size: 'keyboard__key_size-4',\n        },\n        {\n          keyCode: 'KeyA', eng: 'a', engShift: 'A', ru: 'ф', ruShift: 'Ф',\n        },\n        {\n          keyCode: 'KeyS', eng: 's', engShift: 'S', ru: 'ы', ruShift: 'Ы',\n        },\n        {\n          keyCode: 'KeyD', eng: 'd', engShift: 'D', ru: 'в', ruShift: 'В',\n        },\n        {\n          keyCode: 'KeyF', eng: 'f', engShift: 'F', ru: 'а', ruShift: 'А',\n        },\n        {\n          keyCode: 'KeyG', eng: 'g', engShift: 'G', ru: 'п', ruShift: 'П',\n        },\n        {\n          keyCode: 'KeyH', eng: 'h', engShift: 'H', ru: 'р', ruShift: 'Р',\n        },\n        {\n          keyCode: 'KeyJ', eng: 'j', engShift: 'J', ru: 'о', ruShift: 'О',\n        },\n        {\n          keyCode: 'KeyK', eng: 'k', engShift: 'K', ru: 'л', ruShift: 'Л',\n        },\n        {\n          keyCode: 'KeyL', eng: 'l', engShift: 'L', ru: 'д', ruShift: 'Д',\n        },\n        {\n          keyCode: 'Semicolon', eng: ';', engShift: ':', ru: 'ж', ruShift: 'Ж',\n        },\n        {\n          keyCode: 'Quote', eng: '\\'', engShift: '\"', ru: 'э', ruShift: 'Э',\n        },\n        {\n          keyCode: 'Enter', eng: 'Enter', engShift: 'none', ru: 'Enter', ruShift: 'none', size: 'keyboard__key_size-4',\n        },\n        { eng: '\\n' },\n        {\n          keyCode: 'ShiftLeft', eng: 'Shift', engShift: 'none', ru: 'Shift', ruShift: 'none', size: 'keyboard__key_size-4',\n        },\n        {\n          keyCode: 'KeyZ', eng: 'z', engShift: 'Z', ru: 'я', ruShift: 'Я',\n        },\n        {\n          keyCode: 'KeyX', eng: 'x', engShift: 'X', ru: 'ч', ruShift: 'Ч',\n        },\n        {\n          keyCode: 'KeyC', eng: 'c', engShift: 'C', ru: 'с', ruShift: 'С',\n        },\n        {\n          keyCode: 'KeyV', eng: 'v', engShift: 'V', ru: 'м', ruShift: 'М',\n        },\n        {\n          keyCode: 'KeyB', eng: 'b', engShift: 'B', ru: 'и', ruShift: 'И',\n        },\n        {\n          keyCode: 'KeyN', eng: 'n', engShift: 'N', ru: 'т', ruShift: 'Т',\n        },\n        {\n          keyCode: 'KeyM', eng: 'm', engShift: 'M', ru: 'ь', ruShift: 'Ь',\n        },\n        {\n          keyCode: 'Comma', eng: ',', engShift: '<', ru: 'б', ruShift: 'Б',\n        },\n        {\n          keyCode: 'Period', eng: '.', engShift: '>', ru: 'ю', ruShift: 'Ю',\n        },\n        {\n          keyCode: 'Slash', eng: '/', engShift: '?', ru: '.', ruShift: ',',\n        },\n        {\n          keyCode: 'ArrowUp', eng: '▲', engShift: 'none', ru: '▲', ruShift: 'none',\n        },\n        {\n          keyCode: 'ShiftRight', eng: 'Shift', engShift: 'none', ru: 'Shift', ruShift: 'none', size: 'keyboard__key_size-4',\n        },\n        { eng: '\\n' },\n        {\n          keyCode: 'ControlLeft', eng: 'Ctrl', engShift: 'none', ru: 'Ctrl', ruShift: 'none',\n        },\n        {\n          keyCode: 'MetaLeft', eng: 'Win', engShift: 'none', ru: 'Win', ruShift: 'none',\n        },\n        {\n          keyCode: 'AltLeft', eng: 'Alt', engShift: 'none', ru: 'Alt', ruShift: 'none',\n        },\n        {\n          keyCode: 'Space', eng: 'Space', engShift: 'none', ru: 'Space', ruShift: 'none', size: 'keyboard__key_size-5',\n        },\n        {\n          keyCode: 'AltRight', eng: 'Alt', engShift: 'none', ru: 'Alt', ruShift: 'none',\n        },\n        {\n          keyCode: 'ArrowLeft', eng: '◄', engShift: 'none', ru: '◄', ruShift: 'none',\n        },\n        {\n          keyCode: 'ArrowDown', eng: '▼', engShift: 'none', ru: '▼', ruShift: 'none',\n        },\n        {\n          keyCode: 'ArrowRight', eng: '►', engShift: 'none', ru: '►', ruShift: 'none',\n        },\n        {\n          keyCode: 'ControlRight', eng: 'Ctrl', engShift: 'none', ru: 'Ctrl', ruShift: 'none',\n        },\n      ],\n      keys: null,\n    };\n\n    this.properties = {\n      capsLock: false,\n      shift: false,\n      language: 'ENG',\n      languageSwitcher: false,\n    };\n  }\n\n  init() {\n    const $this = this;\n    this.parent = document.querySelector('.main');\n    this.output = document.querySelector('textarea[name=\"textarea\"]');\n    this.keepOutputFocus();\n    // create keyboard element\n    this.elements.main = document.createElement('div');\n    this.elements.main.classList.add('keyboard', 'main__keyboard');\n\n\n    // add keys to keyboard\n    const fragment = new DocumentFragment();\n    const lineBrake = document.createElement('br');\n    this.elements.keysLayout.forEach((el) => {\n      if (el.eng === '\\n') {\n        fragment.appendChild(lineBrake);\n      } else {\n        $this.createKey(el, fragment);\n      }\n    });\n    this.elements.main.appendChild(fragment);\n    this.parent.appendChild(this.elements.main);\n    this.elements.keys = document.querySelectorAll('.keyboard.main__keyboard > .keyboard__key');\n\n    // actions handlers\n    this.bindButtonClickHandler();\n    this.keyPressHandler();\n  }\n\n  keepOutputFocus() {\n    const $this = this;\n    $this.output.focus();\n    const body = document.querySelector('.body');\n    body.addEventListener('keydown', () => {\n      $this.output.focus();\n    });\n    body.addEventListener('click', () => {\n      $this.output.focus();\n    });\n  }\n\n  createKey(el, fragment) {\n    const key = document.createElement('button');\n    const content = this.properties.language === 'ENG' ? el.eng : el.ru;\n    const keyContent = document.createTextNode(content);\n    key.classList.add('keyboard__key');\n    if (el.size !== undefined) key.classList.add(el.size);\n    key.setAttribute('data-code', el.keyCode);\n    key.setAttribute('data-eng', el.eng);\n    key.setAttribute('data-engShift', el.engShift);\n    key.setAttribute('data-ru', el.ru);\n    key.setAttribute('data-ruShift', el.ruShift);\n    key.appendChild(keyContent);\n    fragment.appendChild(key);\n  }\n\n  bindButtonClickHandler() {\n    // buttons click handler\n    let shiftClick = false;\n    this.elements.main.addEventListener('click', (e) => {\n      if (!e.target.classList.contains('keyboard__key')) { return; }\n      const targetContent = e.target.textContent;\n      const { selectionStart } = this.output;\n      const { selectionEnd } = this.output;\n      const output = this.output.value;\n      const noSelection = selectionStart === selectionEnd;\n      const outputBeforeSelection = output.slice(0, selectionStart);\n      const outputAfterSelection = output.slice(selectionEnd);\n      switch (e.target.getAttribute('data-eng')) {\n        case 'Backspace':\n          if (noSelection) {\n            this.output.value = output.slice(0, selectionStart - 1) + outputAfterSelection;\n            this.output.setSelectionRange(selectionStart - 1, selectionStart - 1);\n          } else {\n            this.output.value = outputBeforeSelection + output.slice(selectionEnd);\n            this.output.setSelectionRange(selectionStart, selectionStart);\n          }\n          break;\n        case 'Tab':\n          this.output.value = `${outputBeforeSelection}\\t${outputAfterSelection}`;\n          this.output.setSelectionRange(selectionStart + 1, selectionStart + 1);\n          break;\n        case 'Del':\n          if (noSelection) {\n            this.output.value = outputBeforeSelection + output.slice(selectionStart + 1);\n          } else {\n            this.output.value = outputBeforeSelection + output.slice(selectionEnd);\n          }\n          this.output.setSelectionRange(selectionStart, selectionStart);\n          break;\n        case 'CapsLock':\n          e.target.classList.toggle('keyboard__key_active');\n          this.capsLockHandler();\n          break;\n        case 'Enter':\n          this.output.value = `${outputBeforeSelection}\\n${outputAfterSelection}`;\n          break;\n        case 'Shift':\n        case 'Ctrl':\n        case 'Win':\n        case 'Alt':\n          break;\n        case 'Space':\n          this.output.value = `${outputBeforeSelection} ${outputAfterSelection}`;\n          this.output.setSelectionRange(selectionStart + 1, selectionStart + 1);\n          break;\n        default:\n          this.output.value = outputBeforeSelection + targetContent + outputAfterSelection;\n          break;\n      }\n    });\n    // shift click handler\n    this.elements.main.addEventListener('mousedown', (e) => {\n      if (!this.properties.shift && e.target.getAttribute('data-eng') === 'Shift') {\n        this.properties.shift = true;\n        shiftClick = true;\n        this.shiftHandler();\n      }\n    });\n    this.elements.main.addEventListener('mouseup', () => {\n      if (shiftClick) {\n        this.properties.shift = false;\n        shiftClick = false;\n        this.shiftHandler();\n      }\n    });\n  }\n\n  capsLockHandler() {\n    this.properties.capsLock = !this.properties.capsLock;\n    const caps = this.properties.capsLock;\n    this.elements.keys.forEach((elem) => {\n      const el = elem;\n      if (el.textContent.match(/^[a-zА-Яё]$/i)) {\n        el.textContent = caps ? el.textContent.toUpperCase() : el.textContent.toLowerCase();\n      }\n    });\n  }\n\n  shiftHandler() {\n    const keyData = this.properties.language === 'ENG' ? 'data-eng' : 'data-ru';\n    const keyDataShift = this.properties.language === 'ENG' ? 'data-engshift' : 'data-rushift';\n    this.elements.keys.forEach((elem) => {\n      const el = elem;\n      const elKeyData = el.getAttribute(keyData);\n      const elKeyDataShift = el.getAttribute(keyDataShift);\n      const caps = this.properties.capsLock;\n      if (this.properties.shift) {\n        if (elKeyDataShift !== 'none') {\n          el.textContent = caps ? elKeyDataShift.toLowerCase() : elKeyDataShift;\n        } else {\n          el.textContent = elKeyData;\n        }\n      } else if (elKeyDataShift !== 'none') {\n        el.textContent = caps ? elKeyData.toUpperCase() : elKeyData;\n      } else {\n        el.textContent = elKeyData;\n      }\n    });\n  }\n\n  keyPressHandler() {\n    const capsLockButton = document.querySelector('[data-code=\"CapsLock\"]');\n\n    // key down\n    document.addEventListener('keydown', (event) => {\n      // highlight pressed button\n      this.elements.keys.forEach((el) => {\n        if (el.getAttribute('data-code') === event.code && event.code !== 'CapsLock') el.classList.add('keyboard__key_active');\n      });\n      // CapsLock\n      if (event.code === 'CapsLock') {\n        capsLockButton.classList.toggle('keyboard__key_active');\n        this.capsLockHandler();\n      }\n      // shift\n      if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && !this.properties.shift) {\n        this.properties.shift = true;\n        this.shiftHandler();\n      }\n      // tab\n      if (event.code === 'Tab') {\n        const output = this.output.value;\n        const { selectionStart } = this.output;\n        const { selectionEnd } = this.output;\n        const outputBeforeSelection = output.slice(0, selectionStart);\n        const outputAfterSelection = output.slice(selectionEnd);\n        event.preventDefault();\n        this.output.value = `${outputBeforeSelection}\\t${outputAfterSelection}`;\n        this.output.setSelectionRange(selectionStart + 1, selectionStart + 1);\n      }\n      // language switch\n      if (event.ctrlKey && event.code === 'AltLeft') {\n        if (!this.properties.languageSwitch) this.properties.languageSwitch = true;\n      }\n      // current language detect\n      if (event.key.match(/^[А-Яё\"№;%:?*.]$/i) && this.properties.language === 'ENG') {\n        this.properties.language = 'RU';\n        this.setKeysValue();\n      }\n      if (event.key.match(/^[a-z`~@#$&/]$/i) && this.properties.language === 'RU') {\n        this.properties.language = 'ENG';\n        this.setKeysValue();\n      }\n    });\n\n    // key up\n    document.addEventListener('keyup', (event) => {\n      this.elements.keys.forEach((el) => {\n        if (el.getAttribute('data-code') === event.code && event.code !== 'CapsLock') el.classList.remove('keyboard__key_active');\n      });\n      // shift\n      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {\n        this.properties.shift = false;\n        this.shiftHandler();\n      }\n      // language switch\n      if (event.altKey || event.ctrlKey) {\n        if (this.properties.languageSwitch) {\n          this.properties.language = this.properties.language === 'ENG' ? 'RU' : 'ENG';\n          localStorage.setItem('lang', this.properties.language);\n          this.properties.languageSwitch = false;\n        }\n        this.setKeysValue();\n      }\n    });\n  }\n\n  setKeysValue() {\n    const $this = this;\n    const caps = $this.properties.capsLock;\n    const lang = $this.properties.language === 'ENG' ? 'data-eng' : 'data-ru';\n    $this.elements.keys.forEach((element) => {\n      const el = element;\n      if (el.getAttribute(lang) !== 'none') {\n        if (el.textContent.match(/^[a-zА-Яё]$/i)) {\n          el.textContent = caps ? el.getAttribute(lang).toUpperCase() : el.getAttribute(lang);\n        } else {\n          el.textContent = el.getAttribute(lang);\n        }\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./js/modules/Keyboard.js?");

/***/ }),

/***/ "./js/modules/TextArea.js":
/*!********************************!*\
  !*** ./js/modules/TextArea.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextArea; });\nclass TextArea {\n  constructor() {\n    this.parent = document.querySelector('.body');\n  }\n\n  init() {\n    // create textarea element\n    const main = document.createElement('div');\n    const textArea = document.createElement('div');\n    main.classList.add('main');\n    textArea.classList.add('textarea-wrapper', 'main__textarea');\n    textArea.innerHTML = '<textarea name=\"textarea\" id=\"textarea\" class=\"textarea\" cols=\"100\" rows=\"10\"></textarea>';\n    main.appendChild(textArea);\n    this.parent.prepend(main);\n  }\n}\n\n\n//# sourceURL=webpack:///./js/modules/TextArea.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Keyboard */ \"./js/modules/Keyboard.js\");\n/* harmony import */ var _modules_TextArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/TextArea */ \"./js/modules/TextArea.js\");\n/* harmony import */ var _modules_AdditionalContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/AdditionalContent */ \"./js/modules/AdditionalContent.js\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const output = new _modules_TextArea__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  const content = new _modules_AdditionalContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  const keyboard = new _modules_Keyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  output.init();\n  keyboard.properties.language = localStorage.getItem('lang');\n  keyboard.init();\n  content.init();\n});\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });