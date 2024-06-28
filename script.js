document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const emailInput = document.getElementById('emails').value;
    const emailsArray = emailInput.split(/[\n,]+/).map(email => email.trim()).filter(email => email !== '');
    const formattedEmails = emailsArray.join(',');
    const usernames = emailsArray.map(email => email.split('@')[0]).join(',');
  
    document.getElementById('output').innerText = formattedEmails;
    document.getElementById('usernames').innerText = usernames;
  });
  
  function copyToClipboard(elementId) {
    const copyText = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(copyText).then(function() {
      alert('Copied to clipboard');
    }, function(err) {
      alert('Failed to copy: ', err);
    });
  }
  