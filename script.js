document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
  
  
    const rbs = document.querySelectorAll('input[name="flexRadioDefault"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    console.log(selectedValue);
                    break;
                }
            }
            // alert(selectedValue);
  

            const checkboxes = document.querySelectorAll(`input[name="flexCheckChecked"]:checked`);
            let values;
            for (const cb of checkboxes) {
                if (cb.checked) {
                  values = cb.value;
                  console.log(values);
                  break;
                }
           }
            // return values;
        

//   function myFunction() {
 let question1 = document.querySelector('input[name="flexRadioDefault"]:checked');
    let question2 = document.getElementById("dropdown").value;
    let question3 = document.querySelector('input[name="flexCheckChecked"]:checked');
    let email = document.forms["RegForm"]["floatingInput"];
     console.log(question2);
    console.log(question3);

  if (question1 === null) {
    alert("Please select an answer.");
    
 
  } else if (question2 === "" ) {
    alert("please select an answer.");
    
  
  } else if (question3 === null) {
    alert("please select an answer.");
  }


  if(email.value == "") {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if(email.value.indexOf("@", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if(email.value.indexOf(".", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  } 
  else {
    text = "submit";
  }
  document.getElementById("submit").innerHTML = text;


  
  return true;

  $("#submit") .click(function() {
    alert (success);

  });
// function ValidationForm() {
//     // let username = document.forms["RegForm"]["Name"];
//     let email = document.forms["RegForm"]["floatingInput"];

    
  
//     // if(username.value == "") {
//     //   alert("Please enter your name.");
//     //   username.focus();
//     //   return false;
//     // }
//     if(email.value == "") {
//       alert("Please enter a valid e-mail address.");
//       email.focus();
//       return false;
//     }
//     if(email.value.indexOf("@", 0) < 0) {
//       alert("Please enter a valid e-mail address.");
//       email.focus();
//       return false;
//     }
//     if(email.value.indexOf(".", 0) < 0) {
//       alert("Please enter a valid e-mail address.");
//       email.focus();
//       return false;
//     } 
//     else {
//              document.write("Answers has been submitted successfully");
//         }
  
    
//     return true;
//   }

    
  });