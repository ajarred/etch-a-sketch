document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.classList.add('container');
    
    document.body.appendChild(container);
    
    createGrid(16); 
    
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Grid';
    resetButton.addEventListener('click', resetGrid);
    
    document.body.insertBefore(resetButton, container);
  });
  
  function createGrid(squaresPerSide) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; 
    
    const squareSize = 960 / squaresPerSide;
    
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`; 
    
    for (let i = 0; i < squaresPerSide; i++) {
      for (let j = 0; j < squaresPerSide; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
    
        square.addEventListener('mouseover', function() {
          square.style.backgroundColor = getRandomColor();
        });
    
        container.appendChild(square);
      }
    }
  }
  
  function resetGrid() {
    let squaresPerSide = prompt('Enter the number of squares per side (maximum 100):');
    squaresPerSide = parseInt(squaresPerSide);
    
    if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
      alert('Invalid input. Please enter a number between 1 and 100.');
      return;
    }
    
    createGrid(squaresPerSide);
  }
  

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  