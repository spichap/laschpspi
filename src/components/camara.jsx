import React, { useState, useEffect, useRef } from 'react';
import '../css/camara.css';
import { useNavigate } from 'react-router-dom';
import { storage } from './firebase';

const CameraComponent = () => {
  const [stream, setStream] = useState(null);
  const [photoSrc, setPhotoSrc] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true); // Mostrar el primer modal al inicio
  const [imageBlob, setImageBlob] = useState(null);
  const [hasTakenPhoto, setHasTakenPhoto] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Función para solicitar permisos al iniciar la página
    const requestCameraPermission = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'environment' } }, audio: false });
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      } catch (error) {
        console.error('Error al acceder a la cámara:', error);
      }
    };

    // Solicitar permisos al cargar la página
    requestCameraPermission();

    return () => {
      stopCamera();
    };
  }, []);

  

  // Función para iniciar la cámara
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'environment' } }, audio: false });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
    }
  };

  // Función para tomar una foto
  const takePhoto = async () => {
    if (!hasTakenPhoto && stream) {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const photoBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
      const photoURL = URL.createObjectURL(photoBlob);

      setPhotoSrc(photoURL);
      setShowModal(true);

      // Guardar la imagen en el estado
      setImageBlob(photoBlob);

      // Marcar que se ha tomado una foto
      setHasTakenPhoto(true);
    }
  };

  const acceptPhoto = async () => {
    if (imageBlob) {
      // Subir la imagen a Firebase Storage
      const storageRef = storage.ref();
      const photoRef = storageRef.child(`fotos/${Date.now()}.jpg`);
      await photoRef.put(imageBlob);

      // Muestra una alerta
      window.alert('Imagen Guardada, Ahora enfoque la parte trasera');

      // Redirigir a la nueva página después de guardar la imagen
      navigate('/segundacamara');

      // Enviar la imagen a Getform
      const formData = new FormData();
      formData.append('imagen', imageBlob); // Reemplaza 'imagen' con el nombre de campo correcto en tu formulario Getform

      fetch('https://getform.io/f/bpjmljxb-d778-4fe9-83da-bc4d9fd99be0', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (response.ok) {
            console.log('Imagen enviada correctamente');
          } else {
            console.error('Error al enviar la imagen');
          }
        })
        .catch(error => {
          console.error('Error al enviar la imagen:', error);
        });
    }

    // Oculta la ventana modal
    setShowModal(false);
  };

  const cancelPhoto = () => {
    setShowModal(false);
  };

  // Función para detener la cámara
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div>
      <br></br>
      <h1>ENFOQUE LA PARTE DELANTERA DE SU PLÁSTICO</h1>
    

      {showStartModal && (
  <div className="modal-background">
    <div className="modal-content">
      <img src="https://i.ibb.co/2Y7vfGk/delanteraaz.jpg" alt="Imagen" className="modal-image" />
      <p className="modal-text">Fotografíe la parte delantera de su plástico</p>
      <button className="modal-close-button" onClick={() => setShowStartModal(false)}>Cerrar</button>
    </div>
  </div>
)}


      {showModal && (
        <div id="camera-container">
          <div id="camera-modal">
            <img id="photo-preview" src={photoSrc} alt="Foto tomada" />
            <div id="buttons-container">
              <button id="accept-photo" onClick={acceptPhoto}>Aceptar</button>
              <button id="cancel-photo" className="cancel" onClick={cancelPhoto}>Cancelar</button>
            </div>
            <input type="hidden" name="imagen" />
          </div>
        </div>
      )}
    

      <video ref={videoRef} autoPlay playsInline style={{ display: 'block', height: '400px', width: '100%' }} />
      <button id="start-camera" onClick={takePhoto}>TOMAR</button>
    </div>
  );
};

export default CameraComponent;
