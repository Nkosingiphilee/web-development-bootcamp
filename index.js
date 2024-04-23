function handleFormSubmit(event) {
    event.preventDefault()
    const name_input = document.getElementById("name")
    const surname_input = document.getElementById("surname")
    const email_input = document.getElementById("email")
    const Subject_input = document.getElementById("Subject")
    const Message_input = document.getElementById("Message")

    const isEmailValid = email_input.value.trim() !== '' && email_input.validity.valid
    let isMessageValid = Message_input.value.trim() !== '';

    const isFormValid = isEmailValid && isMessageValid

    if (isFormValid) {
        const formData = new FormData(event.target)
        console.log(formData);
        fetch('https://formspree.io/f/mayraako',
            {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Email successfully sent')
                }
            })


    }
    else {

        if (isEmailValid !== true) {
            const emailSpan = document.getElementById('email-span')
            emailSpan.classList.remove('hidden')
        }
        if (isMessageValid !== true) {
            const messageSpan = document.getElementById('message-span')
            messageSpan.classList.remove('hidden')
        }
    }
}