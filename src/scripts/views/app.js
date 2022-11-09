import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import SearchInitiator from '../utils/search-initiator';

class App {
  constructor({
    button, drawer, content, header,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._header = header;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      header: this._header,
    });

    // eslint-disable-next-line no-unused-vars
    const userSearch = new SearchInitiator();
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
