// Минимальная логика: меню и имитация статуса
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
  });

  // Имитация статуса — заменяй на реальный вызов API Twitch/YouTube later
  const liveDot = document.getElementById('live-dot');
  const liveText = document.getElementById('live-text');

  // По умолчанию оффлайн. Пример функции, которую ты можешь заменить:
  function setOffline(){
    liveDot.style.background = '#334'; // muted
    liveText.textContent = 'Оффлайн';
  }
  function setLive(){
    liveDot.style.background = '#ff2d9c'; // neon magenta
    liveText.textContent = 'В эфире';
  }

  // Заглушка: если хочешь увидеть "в эфире" — раскомментируй:
  // setLive();

  setOffline();
});

// Утилита
function openLink(url){
  if(!url || url === '#') return alert('Ссылка ещё не задана (замени в HTML на реальную).');
  window.open(url, '_blank');
}
