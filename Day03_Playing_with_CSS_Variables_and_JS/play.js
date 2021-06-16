const inputs = document.querySelectorAll('.controls input')
const currvalue = document.querySelector('.current_value')
function handelUpdate(){
    console.log(this.name)
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix)
    currvalue.innerHTML = `<p> ${this.value} ${suffix} </p>`
}

inputs.forEach(input => input.addEventListener('change', handelUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handelUpdate))
