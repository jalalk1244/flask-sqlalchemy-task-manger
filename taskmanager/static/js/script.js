document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
    //  Modal initialization
    let  modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
  });
