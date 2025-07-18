if (window.top !== window.self) {
  window.top.location = window.self.location;
}

// Botões "Saiba mais"
function toggleDescricao(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}
