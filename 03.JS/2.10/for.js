//FOR 문
//for(초기화식; 조건식; 증감식)

for (let index = 0; index < 10; index += 1) {
  console.log(`인사를 ${index + 1}번째 드립니다!🙌🏻`);
}

//2중 FOR 문
for (let i = 0; i < 5; i += 1) {
  console.log(`상위 for 문 입니다. ${i + 1} 번째 작동 중`);
  for (let j = 0; j < 9; j += 1) {
    console.log(`   하위 for 문 입니다. i는 ${i} j는 ${j} 입니다.`);
  }
}
