const swiper = new Swiper(".swiper", {
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});






















// let img = document.querySelectorAll('.img');
// const nextBtn = document.querySelectorAll('.next');
// const backBtn = document.querySelectorAll('.back');

// //今表示している画像
// let currentIndex = 0;

// nextBtn.onclick = () => {
//   //次に表示するliの番号
//   let nextIndex;
//   // let nextIndex = ( currentIndex + 1 ) % ( img.length - 1 );
  
//   if( currentIndex < img.length - 1 ){
//     //次に表示するliの番号
//     nextIndex = currentIndex + 1;
//   }else{
//     //最後のliが表示されているとき
//     nextIndex = 0;
//   }
  
  
//   //今表示しているliは非表示に
//   img[ currentIndex ].style.display = 'none';
//   //次に表示したいliは表示に
//   img[ nextIndex ].style.display = 'block';
  
//   //現在表示している画像が変わったので更新
//   currentIndex = nextIndex;
// }

// backBtn.onclick = () => {
//   let prevIndex;

//   if( currentIndex > 0 ){
//     //次に表示するliの番号
//     prevIndex = currentIndex - 1;
//   }else{
//     //最初のliが表示されているとき
//     prevIndex = 2;
//   }

//   img[ currentIndex ].style.display = 'none';
//   img[ prevIndex ].style.display = 'block';

//   currentIndex = prevIndex;

//   console.log( prevIndex );

// }









// // const swiper = new Swiper(".swiper", {});




// // let img = document.getElementsByTagName('img');
// // const next = document.querySelector('.next')
// // const back = document.querySelector('.back')

// // console.log(img);

// // let nowImg = 0;
// // next.onclick = () => {
// //   let nextImg;

// //   if( nowImg < img.length - 1 ){
// //     nextImg = nowImg + 1;
// //   }else{
// //     nextImg = 0;
// //   }
// // }