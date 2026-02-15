const correctPassword = '0110';
let input = '';
function enterDigit(digit) {
  if (input.length < 4) {
    input += digit;
  }
  const display = document.getElementById('inputDisplay');
  display.textContent = input.padEnd(4, '•');
  if (input.length === 4) {
    if (input === correctPassword) {
      // switch screens
      document.getElementById('passwordScreen').classList.remove('active');
      document.getElementById('notepadScreen').classList.add('active');
      // stop particles and show flower
      stopHeartParticles();
      showFlower();
    } else {
      alert('Contraseña incorrecta, intenta de nuevo');
      input = '';
      display.textContent = '••••';
    }
  }
}

// Particle engine
let particleInterval = null;
function startHeartParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  // spawn hearts periodically
  particleInterval = setInterval(() => {
    const heart = document.createElement('span');
    heart.className = 'heart';
    const x = Math.random() * 80 + 10; // left offset in %
    heart.style.left = x + '%';
    const duration = 3000 + Math.random() * 2000;
    heart.style.animationDuration = duration + 'ms';
    heart.style.opacity = '1';
    container.appendChild(heart);
    // remove after animation
    setTimeout(() => {
      heart.remove();
    }, duration + 100);
  }, 350);
}

function stopHeartParticles() {
  if (particleInterval) {
    clearInterval(particleInterval);
    particleInterval = null;
  }
  const container = document.getElementById('particles');
  if (container) container.innerHTML = '';
}

// Flower reveal
function showFlower() {
  const flower = document.getElementById('flower');
  if (!flower) return;
  // small delay to allow screen transition
  setTimeout(() => {
    flower.classList.add('bloom');
  }, 150);
}

// Start particles when page loads if password screen active
window.addEventListener('DOMContentLoaded', () => {
  const pwd = document.getElementById('passwordScreen');
  if (pwd && pwd.classList.contains('active')) startHeartParticles();
});

