function getData() {
    // DOM = document object model
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    // console.log(name, email);
    if (!name) {
        // alert("nama jangan kosong");
    }

    let emailReceiver = "supri@mail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name}, ${message}, this my phone number ${phone}`
    a.click()
}


let btn = document.getElementById("btn-alert")
btn.click()

function showAlert() {
    alert("hi hello")
}