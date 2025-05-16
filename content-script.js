(function() {
  const div = document.createElement('div');
  div.textContent = "No archived copy found.";
  div.style.position = 'fixed';
  div.style.top = '20px';
  div.style.right = '20px';
  div.style.background = '#222';
  div.style.color = '#fff';
  div.style.padding = '10px 20px';
  div.style.borderRadius = '5px';
  div.style.zIndex = 9999;
  div.style.fontSize = '16px';
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 2000);
})();