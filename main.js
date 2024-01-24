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

let submit_button = document.querySelector("#submit-button") 

const request_budget = () => {
  
  let name_client = document.querySelector("#name-client").value
  let service_select = document.querySelector("#service-select").value
  let number_phone = "5531983531055"
  let checkbox_discard = document.querySelector("#discard")
  let checkbox_value = checkbox_discard.checked
  let message = encodeURIComponent(`Olá, meu nome é ${name_client}. Gostaria de solicitar um orçamento. \n*Serviço a ser realizado*: ${service_select} \n*Descarte dos resíduos*: ${checkbox_value === true? "Sim" : "Não"}`)

  console.log(checkbox_value)

  let url = `https://api.whatsapp.com/send?phone=${number_phone}&text=${message}`;

  console.log(name_client, service_select)

  window.open(url, "_blank")
}

submit_button.addEventListener("click", request_budget)
