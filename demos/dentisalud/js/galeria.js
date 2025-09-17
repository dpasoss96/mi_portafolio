// Comparador Antes/Después
document.querySelectorAll('.ba-wrapper').forEach(wrapper => {
  const slider = wrapper.querySelector('.ba-slider');

  // Estado inicial (desde data-initial o value)
  const init = wrapper.getAttribute('data-initial') || slider.value || 50;
  setPos(init);

  slider.addEventListener('input', e => setPos(e.target.value));

  // Permite arrastrar directo sobre la imagen
  wrapper.addEventListener('pointerdown', moveFromPointer);
  wrapper.addEventListener('pointermove', e => {
    if (e.buttons === 1) moveFromPointer(e);
  });

  function moveFromPointer(e){
    const rect = wrapper.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const pct = (x / rect.width) * 100;
    slider.value = pct;
    setPos(pct);
  }

  function setPos(p){
    wrapper.style.setProperty('--pos', p + '%');
  }
});
