function toggleNav(){
  const nav = document.getElementById('site-nav');
  const btn = document.querySelector('.nav-toggle');
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  btn.setAttribute('aria-expanded', String(!open));
}
function sendQuickMessage(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');
  const subject = encodeURIComponent('Website inquiry from ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>');
  window.location.href = 'mailto:info@nephrodrgg.com?subject=' + subject + '&body=' + body;
  return false;
}
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});