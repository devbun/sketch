
function boardShake(tiles) {
    //var tiles = document.getElementById('boardSize').value;
    var grid = document.getElementById('main');
    grid.innerHTML = ''
    for (let i = 0; i < tiles; i++) {
        const div = document.createElement('div');
        div.classList.add('square'); 
        div.setAttribute('id', 'gridPixel' + i)
        grid.appendChild(div)

        document.getElementById('gridPixel' + i).addEventListener("mouseover", function() {
            document.getElementById('gridPixel' + i).classList.toggle('active');
        });
    }
}

boardShake(1024)