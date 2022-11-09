
      const inputButton = document.getElementById('input-button');
      const nav = document.getElementById('nav');

      const menuButton = document.getElementById('menu-button');
      const navBox = document.getElementById('nav-box');

      let currentState = false;
      function displayNav() {
        let color = localStorage.getItem('color');
        navBox.style.backgroundColor - color;
        navBox.style.backgroundColor = color;
        if (!currentState) {
          currentState = true;
          navBox.style.visibility = 'visible';
          inputButton.setAttribute('style', 'margin-top:9rem');
        } else {
          currentState = false;
          navBox.style.visibility = 'hidden';
          inputButton.removeAttribute('style');
        }
      }

      function getColor() {
        let color = localStorage.getItem('color');
        nav.style.backgroundColor = color;
        inputButton.value = color;
      }

      getColor();

      function saveColor(color) {
        localStorage.setItem('color', color);
      }
      function changeColor(e) {
        saveColor(e.target.value);
        nav.style.backgroundColor = e.target.value;
        navBox.style.backgroundColor = e.target.value;
      }

      inputButton.addEventListener('input', changeColor);
      menuButton.addEventListener('click', displayNav);
   
