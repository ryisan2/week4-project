const scaleFactor =1/20; //this is the scale factor for the movement of the shapes

function moveBg(event) {
  const shapes = document.querySelectorAll(".shape")
  const x = event.clientX * scaleFactor; 
  const y = event.clientY * scaleFactor;
  
  for ( let i = 0; i < shapes.length; i++) { //we loop through the shapes and apply the transform property to each shape
  const isOdd = i % 2 !== 0;
  const boolInt= isOdd ? 1 : -1; //we check if the index is odd or even and apply the oddInt to the transform property
  shapes[i].style.transform = `translate(${x * boolInt}px, ${y*boolInt}px)` //we apply the transform property to the shape
  console.log(x, y)
  }
}





let contrastToggle=false

function toggleBg() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList.add("dark-mode");
  }
  else {
    document.body.classList.remove("dark-mode");
  }
}
 


function contact(event) {
  event.preventDefault()
  const loading = document.querySelector(".modal__overlay-loading")
  const success = document.querySelector(".modal__overlay-success")
  const form = document.getElementById("contact__form")

  const contactHeader = document.querySelector(".contact__header")
  const contactSubHeader = document.querySelector(".contact__sub")

  form.style.display = "none"
  contactHeader.style.display = "none"
  contactSubHeader.style.display = "none"

  loading.classList += " modal__overlay-visible" //we created this class to show the elements
  emailjs
    .sendForm("service_nqzn54c", "template_jn7jfdq", event.target, "LwKeSJJC1tZeCru0b")
    .then(() => {
      loading.classList.remove("modal__overlay-visible") //we removed the class after 2 seconds to show the success screen
      success.classList += " modal__overlay-visible" //we added the success screen class to the classlist to show the success screen
    })
    .catch(() => {
      loading.classList.remove("modal__overlay-visible") //we removed the loading state to show error
      form.style.display = "flex"
      contactHeader.style.display = "block"
      contactSubHeader.style.display = "block"
      alert("An error occurred, please try again later. Please contact me directly at Ryisan@suprasia.xyz ")
    })
}

// now let's create a function to toggle the modals on and off

let isModalOpen = false;

function toggleModal() {
  isModalOpen = !isModalOpen; // Toggle the modal state
  
  if (isModalOpen) {
    document.body.classList.add("modal__open");
    console.log("modal open");
  } else {
    document.body.classList.remove("modal__open");
  }
}

