
function setUpCulqi(publicKey) {
    Culqi.publicKey = publicKey;
    Culqi.init();
}

function doTokenize() {
    Culqi.createToken();
    document.getElementById("token").textContent = Culqi.token.id;
}

function publicKeyInputChange() {
    var new_public_key = document.getElementById("public_key_input").value;
    setUpCulqi(new_public_key);
}

document.getElementById("public_key_input").addEventListener("change", publicKeyInputChange)