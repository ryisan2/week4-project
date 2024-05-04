
function contact (event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay-loading')
    const success = document.querySelector('.modal__overlay-success')
    loading.classList += ' modal__overlay-visible' //we created this class to show the
            emailjs.sendForm('service_nqzn54c', 'template_jn7jfdq', event.target, 'LwKeSJJC1tZeCru0b'
        ).then(() => {
                loading.classList.remove('modal__overlay-visible') //we removed the class after 2 seconds to show the success screen
                success.classList += ' modal__overlay-visible' //we added the success screen class to the classlist to show the success screen
            }).catch(() => {
                loading.classList.remove('modal__overlay-visible') //we removed the loading state to show error
                alert('An error occurred, please try again later. Please contact me directly at Ryisan@suprasia.xyz '
            );
        })
}


// now let's crete a function to tggle the modals on and off

function toggleModal () {
   
    //toggleModal function to show and hide the modal
    console.log('clicked')
}