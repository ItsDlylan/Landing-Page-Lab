let notifyBtn = document.querySelector('#submitButton')
let emailForm = document.querySelector('#email')
document.querySelector('#email').addEventListener('keydown', (e) => {
	validation()
})

let validation = () => {
	var email = document.getElementById('email').value
	var pattern =
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

	if (email.match(pattern)) {
		notifyBtn.classList.remove('disabled')
		emailForm.classList.remove('is-invalid')
	} else {
		notifyBtn.classList.add('disabled')
		emailForm.classList.add('is-invalid')
	}
}
