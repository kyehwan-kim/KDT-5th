let listEl1 = document.querySelector(".orange");
console.log(listEl1);

let listEl2 = document.getElementById("skyblue");
console.log(listEl2);

let listEl3 = document.querySelector("ul>li:nth-child(2)");
listEl3.classList.add("orange");
console.log(listEl3);

if (listEl1.classList.contains("orange")) {
  listEl1.classList.romove("ornage");
}
console.log(listEl1);
