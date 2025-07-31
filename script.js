// Lógica para ítems clicables
const items = document.querySelectorAll('.item');
items.forEach(item => {
  const id = item.dataset.id;
  const savedState = localStorage.getItem(id);
  if (savedState === "true") item.classList.add('active');

  item.addEventListener('click', () => {
    item.classList.toggle('active');
    localStorage.setItem(id, item.classList.contains('active'));
  });
});

// Lógica para submenús
const toggles = document.querySelectorAll('.menu-header');
toggles.forEach(header => {
  const targetId = header.dataset.toggle;
  const submenu = document.getElementById(targetId);
  header.addEventListener('click', () => {
    submenu.classList.toggle('active');
  });
});

// Lógica para contadores
const counters = document.querySelectorAll('.counter-item');
counters.forEach(counter => {
  const id = counter.dataset.id;
  const countEl = counter.querySelector('.count');
  const minusBtn = counter.querySelector('.minus');
  const plusBtn = counter.querySelector('.plus');
  let count = parseInt(localStorage.getItem(id)) || 0;
  countEl.textContent = count;

  plusBtn.addEventListener('click', () => {
    count++;
    countEl.textContent = count;
    localStorage.setItem(id, count);
  });

  minusBtn.addEventListener('click', () => {
    if (count > 0) {
      count--;
      countEl.textContent = count;
      localStorage.setItem(id, count);
    }
  });
});
