// Pelicula.js
/*import React from 'react';

const Pelicula = ({ titulo, imagen, descripcion }) => {
  return (
    <div className="pelicula">
      <img src={require(`../imagenes/${imagen}`)} alt={titulo} />
      <div className="contenido">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}

export default Pelicula;*/

import React, { useState } from 'react';

const Pelicula = ({ titulo, imagen, descripcion }) => {
  // Estado para almacenar los clics de cada red social
  const [clics, setClics] = useState({
    twitter: 0,
    youtube: 0,
    instagram: 0
  });

  // Funciones para manejar los clics en cada botón de red social
  const handleButtonClick = (redSocial) => {
    setClics(prevState => ({
      ...prevState,
      [redSocial]: prevState[redSocial] + 1
    }));
  };

  return (
    <div className="pelicula">
      <img src={require(`../imagenes/${imagen}`)} alt={titulo} />
      <div className="contenido">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <div>
          {/* Enlaces a las redes sociales con los atributos href */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" onClick={() => handleButtonClick('twitter')}>Twitter</a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" onClick={() => handleButtonClick('youtube')}>YouTube</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" onClick={() => handleButtonClick('instagram')}>Instagram</a>
        </div>
        <div>
          <p>Clics en Twitter: {clics.twitter}</p>
          <p>Clics en YouTube: {clics.youtube}</p>
          <p>Clics en Instagram: {clics.instagram}</p>
        </div>
      </div>
    </div>
  );
}

export default Pelicula;
