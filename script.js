let btnEnvoyerFormulaire = document.querySelector(".send_info");
console.log(btnEnvoyerFormulaire);

btnEnvoyerFormulaire.addEventListener("click", () => {
    localStorage.setItem("q7_nomDonne", document.querySelector('#input_7').value);

    console.log(document.querySelector('#input_7').value);
});