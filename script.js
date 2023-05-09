document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.classList.add('container');
  
    document.body.appendChild(container);
  
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        square.addEventListener('mouseover', function() {
          square.style.backgroundColor = getRandomColor();
        });
        
        container.appendChild(square);
      }
    }
  });
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  