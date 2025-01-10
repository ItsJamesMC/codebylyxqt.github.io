window.addEventListener('load', function() {
  let messageBox = document.querySelector('.message-box');
  let container = document.querySelector('.container');

  function preventScroll() {
    if (messageBox.scrollHeight <= messageBox.clientHeight) {
      container.style.overflow = 'hidden'; 
    } else {
      container.style.overflow = 'auto'; 
    }
  }

  function createConfetti() {
    for (let i = 0; i < 120; i++) {
      let confettiPiece = document.createElement('div');
      confettiPiece.style.position = 'absolute';
      confettiPiece.style.width = Math.random() * 10 + 'px';
      confettiPiece.style.height = Math.random() * 10 + 'px';
      confettiPiece.style.backgroundColor = ['#ff6b6b', '#ff4757', '#1e90ff', '#ffd700', '#32cd32'][Math.floor(Math.random() * 5)];
      confettiPiece.style.top = Math.random() * 100 + '%';
      confettiPiece.style.left = Math.random() * 100 + '%';
      confettiPiece.style.animation = 'fall ' + (Math.random() * 6 + 3) + 's linear infinite';
    
      document.body.appendChild(confettiPiece);

      
      setTimeout(() => {
        confettiPiece.remove();
      }, 6000); 
    }

    container.style.overflow = 'hidden';
    setTimeout(() => {
      container.style.overflow = 'auto';
    }, 6000); 
  }

  createConfetti();

  
  preventScroll();

  setTimeout(() => {
    let confettiPieces = document.querySelectorAll('div[style*="position: absolute"]');
    confettiPieces.forEach(piece => piece.remove());
    container.style.overflow = 'auto'; 
  }, 6000); 

  let style = document.createElement('style');
  style.innerHTML = `
  @keyframes fall {
    0% {
      transform: translateY(-100vh) rotate(0deg);
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
    }
  }
  `;
  document.head.appendChild(style);
});
