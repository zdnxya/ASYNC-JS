function doForm(){
    const ajax = new XMLHttpRequest();
    ajax.open('POST', "");
    ajax.onload = () => {
        const responseHeader = document.createElement("h2");
        responseHeader.textContent = ajax.status;
        document.body.appendChild(responseHeader);
    }
    ajax.setRequestHeader('Content-Type', 'application/json');

    const form = new URLSearchParams();
    form.append("username", document.getElementById('username').value);
    form.append("password", document.getElementById('password').value);
    ajax.send(form)
}

document.getElementById('login').onclick = doForm;
