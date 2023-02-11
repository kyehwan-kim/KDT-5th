//SWITCH

let gender = "M";

switch (gender) {
  case "F":
    console.log("여성 입니다");
    break;
  case "M":
    console.log("남성 입니다");
    break;
  default:
    console.log("외계인 입니다");
    break;
}

//SWITCH-2
const fingersOut = 1;

switch (fingersOut) {
  // 순서 상관없음
  case 2:
    console.log("가위");
    break;
  case 0:
    console.log("바위");
    break;
  case 5:
    console.log("보");
    break;
  default:
    console.log("무효");
}

const direction = "east";
let directionKor;

switch (direction) {
  case "north":
    directionKor = "북";
    break;
  case "south":
    directionKor = "남";
    break;
  case "east":
    directionKor = "동";
    break;
  case "west":
    directionKor = "서";
    break;
  default:
    directionKor = "무효";
}

console.log(directionKor);

let day;

switch (new Date().getDay()) {
  case 0:
    day = "일요일";
    break;
  case 1:
    day = "월요일";
    break;
  case 2:
    day = "화요일";
    break;
  case 3:
    day = "수요일";
    break;
  case 4:
    day = "목요일";
    break;
  case 5:
    day = "금요일";
    break;
  case 6:
    day = "토요일";
    break;
}

console.log(day);
