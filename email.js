//template_ee5xx8c
//service_83zvzs8
//LwKeSJJC1tZeCru0b

function contact (event) {
//   forms by default refresh the page we don't want that so we are going to use this function to prevent that
    event.preventDefault()  //This will prevent the page from refreshing
//     emailjs.sendForm('service_83zvzs8', 'template_ee5xx8c', event.target, 'user_LwKeSJJC1tZeCru0b').then(()=> {
//         console.log('Email sent successfully')
    
// }).catch(err => console.log(err))   //This will catch any errors that may occur

const loading = document.querySelector('modal__overlay-loading')
const success = document.querySelector('modal__overlay-success')
setTimeout(() => {
    console.log ('Message sent successfully')
}, 500);
}