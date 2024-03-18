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
  let number_phone = "5531992108925"
  let checkbox_discard = document.querySelector("#discard")
  let checkbox_value = checkbox_discard.checked
  let message = encodeURIComponent(`Olá, meu nome é ${name_client}. Gostaria de solicitar um orçamento. \n*Serviço a ser realizado*: ${service_select} \n*Descarte dos resíduos*: ${checkbox_value === true? "Sim" : "Não"}`)

  console.log(checkbox_value)

  let url = `https://api.whatsapp.com/send?phone=${number_phone}&text=${message}`;

  console.log(name_client, service_select)

  window.open(url, "_blank")
}

submit_button.addEventListener("click", request_budget)

const carouselContainer = document.querySelector(".carousel-container")
const carouselControlsContainer = document.querySelector(".carousel-controls")
const carouselControls = ['previous', 'next']
const carouselItems = document.querySelectorAll(".carousel-item")

class Carousel {
  constructor(container, items, controls){
    this.carouselContainer = container
    this.carouselControls = controls
    this.carouselArray = [...items]
  }

  updateCarousel(){
    this.carouselArray.map((el) => {
      el.classList.remove("carousel-item-1")
      el.classList.remove("carousel-item-2")
      el.classList.remove("carousel-item-3")
      el.classList.remove("carousel-item-4")
      el.classList.remove("carousel-item-5")
    })

    this.carouselArray.slice(0, 5).map((el, i) => {
      el.classList.add(`carousel-item-${i+1}`)
    })
  }

  setCurrentState(direction){
    if(direction.className == "carousel-controls-previous"){
      this.carouselArray.unshift(this.carouselArray.pop())
    } else {
      this.carouselArray.push(this.carouselArray.shift())
    }

    this.updateCarousel()
  }

  setControls() {
    this.carouselControls.map((control) =>{
      carouselControlsContainer.appendChild(document.createElement('button')).className=`carousel-controls-${control}`
      document.querySelector(`.carousel-controls-${control}`).innerText = ""
    })

    document.querySelector(".carousel-controls-previous").innerHTML = "<img src='img/chevron-down.svg' class='left'/>"
    document.querySelector(".carousel-controls-next").innerHTML = "<img src='img/chevron-down.svg' class='right'/>"
   
  }
   
  useControls(){
    const triggers = [...carouselControlsContainer.childNodes]
    triggers.map((control) => {
      control.addEventListener('click', e => {
        e.preventDefault()
        this.setCurrentState(control)
      })
    })
  }
}

const exampleCarousel = new Carousel(carouselContainer, carouselItems, carouselControls)

exampleCarousel.setControls()
exampleCarousel.useControls()