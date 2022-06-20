
var isText = (str) => {
  var regex = /^[a-zA-Z]+$/;
  return regex.test(str);
}

var isTextSpacc = (str) => {
  var regex = /^[a-zA-Z\s]*$/;
  return regex.test(str);
}

var isEmail = (email) => {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function validation() {
  var valid = true;

  /**
   * Amount
   */
  var amount = document.getElementById("amount").value;
  var amountError = document.getElementById("amount-error");

  if (!amount) {
    amountError.innerHTML = "Require";
    valid = false;
  } else if (isNaN(amount)) {
    amountError.innerHTML = "Please Input a valid Number";
    valid = false;
  } else {
    amountError.innerHTML = "";
  }


  /**
   * buyer
   **/ 
   var buyer = document.getElementById("buyer").value;
   var buyerError = document.getElementById("buyer-error");
  
    if(!buyer) {
      buyerError.innerHTML = "Require";
      valid = false;
    } else if(buyer.length > 20) {
      buyerError.innerHTML = "Not more than 20 characters";
      valid = false;
    } else {
      buyerError.innerHTML = "";
    }


  /**
   * receipt_id
   **/ 
   var receipt_id = document.getElementById("receipt_id").value;
   var receipt_idError = document.getElementById("receipt_id-error");
 

    if(!receipt_id) {
      receipt_idError.innerHTML = "Require";
      valid = false;
    } else if(!isText(receipt_id)) {
      receipt_idError.innerHTML = "Only Text Require No Digit";
      valid = false;
    } else {
      receipt_idError.innerHTML = "";
    }
      

    /**
   * items
   **/ 
   var items = document.getElementById("items").value;
   var itemsError = document.getElementById("items-error");
   

    if(!items) {
      itemsError.innerHTML = "Require";
      valid = false;
    } else if(!isText(items)) {
      itemsError.innerHTML = "Only Text Require No Digit";
      valid = false;
    } else {
      itemsError.innerHTML = "";
    }

    /**
   * email
   **/ 
   var email = document.getElementById("email").value;
   var emailError = document.getElementById("email-error");

    if(!email) {
      emailError.innerHTML = "Require";
      valid = false;
    } else if(!isEmail(email)) {
      emailError.innerHTML = "Enter Correct Email Address";
      valid = false;
    } else {
      emailError.innerHTML = "";
    }
    
  
    /**
   * note
   **/ 
   var note = document.getElementById("note").value;
   var noteError = document.getElementById("note-error");
  
    if(!note) {
      noteError.innerHTML = "Require";
      valid = false;
    } else if(note.length > 30) {
      noteError.innerHTML = "Not more than 30 wordss";
      valid = false;
    } else {
      noteError.innerHTML = "";
    }
    
  
    /**
   * city
   **/ 
   var city = document.getElementById("city").value;
   var cityError = document.getElementById("city-error");
   

    if(!city) {
      cityError.innerHTML = "Require";
      valid = false;
    } else if (!isTextSpacc(city)) {
      cityError.innerHTML = "Only Letter and Spach";
      valid = false;
    } else {
      cityError.innerHTML = "";
    }
    
  
    /**
   * city
   **/ 
   var phone = document.getElementById("phone").value;
   var phoneError = document.getElementById("phone-error");

    if(!phone) {
      phoneError.innerHTML = "Require";
      valid = false;
    } else if(isNaN(phone)) {
      phoneError.innerHTML = "Only numbers";
      valid = false;
    } else if (phone.length > 11) {
      phoneError.innerHTML = "Number will be not grether than 11";
      valid = false;
    } else {
      phoneError.innerHTML = "";
    }
  
    /**
   * city
   **/ 
   var entry_by = document.getElementById("entry_by").value;
   var entry_byError = document.getElementById("entry_by-error");

    if(!entry_by) {
      entry_byError.innerHTML = "Require";
      valid = false;
    } else if(isNaN(entry_by)) {
      entry_byError.innerHTML = "Only numbers";
      valid = false;
    } else {
      entry_byError.innerHTML = "";
    }
        

  return valid;

  
  
}


(function($){
  $(document).ready(function() {
    $("#submitBtn").on("click", function(e){
      e.preventDefault();
      var valid = validation();

      if(valid) {
        console.log('Hello');
      }
    })
  })
})(jQuery);