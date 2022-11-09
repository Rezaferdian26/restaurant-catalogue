class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav>
                <button id="menu">
                  ☰
                </button>
                <div class="nav-brand"><a href="#">Dapoer Apps</a></div>
                <div class="drawer">
                    <div class="hero-drawer"></div>
                    <ul class="nav-list">
                        <li class="nav-items"><a href="#/list-restaurant">Home</a></li>
                        <li class="nav-items"><a href="#/favorite">Favorite</a></li>
                        <li class="nav-items"><a href="https://github.com/Rezaferdian26" target="_blank">About Us</a></li>
                    </ul>
                </div>
            </nav>
        `;
  }
}
customElements.define('app-bar', AppBar);
