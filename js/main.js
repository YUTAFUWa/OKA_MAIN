// 画像集サムネイル表示
const thumbs = document.querySelectorAll('.thumb');
  console.log(thumbs);
  thumbs.forEach(function(item,index){
    item.onclick = function(){
      document.getElementById('bigimg').src = this.dataset.image;
    }
  });


