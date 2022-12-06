import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

import './style.css';

function Home(){
    return(
        <div>
            <Topo />
            <main>
                <section className="secao-banner">
                    <div className='texto-banner'>
                        <h1>Sorvete artesanal</h1>
                    </div>
                </section>

                <section className="secao-sabores">
                        <img src="assets/banner-sabores.jpg" alt="bolas-sorvete"/>
                        <div>
                            <h2>Nossos sabores</h2>
                            <span>Novos e deliciosos!</span>
                            <p>Sorvete bom é aquele feito com os melhores ingredientes! 
                                Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcas. Venha conhecer e perfeber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                            </p>
                        </div>
                </section>

                <section className="secao-eventos">
                        <div>
                            <h2>Nossos eventos</h2>
                            <span>Delicias com sorvete!</span>
                            <p>Mais do que uma sorveteria, uma extensao da sua casa! 
                                Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores 
                                sorvete da sua vida! Venha nos conhecer e passarum tempo aqui com a gente.
                            </p>
                        </div>
                        <img src="assets/eventos-image.jpg" alt="festas-sorvete"/>
                </section>

                <section className="secao-sobre">
                    <img src="assets/sobre-image.jpg" alt="pessoas"/>
                    <div>
                        <h2>Sobre nós</h2>
                        <span>alegria em cada casquinha!</span>
                        <p>Venha tomar o melhor sorvete da região aqui com a 
                            gente! Nós estamos há anos no mercado produzindo 
                            o que tem de melhor para o nosso cliente e você não 
                            pode ficar fora dessa. Venha nos fazer uma visita e 
                            aproveite o melhor atendimento e o melhor sorvete 
                            da cidade.
                        </p>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
}

export default Home;