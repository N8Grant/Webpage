function sendEmail() {
  
  subj = document.getElementById('subject').value;
  mes = document.getElementById('message').value;
  window.open('mailto:nathangrant456@gmail.com?subject='+subj+'&body='+mes);
}