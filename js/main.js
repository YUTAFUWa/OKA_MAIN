
// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const menuItems = document.querySelector('.menu-items');

  hamburger.addEventListener('click', function() {
    menuItems.classList.toggle('menu-items');
  });
});


// 画像集サムネイル表示
const thumbs = document.querySelectorAll('.thumb');
  console.log(thumbs);
  thumbs.forEach(function(item,index){
    item.onclick = function(){
      document.getElementById('bigimg').src = this.dataset.image;
    }
  });
