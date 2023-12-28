const question = Array.from(document.querySelectorAll(".question"));
const question_content = Array.from(
  document.querySelectorAll(".question-content")
);
const answer = Array.from(document.querySelectorAll(".answer"));
const chevron = Array.from(document.querySelectorAll(".down"));

question.map((item) => {
  item.addEventListener("click", () => {
    console.log(item.children);

    let div_content = item.children[0];
    let div_answer = item.children[1];

    let img_child = div_content.children[1];

    if (
      img_child.classList.contains("active") === false &&
      div_answer.classList.contains("active") === false
    ) {
      img_child.classList.add("active");
      div_answer.classList.add("active");
    } else {
      img_child.classList.remove("active");
      div_answer.classList.remove("active");
    }
  });
});
