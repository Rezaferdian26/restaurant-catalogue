class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
          <div class="footer-wrapper mb-2">
            <div tabindex="0" class="description-app">
              <h3>Dapoer Apps</h3>
              <p>Temukan restoran terbaik pilihanmu disini!</p>
            </div>
            <div tabindex="0" class="contact-info">
              <h3>Contact Info</h3>
              <h4>Phone</h4>
              <p>+62 812 9200 8576</p>
              <h4>Email</h4>
              <p>rezaferdian145@gmail.com</p>
            </div>
            <div tabindex="0" class="page-navigation">
              <h3>Page Navigation</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://github.com/Rezaferdian26" target="_blank">About Me</a></li>
              </ul>
            </div>
            <div tabindex="0" class="follow-me">
            <h3>Follow Me</h3>
              <a aria-label="intsagram" href="https://www.instagram.com/rezaferdian26/" target="_blank">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a aria-label="github" href="https://github.com/Rezaferdian26" target="_blank">
                <i class="fa fa-github-square" aria-hidden="true"></i>
              </a>
              <a aria-label="linkedin" href="https://www.linkedin.com/in/reza-ferdian-919b551b3/" target="_blank">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div tabindex="0" class="text-center p-2">
            Copyright &copy; 2022 Dapoer Apps
          </div>
        </footer>
      `;
  }
}
customElements.define('footer-bar', FooterBar);
