(function() {
    const burger = document.querySelector('.burger');
    const started = document.querySelector('.nav-list');

    const nav1 = document.querySelector('.nav-inline-1');
    const nav2 = document.querySelector('.nav-inline-2');
    const nav3 = document.querySelector('.nav-inline-3');
    const nav4 = document.querySelector('.nav-inline-4');
    const nav5 = document.querySelector('.nav-inline-5');

    burger.addEventListener('click', () => {
      burger.classList.toggle('burger_active');
      started.classList.toggle('burger-add');
      started.classList.toggle('nav-margins');

      nav1.classList.toggle('nav-burger');
      nav2.classList.toggle('nav-burger');  
      nav3.classList.toggle('nav-burger');
      nav4.classList.toggle('nav-burger');
      nav5.classList.toggle('nav-burger');
    });
}());
  
  