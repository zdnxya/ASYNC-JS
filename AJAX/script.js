const a = new XMLHttpRequest();
a.open("GET", "api/data.json");

a.onreadystatechange = () => {
    if (a.readyState === 4) {
        if (a.status === 200) {
            const json = JSON.parse(a.responseText);
            const name = document.createElement("h2");
            const age = document.createElement("h2");
            const job = document.createElement("h2");

            name.textContent = "Name : " + json.name;
            age.textContent = "Age : " + json.age;
            job.textContent = "Job : " + json.job;

            document.body.appendChild(name);
            document.body.appendChild(age);
            document.body.appendChild(job);
        } else {
            const error = document.createElement("p");
            error.textContent = "Gagal memuat data: " + a.status + " - " + a.statusText;
            document.body.appendChild(error);
        }
    }
};

a.send();
