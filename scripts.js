const inputs = document.getQuerySelectorAll('#tools input');

function inputManager() {
	document.documentElement.style.setProperty(`--color`)
}

inputs.addEventListener('change', inputManager);
inputs.addEventListener('mousemove', inputManager);