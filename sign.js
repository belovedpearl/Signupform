let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
let eMail = document.getElementById('email');
let pwd = document.getElementById('pwd');
let form = document.querySelector('form');


function signUp(e) {
  //declaring an array to store the form values
      let formValue = [];
      //add values to the array
     formValue.push({
        firstN : fName.value,
        lastN : lName.value,
        email : eMail.value,
        pass : pwd.value,
      })
      //save values to the local storage
    localStorage.setItem('formValue', JSON.stringify(formValue));
    disValue();
    //reset the form
    form.reset();
    //add the focus unto the first input
    fName.focus()
    e.preventDefault();
}


function disValue(){
  //console.log(localStorage.getItem('formValue'));
  //check if local storage has values before rnedering
  if (localStorage.getItem('formValue')){
  let saved = document.querySelector('tbody');
  //saved.innerHTML = '';
  JSON.parse(localStorage.getItem('formValue')).forEach(element => {
    //render onto a table in rows and colums
     saved.innerHTML +=  `<tr>
                      <td>${element.firstN}</td>
                      <td>${element.lastN}</td>
                      <td>${element.email}</td>
                      <td>${element.pass}</td>
                      </tr>`
  });
}
}
disValue()


