
(function(){
  emailjs.init({
    publicKey: "dx25jX1s4DOG-p0Y9",
  });
})();

function sendMail(){
    var params =
    {
      from_name : document.getElementById("fullName").value,
      email_id : document.getElementById("email_id").value,
      phone_no :document.getElementById("number").value,
      my_address :document.getElementById("address").value,
      message : document.getElementById("message").value,
    }
    emailjs.send("service_ymrwujh","template_brskkeq",params).then(function(res) {
      alert("Successs!" + res.status);
    })
  }
  
  