


function boardShake(tiles) {

    tiles = tiles*30
    var grid = document.getElementById('main');
    grid.innerHTML = ''
    for (let i = 0; i < tiles; i++) {
        const div = document.createElement('div');
        div.classList.add('white'); 
        div.setAttribute('style', 'width: 16px; height: 16px')
        div.setAttribute('id', 'gridPixel' + i);
        boxID = 'gridPixel' + i;
        grid.appendChild(div)

        document.getElementById('gridPixel' + i).addEventListener("mouseover", colorChange);
    }
}

function colorChange() {
    const activeSquare = document.getElementById(this.id);
    const colorWheel = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'black']
    var index = colorWheel.indexOf(this.className)

    if (document.querySelector('input[id="drawBlack"]:checked') != null) {
    this.className = 'black';
    } else {
    this.className = colorWheel[index + 1];
    }
}

boardShake(30)