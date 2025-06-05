function createHeader(){
    const header = document.createElement("h1");
    header.textContent = "SYBAU";
    document.body.appendChild(header)
}

setTimeout(createHeader, 5000);

setTimeout(() => {
    const newHeader = document.createElement("h2");
    newHeader.textContent = "SYBAU 2";
    document.body.appendChild(newHeader);
}, 10000);