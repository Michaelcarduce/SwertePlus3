class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="special-header">
        <div class="navigation">
          <div class="alignment">
            <a href="#"><img class="logo" src="img/logo.png" alt="PANALOBET Logo" title="PANALOBET Logo"></a>
          </div>
          <div class="alignment navigationlinks">
            <nav>
              <ul class="colibri-menu topnav">
                <li><a href="index.html" id="home-link">HOME</a></li>
                <li><a href="signup.html" id="signup-link">SIGN UP</a></li>
                <li><a href="sports.html" id="sports-link">SPORTS</a></li>
                <li><a href="slots.html" id="slots-link">SLOTS</a></li>
                <li><a href="livecasino.html" id="livecasino-link">LIVE CASINO</a></li>
                <li><a href="fishinggame.html" id="fishinggame-link">FISHING GAME</a></li>
                <li><a href="banking.html" id="banking-link">BANKING</a></li>
                <li><a href="downloadapp.html" id="downloadapp-link">DOWNLOAD APP</a></li>
                <li><a href="promotion.html" id="promotion-link">PROMOTION</a></li>
              </ul>
            </nav>
          </div>        
          <div class="alignment">
            <a class="ctaButton" href="#" target="_blank"><span class="ctaButtonMes">Login</span></a>
            <a class="ctaButton2" href="#" target="_blank"><span class="ctaButtonMes">Signup</span></a>
          </div>
          <div id="nav-icon"><span></span><span></span><span></span></div>
        </div>
      </header>
    `;
    this.initHamburgerMenu();
    this.setActiveLink();
    this.handleScroll();
  }

  initHamburgerMenu() {
    const navIcon = this.querySelector('#nav-icon');
    const topNav = this.querySelector('.topnav');
    const navigationLinks = this.querySelector('.navigationlinks');
    
    navIcon.addEventListener('click', function() {
      navIcon.classList.toggle('active');
      topNav.classList.toggle('active');
      navigationLinks.classList.toggle('active');
      document.body.classList.toggle('scroll_fix');
    });
  }

  setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop();
    const links = this.querySelectorAll('.topnav li a');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }

  handleScroll() {
    const scrollheader = document.querySelector('.special-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        scrollheader.classList.add('scrolled');
      } else {
        scrollheader.classList.remove('scrolled');
      }
    });
  }
}





class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <section class="dualCompartmentStackedLayout"> 
          <div class="flexboxGrid">
            <div class="flexboxGridFooter">
              <p class="footerdescriptions mtb20"><a class="colorRegShadow" href="index.html" id="home-link">About Us</a></p>
            </div>
            <div class="flexboxGridFooter">
              <p class="footerdescriptions mtb20"><a class="colorRegShadow" href="index.html" id="home-link">Privacy and Security</a></p>
            </div>
            <div class="flexboxGridFooter">
              <p class="footerdescriptions mtb20"><a class="colorRegShadow" href="index.html" id="home-link">Terms and Condition</a></p>
            </div>
            <div class="flexboxGridFooter">
              <p class="footerdescriptions mtb20"><a class="colorRegShadow" href="index.html" id="home-link">Responsible Gaming</a></p>
            </div>
            <div class="flexboxGridFooter">
              <p class="footerdescriptions mtb20"><a class="colorRegShadow" href="index.html" id="home-link">FAQs</a></p>
            </div>
          </div>
          <div class="dualCompartmentAdjustable mtb20 plr10">
            <div class="">
              <a href="#"><img class="logo" src="img/logo.png" alt="PANALOBET Logo" title="PANALOBET Logo"></a>
            </div>
            <div class="dualCompartmentContainerStackedLayoutContents">
              <p class="metadescriptions colorRegShadow">Copyright ©2024 SwertePlus licensed by Philippine Amusement and Gaming Corporation</p>
            </div>  
          </div>

       
        </section>      
      </footer>
    `;
  }
}




customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
