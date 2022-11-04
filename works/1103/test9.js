'use strict';

//오늘 날짜를 전역변수로 생성...
const today = new Date();
const year = today.getFullYear(); // 연도 4자리 
const month = today.getMonth() + 1; //월(기존월보다 1자리 작다.)
const date = today.getDate(); //일
const hour = today.getHours(); //시
const minute = today.getMinutes(); // 분
const second = today.getSeconds(); //초
const yymmdd = year + "-" + month + "-" + date + " " +hour +":" + minute +":" + second;

// 표준날짜 출력 함수
function fCheck1(){
  let date1 = new Date();
  document.getElementById("demo").innenrHTML = date1;
}

//편집날짜 함수
function fCheck2() {
  let strDate = yymmdd;
  demo.innerHTML = strDate;
}

//쉬운날짜 함수
function fCheck3() {
  let str = "";
  str += year +"년 ";
  str += month +"월 ";
  str += date +"일 ";
  //요일 : 0(일), 1(월), 2(화) ,3(수) , 4(목) , 5(금) ,6(토)
  // str += today.getDay() + "요일"; //요일 : getDay()
  let week = ["일","월","화","수","목","금","토","일"];
  str += week[today.getDay()]+"요일 ";
  str += hour + "시";
  str += minute + "분";
  str += second + "초";
  let strDate = str;
  demo.innerHTML = strDate;

}
//시간출력 함수
function fCheck4() {
  // let strDate = today.getTime();
  let startDate = today.getTime();
  let lastDate = new Date();
  let elaplsedTime = lastDate.getTime() - startDate.getTime();
}
//해당월마지말일자 꺼내기 함수
function fCheck5() {
  let selectyear = document.getElementById("year").value;
  let selectmonth = document.getElementById("month").value;
  let strDate = new Date(selectyear,selectmonth,0); //new Date(년,월,일,시,분,초) 
  strDate = "해당월의 마지막일자는? "+selectyear+"-"+selectmonth +"-"+ strDate.getDate();
  demo.innerHTML = strDate;
}

//해당월마지말일자 쉬운날짜로 꺼내기 함수
function fCheck6() {
  let selectyear = document.getElementById("year").value;
  let selectmonth = document.getElementById("month").value;
  if(selectmonth.length==1){
    selectmonth = "0"+selectmonth;
  }

  let strDate = new Date(selectyear,selectmonth,0); //new Date(년,월,일,시,분,초) 
  let lastdate=strDate.getDate()
  if (strDate.getDate.length==1){
    lastdate  = "0" +lastdate;
  }
  strDate = "해당월의 마지막일자는? "+selectyear+"-"+selectmonth +"-"+ lastdate;
  demo.innerHTML = strDate;
}

//오늘날짜(yyyy-mm-dd) 함수
function fCheck7() {
  let newmonth=month+"";
  let newdate=date+"";
  if (newmonth.length==1){
    newmonth = "0"+newmonth;
  }
  if (newdate.length==1){
    newdate = "0"+newdate;
  }
  let str = "";
  str += year +"-";
  str += newmonth +"-";
  str += newdate;
  //요일 : 0(일), 1(월), 2(화) ,3(수) , 4(목) , 5(금) ,6(토)
  // str += today.getDay() + "요일"; //요일 : getDay()
  demo.innerHTML = str;

}