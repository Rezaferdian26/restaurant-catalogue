class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header>
            <div class="hero">
              <div class="hero-inner">
                <h1 class="hero-title">Temukan Restoran Terbaik Pilihanmu</h1>
                <p class="hero-tagline">Manjakan lidah dengan rasa bintang lima</p>
              </div>
              <div id="search-bar">
                <input aria-label="input pencarian" type="search" placeholder="Cari..." id="query">
                <span>🔍</span>
              </div>
            </div>
        </header>
    `;
  }
}
customElements.define('header-bar', HeaderBar);
