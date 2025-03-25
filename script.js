document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const form = this;
    const formData = new FormData(form); 

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Your reservation has been submitted successfully!');
            form.reset(); 
        } else {
            response.json().then(data => {
                alert(data.message || 'There was a problem submitting your reservation.');
            });
        }
    }).catch(error => {
        alert('There was a problem submitting your reservation.');
        console.error('Error:', error);
    });
});
