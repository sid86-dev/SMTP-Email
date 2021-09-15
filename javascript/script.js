function sendmail() {

    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    // var body = $('#body').val();

    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
    //console.log(name, phone, email, message);

    Email.send({
        Host: "smtp.gmail.com",
        Username: "sender's email address",
        Password: "sender's email password",
        To: "receiver's email address",
        From: "sender's email address",
        Subject: "New Enquiry from " + name,
        Body: Body
    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                console.log("done");
                var x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
                window.setTimeout(function() {
                    // Move to a new location or you can do something else
                    window.location.href = "index.html";
                }, 5000);

            } else {
                console.error(message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="index">Why do I have this issue?</a>'
                })

            }

        }
    );



}
