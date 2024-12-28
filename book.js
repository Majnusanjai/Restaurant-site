const bookedTables = [
    { date: '2024-10-25', time: '18:00', persons: 4 },
    { date: '2024-10-25', time: '19:00', persons: 2 }
];

function checkAvailability() {
    const numPersons = document.getElementById("numPersons").value;
    const date = document.getElementById("reservationDate").value;
    const time = document.getElementById("reservationTime").value;

    const messageDiv = document.getElementById("availabilityMessage");
    messageDiv.textContent = " ";

    if (!numPersons || !date || !time) {
        alert('Please fill in all fields to check availability.');
        return;
    }

    const isAvailable = !bookedTables.some(booking => booking.date === date && booking.time === time && booking.persons === parseInt(numPersons));

    if (isAvailable) {
        messageDiv.textContent = `Great! A table for ${numPersons} person(s) is available on ${date} at ${time}.`;
        messageDiv.classList.add('text-success');
        messageDiv.classList.remove('text-danger');
        document.getElementById("book-table-btn").onclick = () => confirmBooking(numPersons, date, time);
    } else {
        messageDiv.textContent = `Sorry, a table for ${numPersons} person(s) is already booked on ${date} at ${time}.`;
        messageDiv.classList.add('text-danger');
        messageDiv.classList.remove('text-success');
    }
}

function confirmBooking(numPersons, date, time) {
    alert(`Table booked for ${numPersons} person(s) on ${date} at ${time}.`);
}

window.onload = function() {
    alert("Welcome to Food Lab! We're excited to serve you.");
};





