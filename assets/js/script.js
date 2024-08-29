const sections = document.querySelectorAll("#seleciona_tipo section");


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

