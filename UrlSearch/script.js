function search(){
    const ajax = new XMLHttpRequest();

    const param = new URLSearchParams();
    param.append("search", document.getElementById("search").value);
 

    ajax.open('GET', `https://your.webhook.net?${param.toString()}`);
    ajax.onload = () => {
        const headerResponse = document.createElement("h2");
        headerResponse.textContent = ajax.status;
        document.body.appendChild(headerResponse);
    }
    ajax.send();
}

document.getElementById("find").onclick = search;