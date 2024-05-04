
        // 'service_nqzn54c', 
        // 'template_jn7jfdq', 
        // "LwKeSJJC1tZeCru0b"
  
        function contact (event) {
            event.preventDefault()
            emailjs.sendForm('service_nqzn54c', 'template_jn7jfdq', event.target, 'user_LwKeSJJC1tZeCru0b')
            console.log("it works.")
        }