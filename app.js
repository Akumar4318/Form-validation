var nameError = document.querySelector(".namerror");
var PhoneEror = document.querySelector(".Phone-error");
var EmailError = document.querySelector(".email-error");
var MessageError = document.querySelector(".message-error");
var SubmitError=document.querySelector("#submiterror")

function validation() {
  let name = document.querySelector("#nameContainer").value;
  

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "writr fullName";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validationPhone() {
  let Phone = document.querySelector("#PhoneContainer").value;

  if (Phone.length == 0) {
    PhoneEror.innerHTML = "Enter Phone no.";
    return false;
  }
  if (Phone.length > 10) {
    PhoneEror.innerHTML = "10 digits only";
  }

  if (Phone.length < 10) {
    PhoneEror.innerHTML = "Enter 10-digit Phone no.";
    return false;
  }
  if (!Phone.match(/^[0-9]{10}$/)) {
    PhoneEror.innerHTML = "Only digits";
    return false;
  }

  PhoneEror.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validationEmail() {
  let Email = document.querySelector("#Emailcontainer").value;
  console.log(Email);

  if (Email.length == 0) {
    EmailError.innerHTML = "Enter email";
    return false;
  }
  if (!Email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    EmailError.innerHTML = "not valid email";
    return false;
  }
  EmailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validationmessage() {
  let Message = document.querySelector("#Messagecontainer").value;

  let required = 30;

  let left = required - Message.length;
  if (left > 0) {
    MessageError.innerHTML = left + " add more charachter are reqired";
    return false;
  }

  MessageError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}


// let button=document.querySelector("#btn")
function validationform(){
    
   if(!validation() || !validationEmail() || !validationPhone() || !validationmessage()){
    SubmitError.style.cssText='display: block;';
    SubmitError.innerHTML="please fix error"
    setTimeout(() => {
        SubmitError.style.cssTex='diplay: none; background-color:white';
    }, 2000);
    return false
   }
}

// button.addEventListener('click',validateform())
