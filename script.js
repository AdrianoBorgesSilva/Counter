const acrescentar = document.getElementById('acrescentar')
const diminuir = document.getElementById('diminuir')
const resetar = document.getElementById('resetar')
const contador = document.getElementById('contador')

let num = 0

contador.innerHTML = num

acrescentar.addEventListener('click', ()=>{
    num++
    contador.innerHTML = num
})


diminuir.addEventListener('click', ()=>{
    if (num == 0){
        alert('Mínimo até 0')
    }else {
        num--
        contador.innerHTML = num
    }
})

resetar.addEventListener('click', ()=>{
    num = 0
    contador.innerHTML = num
})
