let blockEl = document.querySelector('#block')
let verticalPosition = document.querySelector('#position-y')
let horizontalPosition = document.querySelector('#position-x')
let blockSize = document.querySelector('#size')
let shapeSelector = document.querySelector('#shape-select')
let okBtn = document.querySelector('#ok-btn')
let rgbaR = document.querySelector('#rgba-r')
let rgbaG = document.querySelector('#rgba-g')
let rgbaB = document.querySelector('#rgba-b')
let rgbaA = document.querySelector('#rgba-a')
let rgbaContainer = document.querySelector('.rgba-container')
let rgbaInputs = rgbaContainer.querySelectorAll('input')

// Trocador de Posição Vertical
verticalPosition.addEventListener('change', function() { // Ao mudar o valor ativa a função
    blockEl.style.top = verticalPosition.value + 'px'; // Muda no CSS o valor do top
})

// Trocador de Posição Horizontal
horizontalPosition.addEventListener('change', function() {
    blockEl.style.left = horizontalPosition.value + 'px' // Muda no CSS o valor do left
})

// Trocar tamanho
blockSize.addEventListener('change', function(){
    blockEl.style.transform = "scale(" + blockSize.value + ")" // Muda no CSS o valor do scale
})

// Trocar Formato
okBtn.addEventListener('click', function() { // Dependendo de onde esta sendo selecionado vai mudar o formato baseado no value
    let shapeOption = shapeSelector.value;
    if(shapeOption === '1') {  
        blockEl.style.borderRadius = '0'
    } else if(shapeOption === '2') {
        blockEl.style.borderRadius = '50%'
    }
})

// Trocar Cor de Fundo
for (let i = 0; i < rgbaInputs.length; i++) {
    rgbaInputs[i].addEventListener('change', function() { // O FOR vai ser responsavel por ficar mudando as posições em cada letra do RGBA diretamente no CSS
        blockEl.style.backgroundColor =
        'rgba('+
        rgbaR.value +
        ','+
        rgbaG.value +
        ','+
        rgbaB.value +
        ','+
        rgbaA.value +
        ')';
        
    })
}