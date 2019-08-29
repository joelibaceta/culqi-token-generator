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

<br/>


# Tarjetas de Prueba

## Exitosas

| Marca            | Numero              | Mes/Año | CVV  | Descripción   |
|------------------|---------------------|---------|------|---------------|
| Visa             | 4111 1111 1111 1111 | 09/2020 | 123  | Venta exitosa |
| Master Card      | 5111 1111 1111 1118 | 06/2020 | 039  | Venta exitosa |
| American Express | 3712 1212 1212 122  | 11/2020 | 2841 | Venta exitosa |
| Diners Club      | 360012 1212 1210    | 04/2020 | 964  | Venta exitosa |

## Tarjetas con errores específicos

| Marca            | Numero              | Mes/Año | CVV  | Descripción                     |
|------------------|---------------------|---------|------|---------------------------------|
| Visa             | 4000 0200 0000 0000 | 10/2019 | 354  | Tarjeta Robada                  |
| Visa             | 4000 0300 0000 0009 | 08/2024 | 836  | Tarjeta Perdida                 |
| Visa             | 4000 0400 0000 0008 | 03/2021 | 295  | Fondos Insuficientes            |
| MasterCard       | 5400 0000 0000 0005 | 01/2022 | 492  | Contactar al Emisor de Tarjeta  |
| MasterCard       | 5400 0200 0000 0003 | 07/2022 | 203  | CVV Incorrecto                  |
| American Express | 3700 010000 00000   | 04/2021 | 2511 | Emisor de Tarjeta no disponible |
| Diners Club      | 3600 000000 0008    | 09/2019 | 683  | invalid_card                    |
| Diners Club      | 3600 010000 0007    | 12/2024 | 820  | processing_error                |
| Diners Club      | 3600 020000 0006    | 01/2020 | 230  | fraudulent                      |

<script>
    {% include script.js %}
</script>

