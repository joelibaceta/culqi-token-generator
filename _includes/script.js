
function setUpCulqi(publicKey) {
    Culqi.publicKey = publicKey;
    Culqi.init();
}

function writeOutput() {
    document.getElementById("token").textContent = Culqi.token.id;
}

function doTokenize() {
    Culqi.createToken();
     
    setTimeout(writeOutput, 2000);
}

function publicKeyInputChange() {
    var new_public_key = document.getElementById("public_key_input").value;
    setUpCulqi(new_public_key);
}

document.getElementById("public_key_input").addEventListener("change", publicKeyInputChange)