<script src="https://checkout.culqi.com/v2"></script>

<span id="token"><span>
<div>
    <span>Public Key</span> <input id="public_key_input"/>
</div>
<div>
    <form>
        <div>
            <label>
            <span>Correo Electrónico</span>
            <input type="text" size="50" data-culqi="card[email]" id="card[email]">
            </label>
        </div>
        <div>
            <label>
            <span>Número de tarjeta</span>
            <input type="text" size="20" data-culqi="card[number]" id="card[number]">
            </label>
        </div>
        <div>
            <label>
            <span>CVV</span>
            <input type="text" size="4" data-culqi="card[cvv]" id="card[cvv]">
            </label>
        </div>
        <div>
            <label>
            <span>Fecha expiración (MM/YYYY)</span>
            <input size="2" data-culqi="card[exp_month]" id="card[exp_month]">
            <span>/</span>
            <input size="4" data-culqi="card[exp_year]" id="card[exp_year]">
            </label>
        </div>
    </form>
    <a href="javascript:doTokenize()"> Generar Token </a>
</div>

<script>
    {% include script.js %}
</script>