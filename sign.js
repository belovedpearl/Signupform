function signUp(e) {
    //const signUp = e => {
    let formValue = {
        firstN : document.getElementById('fname').value,
        lastN : document.getElementById('lname').value,
        email : document.getElementById('email').value,
        pass : document.getElementById('pwd').value,
    }
    localStorage.setItem('formValue', JSON.stringify(formValue));
    disValue();
  
    e.preventDefault();
}

function disValue(){
  const {firstN, lastN, email, pass} = JSON.parse(localStorage.getItem('formValue'))
  let saved = document.getElementById('saved');
  saved.innerHTML = `
  <table>
  <tr>
  <td>First Name</td>
  <td>${firstN}</td>
  </tr>

  <tr>
  <td>Last Name</td>
  <td>${lastN}</td>
  </tr>

  <tr>
  <td>Email</td>
  <td>${email}</td>
  </tr>

  <tr>
  <td>Password</td>
  <td>${pass}</td>
  </tr>
  </table`
}