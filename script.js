function GetTimeDate(){
  var today = new Date();
  var hour = FillZero(today.getHours());
  var minute = FillZero(today.getMinutes());
  var second = FillZero(today.getSeconds());
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();
  document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;
  document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일";
}//시간, 날짜 불러오기 및 H1 지정
function FillZero(number){
  if(parseInt(number)<10){
    return "0" + number;
  }else{
    return number;
  }
}//만약 시간, 분, 초 값이 10보다 작다면 앞에 0 붙혀서 자연스럽게 표시하기
function Print(){
  GetTimeDate();
  setInterval(GetTimeDate,100);
}//시간과 날짜 지정 함수를 지정된 간격마다 실행하기

function ChangeBackgroundImage(){
  var i = randomNum(1, 4);
  if (i = 1){
    document.body.style.backgroundImage = "url('aurora-1197753_1920 (1).jpg')";
  }else if (i = 2){
    document.body.style.backgroundImage = "url('iceland-2111811_1920 (1).jpg')";
  }else{
    document.body.style.backgroundImage = "url('northern-lights-6862969_1920.jpg')";
  }
}//랜덤으로 배경 이미지 지정하기
function randomNum(min, max){
  var randNum = Math.floor(Math.random()*(max-min+1)) + min; 
  return randNum; 
}//랜덤 수 반환 함수

Print();
ChangeBackgroundImage();
