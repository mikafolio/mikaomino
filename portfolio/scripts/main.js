const navTrigger = document.querySelector('.nav-trigger');
const header = document.querySelector('.header');
const topBtn = document.querySelector('.top-btn')

const cb = function(entries, observer) {
    entries.forEach(entry => {
    if(entry.isIntersecting) {
        header.classList.remove('triggered');
        topBtn.classList.remove('popup');
    } else {
        header.classList.add('triggered');
        topBtn.classList.add('popup');
    }
    });
}

const io = new IntersectionObserver(cb);
// 初期化。navTriggerが画面内に入ったか、出たかをIntersectionObserverの監視によってcbが毎度呼び出される
io.observe(navTrigger);
// ioは複数要素を登録することができる
// その条件をforEachで記述する


$(function(){
    $('.top-btn').click(function() {
        $('html, body').scrollTop(0);
      })


$('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    }, 500);
  });

});