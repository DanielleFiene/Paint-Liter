document.getElementById('addWallButton').addEventListener('click', function() {
    const wallsContainer = document.getElementById('wallsContainer');
    const wallCount = wallsContainer.children.length + 1;

    // Limit to 4 walls
    if (wallCount > 4) {
        alert('You can only add up to 4 walls.');
        return;
    }

    const newWall = document.createElement('div');
    newWall.className = 'wall-input';
    newWall.innerHTML = `
        <label>Wall ${wallCount} Width (m): <input type="number" step="0.1" name="width" required></label>
        <label>Height (m): <input type="number" step="0.1" name="height" required></label>
    `;
    wallsContainer.appendChild(newWall);

    // Enable remove button
    document.getElementById('removeWallButton').disabled = false;
});

document.getElementById('removeWallButton').addEventListener('click', function() {
    const wallsContainer = document.getElementById('wallsContainer');
    const wallCount = wallsContainer.children.length;

    // Limit to at least 1 wall
    if (wallCount <= 1) {
        alert('You must have at least one wall.');
        return;
    }

    wallsContainer.removeChild(wallsContainer.lastChild);

    // Disable remove button if only 1 wall is left
    if (wallsContainer.children.length <= 1) {
        document.getElementById('removeWallButton').disabled = true;
    }
});

document.getElementById('paintForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const walls = [];
    const wallInputs = document.querySelectorAll('.wall-input');
    wallInputs.forEach(wallInput => {
        const width = parseFloat(wallInput.querySelector('input[name="width"]').value);
        const height = parseFloat(wallInput.querySelector('input[name="height"]').value);
        walls.push({ width, height });
    });

    const paintType = document.querySelector('input[name="paintType"]:checked').value;
    const litersNeeded = calcPaintAmount(walls, paintType);
    document.getElementById('result').textContent = `Number of liters ${paintType} needed: ${litersNeeded.toFixed(2)}`;
});

document.getElementById('resetButton').addEventListener('click', function() {
    const wallsContainer = document.getElementById('wallsContainer');

    // Clear all wall inputs
    while (wallsContainer.children.length > 1) {
        wallsContainer.removeChild(wallsContainer.lastChild);
    }

    // Clear the results and form
    document.getElementById('result').textContent = '';
    document.getElementById('paintForm').reset();

    // Disable remove button and reset wall count
    document.getElementById('removeWallButton').disabled = true;
    document.querySelector('input[name="paintType"][value="wall"]').checked = true;
});

function calcSquareMeters(walls) {
    let squareMeters = 0;
    walls.forEach(wall => {
        squareMeters += wall.width * wall.height;
    });
    return squareMeters;
}

function calcPaintAmount(walls, paintType) {
    const squareMeters = calcSquareMeters(walls);
    if (paintType === 'wall-paint') {
        return squareMeters / 7; // Assuming 1 liter covers 7 square meters
    } else if (paintType === 'primer') {
        return squareMeters / 11; // Assuming 1 liter covers 11 square meters
    }
}
