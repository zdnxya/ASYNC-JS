function waitingTurn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.floor(Math.random() * 100) + 1;
            if (success > 50) {
                resolve("Succes");
            } else {
                reject("Rejected");
            }
        }, 5000);
    });
}

async function testing() {
    const time = document.createElement("h2");
    document.body.append(time);
    const intervalId = setInterval(() => {
        const now = new Date().toLocaleTimeString();
        time.textContent = `Waiting... ${now}`;
    }, 1000);

    try {
        const result = await waitingTurn();
        clearInterval(intervalId);
        time.textContent = result;
    } catch (err) {
        clearInterval(intervalId);
        time.textContent = err;
    }
}

testing();
