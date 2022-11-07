const ul = document.querySelector(".input-list");
const addButton = document.querySelector(".addButton");
const sortIcon = document.querySelector(".icon");

addButton.addEventListener("click", function (e) {
  const li = document.createElement("li");
  ul.insertAdjacentElement("afterbegin", li);

  li.innerHTML += `<input class="search" type="text" />
    <span class="remove"><i class="fa fa-thin fa-circle-xmark"></i></span>`;
  Delete();
});
function Delete() {
  let spanAll = document.querySelectorAll(".remove");
  spanAll.forEach(function (item, index) {
    item.addEventListener("click", function (a) {
      console.log(item);
      if (index > 0) {
        item.parentElement.remove();
      }
    });
  });
}
Delete();
let reverse1 = true;
sortIcon.addEventListener("click", function () {
  let inputAll = document.querySelectorAll("input");
  let values = [];
  inputAll.forEach(function (element, index) {
    values.push(element.value);
    values.sort();
  });
  if (reverse1 == true) {
    reverse1 = false;
    values.reverse();
    sortIcon.classList.add("active");
  } else if (reverse1 == false) {
    reverse1 = true;
    console.log("hello");
    sortIcon.classList.remove("active");
  }
  console.log(values);
  values.forEach(function (element2, index2) {
    inputAll[index2].value = element2;
  });
});
