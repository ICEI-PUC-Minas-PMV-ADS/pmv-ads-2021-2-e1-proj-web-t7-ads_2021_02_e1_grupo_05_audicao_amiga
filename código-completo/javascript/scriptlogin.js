const form = document.querySelector(".root > .form");
const inputsDiv = document.querySelector(".root > .form > .inputs");

const InputComponent = (labelParam, inputPlaceHolder, inputType, span) => {
  return inputsDiv.innerHTML += `
    <div class="input email-input">
        <p>
          ${labelParam}
        </p>
        <input
          id="${labelParam}"
          placeholder="${inputPlaceHolder}" 
          type="${inputType}"
        />
        <span>${span}</span>
      </div>
        `
}

InputComponent("", "Digite seu E-Mail ou Celular", "", "")
InputComponent("", "Digite sua Senha", "password", "")
