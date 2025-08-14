import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner (){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    eae
                </h1>
                <p className={styles.paragrafo}>
                    lorem ipsum dolor mit
                </p>
            </div>
            <div className={styles.imagem}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt='ciruclo'
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='foto'
                />
                
            </div>
        </div>
        
    );
}