const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const numero = document.getElementById('numero');
const descripcion = document.getElementById('descripcion');

function mostrarError(input, message) {
  const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function mostrarOk(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email is valid
function verificarMail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
      mostrarOk(input)
    }else {
      mostrarError(input,'El email no es válido');
    }
  }
  
  
function esRequerido(inputArr) {
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){
      mostrarError(input,`${getCampo(input)} es obligatorio`)
        }else {
          mostrarOk(input);
        }
      });
    }
    
    
    function verifacarLongitud(input, min ,max) {
      if(input.value.length < min) {
        mostrarError(input, `${getCampo(input)} debe tener al menos ${min} caracteres`);
      }else if(input.value.length > max) {
        mostrarError(input, `${getCampo(input)} debe tener al menos ${max} caracteres`);
      }else {
        mostrarOk(input);
      }
    }
    

  function getCampo(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }
  

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    esRequerido([nombre, apellido, email, numero]);
    verifacarLongitud(nombre,3,15);
    verifacarLongitud(apellido,3,15);
    verifacarLongitud(numero,8,13);
    verificarMail(email);
    
    // callAPI("Buenos Aires", "Argentina");
  });

//   function callAPI(city, country){
//     const apiId = '41d1d7f5c2475b3a16167b30bc4f265c';
//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

//     fetch(url)
//         .then(data => {
//             return data.json();
//         })
//         .then(dataJSON => {
//             if (dataJSON.cod === '404') {
//                 showError('Ciudad no encontrada...');
//             } else {
//                 clearHTML();
//                 showWeather(dataJSON);
//             }
//             console.log(dataJSON);
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }