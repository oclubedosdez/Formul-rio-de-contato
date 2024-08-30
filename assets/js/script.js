const sections = document.querySelectorAll("#seleciona_tipo section");
var error_primeiro_nome = document.getElementById('error-primeiro-nome');

var error_segundo_nome = document.getElementById('error-segundo-nome');


sections.forEach(section => {
    const radioInput = section.querySelector("input[type='radio']");

    radioInput.onchange = function() {
        sections.forEach(outraSection => {
            outraSection.style.backgroundColor = "";
        });

        if(radioInput.checked) {
            section.style.backgroundColor = 'hsl(148, 38%, 91%)';
            radioInput.style.accentColor = 'hsl(169, 82%, 27%)';
        }
    };

});

//VALIDAÇÃO DE FORMULARIO
document.getElementById("Formulario").onsubmit = function(event) {
    event.preventDefault(); //inpete o envio autómatico do formulario para que possamos validar

    //Vailadar nome
    const firstNameInput = document.getElementById('Primeiro_nome');
    const lastNameInput = document.getElementById('Segundo_nome');
    const emailInput = document.getElementById('email');
    const error_email = document.getElementById('error-email');

    let isValid = true;

    //Validação do Primeiro Nome
    if(firstNameInput.value.trim() === '') {
        firstNameInput.classList.add('invalid');
        error_primeiro_nome.style.display = 'block';
        isValid = false;
    } else {
        firstNameInput.classList.remove('invalid');
        error_primeiro_nome.style.display = 'none';
    }

    //Validação do Segundo Nome
    if (lastNameInput.value.trim() === '') {
        lastNameInput.classList.add('invalid');
        error_segundo_nome.style.display = 'block';
        isValid = false;
    } else {
        lastNameInput.classList.remove('invalid');
        error_segundo_nome.style.display = 'none';
    }

    //VALIDAR O EMAIL
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailInput.value.trim() == '' || emailPattern.test(emailInput.value)) {
        emailInput.classList.add('invalid');
        error_email.style.display = 'block';
        isValid = false;
    } else {
        emailInput.classList.remove('invalid');
        document.getElementById('error-email').style.display = 'none';
    }
   

    if(isValid) {
        this.onsubmit(); // Se todos os campos forem válido, envia o formulário
    }
}
  
