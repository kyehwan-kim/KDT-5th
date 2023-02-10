let isAdult = true;
let vip = true;
let isDrunken = false;
let money = true;

//이건 내답
if (isAdult || "vip") {
  console.log("통과");
} else {
  console.log("돌아가");
}

if (isAdult && "vip" === isDrunken) {
  console.log("통과");
} else {
  console.log("돌아가");
}

if ((!isAdult && !"vip" && isDrunken) || money) {
  console.log("통과");
} else {
  console.log("돌아가");
}

//이건 강사님
const 김계환 = {
  성인인가: true,
  VIP: false,
  취했는가: true,
  돈: false,
};

if (((김계환.성인인가 || 김계환.VIP) && 김계환.취했는가) || 김계환.돈) {
  console.log("통과");
} else {
  console.log("돌아가");
}
