import './style.css';

function Rodape(){
    return(
        <footer className="secao-rodape">
            <div className='limitar-secao container-rodape' >
                <img src="assets/logo.png" alt="logo"/>
                <div>
                    <h3>Endereço</h3>
                    <p>Av. Bernardino de campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h3>Contato</h3>
                    <p>info@meusite.com</p>
                    <p>Tel:(11)3456-7890</p>
                </div>
                <div>
                    <h3>Horários</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className='direito-autoral'>
                <p>Gelateria. Orgulhosamente desenvolvido por Diego Melo</p>
            </div>
        </footer>
    );
}

export default Rodape;