document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    maketodo(e.target.tasks.value)
    
  })
});
function maketodo(todo){
  let p=document.createElement('p')
  p.textContent=`${todo}`
  let btn=document.createElement('button')
  btn.textContent='x'
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(pz)
}
