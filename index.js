const button = document.querySelector('button')
const output = document.querySelector('.output')

button.addEventListener('click', function(){
  output.innerHTML = `<p class="click-text">У тебя точно все получится, главное не сдавайся😎</p>`
})