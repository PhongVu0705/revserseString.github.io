"use strict";

//**KHAI BÁO BIẾN TOÀN CỤC

//**VÙNG XỬ LÝ CÁC SỰ KIỆN
const onPageLoading = function () {
  console.log(`The website is running`);
};
//Hàm xử lý sự kiện ấn nút
const onBtnCheckClick = function () {
  console.log(`Button Pressed`);
  const inputString = document.getElementById("inp-string");
  const inputArray = inputString.value.split("");
  const resultArray = [];

  for (let i = inputArray.length - 1; i >= 0; i--) {
    resultArray.push(inputArray[i]);
  }

  const resultString = resultArray.join("");
  const resultDisplay = document.getElementById("result-placeholder");
  resultDisplay.innerHTML = resultString;
  resultDisplay.style = "display:block";
};
//**VÙNG HÀM DÙNG CHUNG
