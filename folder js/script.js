
window.onload= () =>{
  const number = document.querySelector("#number");
  const btns = document.querySelectorAll("button");

  let counter = 0;
btns.forEach((button) =>{
  button.addEventListener("click", (e) => {
    const elements = e.currentTarget.classList;

    if(elements.contains("increase")) {
      counter++;
    } else if(elements.contains("decrease") && (counter !=0)) {
      counter--;
    }else {
      counter = 0;
    }
    number.textContent = counter;
  });
});
}
