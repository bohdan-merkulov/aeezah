document.getElementById('header-burger').onclick = function() {
    document.getElementById('header-burger').classList.toggle('active');
    document.getElementById('header-menu').classList.toggle('active');
    document.body.classList.toggle('lock');
  }

document.getElementById('header-menu').onclick = function() {
    document.getElementById('header-burger').classList.remove('active');
    document.getElementById('header-menu').classList.remove('active');
    document.body.classList.remove('lock');
  }
