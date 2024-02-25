// Cartelera.js
import React from 'react';
import Pelicula from './Peliculas';


const Cartelera = () => {
  return (
    <div className="cartelera">
      <h1>Mis 3 películas favoritas</h1>
      <div className="peliculas">
        <Pelicula
          titulo="El Padrino"
          imagen="padrino.jpeg"
          descripcion="Un clásico del cine dirigido por Francis Ford Coppola."
        />
        <Pelicula
          titulo="Pulp Fiction"
          imagen="pulp.jpeg"
          descripcion="Una obra maestra de Quentin Tarantino."
        />
        <Pelicula
          titulo="El retorno del Rey"
          imagen="rey.jpeg"
          descripcion="La épica conclusión de la trilogía de J.R.R. Tolkien."
        />
      </div>
     
    </div>
  );
}

export default Cartelera;
