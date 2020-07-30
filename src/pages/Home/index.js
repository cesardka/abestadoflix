import React      from 'react';
import Menu       from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel   from '../../components/Carousel';
import Footer     from '../../components/Footer';

import dadosIniciais from '../../data/dados_abestados.json';

function Home() {
  const { categorias } = dadosIniciais;

  const carousels = categorias.map((categoria, i) => {
    return (
      <div key={i}>
      { i === 0
        ? <Carousel
            ignoreFirstVideo
            category={categoria}
          />
        : <Carousel
            category={categoria}
          />
      }
      </div>
    );
  });

  return (
    <div className="App">
      <Menu />

      <BannerMain
        videoTitle={categorias[0].videos[0].titulo}
        url={categorias[0].videos[0].url}
        videoDescription={""}
      />

      {/* Anos 90 */}
      {/* A Praça é Nossa */}
      {/* Show do Tom */}
      {/* Pânico na TV */}
      {carousels}

      <Footer />
    </div>
  );
}

export default Home;
