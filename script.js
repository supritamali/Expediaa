//function room booking
document.getElementById('bookingForm').addEventListener('submit'. function(event));
            event.preventDefault(); // Prevents form from refreshing the page

            // Get values from form inputs
            const Destination = document.getElementById('Destination').value;
            const Location = document.getElementById('Location').value;
            const inDate = document.getElementById('Check-in Date').value;
            const outDate = document.getElementById('Check-out Date').value;
            const Rooms = document.getElementById('Number of Rooms').value;
            const Adults = document.getElementById('Number of Adults').value;
            const Children = document.getElementById('Number of Children').value;
            

            // Simple validation
            if (name === '' || email === '' || checkin === '' || checkout === '') {
                document.getElementById('message').innerText = 'Please fill out all fields.';
                document.getElementById('message').style.color = 'red';
            } else {
                // Simulate successful booking
                document.getElementById('message').innerText = `Thank you, ${name}! Your booking is confirmed from ${checkin} to ${checkout}.`;
                document.getElementById('message').style.color = 'green';

                // Reset form
                document.getElementById('bookingForm').reset();
            }