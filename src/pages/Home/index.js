import React, { useState, useEffect } from 'react';
import BannerMain     from '../../components/BannerMain';
import Carousel       from '../../components/Carousel';
import Loading        from '../../components/Loading';
import PageDefault    from '../../components/PageDefault';
import repoCategorias from '../../repo/categorias';

function Home() {
    const [ dadosIniciais, setDadosIniciais ] = useState([]);

    useEffect(() => {
        repoCategorias.getAllWithVideos()
            .then((respostaCategorias) => {
                setDadosIniciais(respostaCategorias);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    return (
        <PageDefault paddingAll="0">
            { dadosIniciais.length === 0 && (<Loading />) }
            { dadosIniciais.map((categoria, pos) => {
                if (pos === 0) {
                    return (
                        <div key={pos}>
                            <BannerMain
                                videoTitle={dadosIniciais[0].videos[0].titulo}
                                url={dadosIniciais[0].videos[0].url}
                                videoDescription={""}
                            />
                            <Carousel
                                ignoreFirstVideo
                                category={categoria}
                            />
                        </div>
                    )
                }

                return (
                    <Carousel
                        key={pos}
                        category={categoria}
                    />
                );
            })}
        </PageDefault>
    );
}

export default Home;
