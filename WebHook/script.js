function login(){
    const ajax = new XMLHttpRequest();
    ajax.open('POST', '');
    ajax.onload = () => {
        const headerResponse = document.createElement("h2");
        headerResponse.textContent = ajax.status;
        document.body.appendChild(headerResponse);
    }
    ajax.setRequestHeader('Content-Type', 'application/json')
    const json = {
        username : document.getElementById("username").value,
        password : document.getElementById("password").value
    };
    ajax.send(JSON.stringify(json));
}

document.getElementById("login").onclick = login;