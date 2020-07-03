import Keyboard from './modules/Keyboard';
import TextArea from './modules/TextArea';
import AdditionalContent from './modules/AdditionalContent';

window.addEventListener('DOMContentLoaded', () => {
  const output = new TextArea();
  const content = new AdditionalContent();
  const keyboard = new Keyboard();
  output.init();
  keyboard.properties.language = localStorage.getItem('lang');
  keyboard.init();
  content.init();
});
