document.getElementById("notify-btn").addEventListener("click", function(){

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("notify-input").value)){
    document.getElementById("error-text").innerHTML = "";
    document.getElementById("notify-input").classList.remove("error-input");
  } else {
    document.getElementById("error-text").innerHTML = "Please enter a valid email.";
    document.getElementById("notify-input").classList.add("error-input");

  }


})
