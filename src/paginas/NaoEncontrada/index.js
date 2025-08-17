import styles from './NaoEncontrada.module.css';
import erro404 from '../../assets/erro_404.png';
import BotaoPrincipal from 'componentes/BotaoPrincipal';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
    const navegar = useNavigate();

    return(
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>
                    404 mfkr
                </span>
                <h1 className={styles.titulo}>
                    Ops, not found
                </h1>
                <p className={styles.paragrafo}>
                    É, nada mesmo
                </p>

                <div 
                    className={styles.botaoContainer}
                    onClick={() => {
                        navegar('/')
                    }}
                >
                    <BotaoPrincipal 
                    tamanho='lg'
                    >
                        Voltar
                    </BotaoPrincipal>
                </div>

                <img 
                    className={styles.imagemCachorro}
                    src = {erro404}
                    alt='cachorro'
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    );
}