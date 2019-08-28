
function setUpCulqi(publicKey) {
    Culqi.publicKey = publicKey;
    Culqi.init();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function doTokenize() {
    Culqi.createToken();
    await sleep(2000);
    document.getElementById("token").textContent = Culqi.token.id;
}

function publicKeyInputChange() {
    var new_public_key = document.getElementById("public_key_input").value;
    setUpCulqi(new_public_key);
}

document.getElementById("public_key_input").addEventListener("change", publicKeyInputChange)