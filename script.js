document.addEventListener("DOMContentLoaded", () => {
  const flower = document.querySelector('.flower');

  for (let i = 0; i < 8; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.setProperty('--angle', `${i * 45}deg`);
    petal.style.transform = `rotate(${i * 45}deg) translateY(-50px)`;
    petal.style.animationDelay = `${i * 0.2}s`;
    flower.appendChild(petal);
  }
});