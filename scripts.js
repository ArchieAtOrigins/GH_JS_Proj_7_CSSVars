const inputs = document.querySelectorAll('.tools input');

function inputManager() {
	 console.log(this.value + " Oh Happy Days!");
	 inputs.value = this.value;
}

inputs.forEach(input => input.addEventListener('change', inputManager));
inputs.forEach(input => input.addEventListener('mousemove', inputManager));