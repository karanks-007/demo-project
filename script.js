document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple validation (replace with real authentication logic)
    if (username === 'admin' && password === 'password') {
        message.style.color = '#27ae60';
        message.textContent = 'Login successful!';
    } else {
        message.style.color = '#e74c3c';
        message.textContent = 'Invalid username or password.';
    }
});

// Sample visitor data
const visitors = [
    { date: '2025-10-06', count: 120 },
    { date: '2025-10-07', count: 145 },
    { date: '2025-10-08', count: 160 }
];

const visitorData = document.getElementById('visitorData');
if (visitorData) {
    visitors.forEach(visitor => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${visitor.date}</td><td>${visitor.count}</td>`;
        visitorData.appendChild(row);
    });
}
