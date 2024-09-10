class SpecialSocials extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="special-socials">
          <a href="https://facebook.com" target="_blank" class="social-link">
            <img src="img/socialicons1.png" alt="Facebook">
          </a>
          <a href="https://instagram.com" target="_blank" class="social-link">
            <img src="img/socialicons3.png" alt="Twitter">
          </a>
          <a href="https://telegram.com" target="_blank" class="social-link">
            <img src="img/socialicons2.png" alt="Instagram">
          </a>
          <a href="https://linkedin.com" target="_blank" class="social-link">
            <img src="img/socialicons4.png" alt="Instagram">
          </a>
        </div>
      `;
    }
  }
  
  customElements.define('special-socials', SpecialSocials);
  