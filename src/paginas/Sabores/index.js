import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

import './style.css';

function Sabores(){
    return(
        <div>
            <Topo />
            <main>
                <section className="secao-banner-sabores">
                    <div className="texto-banner-sabores">
                        <h1>Nossos sabores</h1>
                    </div>
                </section>

                <section className="secao-pagina-sabores">
                    <h2>Sabores de sorvete</h2>
                    <div className="colecao-sabores">
                        <div className="card-sabor">
                            <img src="assets/sabor-oreo.png" alt="oreo"/>
                            <h3>Sorvete de Oreo</h3>
                            <p>delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                        <div className="card-sabor">
                            <img src="assets/sabor-pistache.png" alt="pistache" />
                            <h3>Sorvete de Pistache</h3>
                            <p>Cremoso sorvete sabor Pistache com pedacinhos de semente</p>
                        </div>
                        <div className="card-sabor">
                            <img src="assets/sabor-cookies-avela.png" alt="avela" />
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O Nosso melhor sorvete você vao adorar o sabor.</p>
                        </div>
                        <div className="card-sabor">
                            <img src="assets/sorbet-kiwi.png" alt="kiwi" />
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className="card-sabor">
                            <img src="assets/sorbet-morango.png" alt="morango" />
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div className="card-sabor">
                            <img src="assets/sabor-limao.png" alt="limao" />
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
}

export default Sabores;