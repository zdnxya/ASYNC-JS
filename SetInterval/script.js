setInterval(()=> {
    const time = document.getElementById("time");
    time.textContent = new Date().toString();
}, 1000);