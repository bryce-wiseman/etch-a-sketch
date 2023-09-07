let gridbox = document.querySelector('.gridbox')

let rainbow = document.querySelector('#rainbow');

rainbow.addEventListener('click', () => {
  rainbow.classList.toggle('active');
});


function createGrid(num) {
    let size = ((600/num) - 2) + "px"
    for (let i = 0; i < (num*num); i++) {
        let gridPiece = document.createElement('div')
        gridPiece.classList.add("gridPiece")
        gridPiece.style.width = size
        gridPiece.style.height = size
        gridPiece.setAttribute('id', 'grid' + i)
        gridbox.appendChild(gridPiece)
    }

    let arr = Array.from(document.querySelectorAll('.gridPiece'))
arr.forEach(piece => {
    piece.addEventListener('mouseenter', e => {
        piece.classList.add('current')
    })
})
arr.forEach(piece => {
    piece.addEventListener('mouseleave', e => {
        if (rainbow.classList.contains('active')) {
        let color1 = Math.floor(Math.random()*255)
        let color2 = Math.floor(Math.random()*255)
        let color3 = Math.floor(Math.random()*255)
        piece.style.backgroundColor = ('rgb(' + color1 + ', ' + color2 + ', ' + color3 + ')')
        } else {
            piece.classList.add('passed')
        }
    })
})
    
}

function removeGrid() {
        let gridParts = Array.from(document.querySelectorAll('.gridPiece'))
        gridParts.forEach(part => {
            part.remove()
            })
    }
    
createGrid(16);

let gridBtn = document.querySelector('#gridChoice')
    gridBtn.addEventListener('click', e => {
    let pixelPick = Number(prompt("Choose the number (2-99) of rows & columns of the pixel grid below. \n\n [e.g. '10' returns a 10x10 grid]"))
    removeGrid()
    createGrid(pixelPick);
})

let resetBtn = document.querySelector('#reset')
    resetBtn.addEventListener('click', e => {
    location.reload()
    })
