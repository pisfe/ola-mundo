import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from '../../assets/sobre_mim_capa.png';
import fotoSobreMim from '../../assets/sobre_mim_foto.png';

export default function SobreMim(){
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='sobre mim'
        >
            <h3 className={styles.subtitulo}>
                Olá
            </h3>

            <img 
                src={fotoSobreMim}
                alt='foto'
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                lorem ipsum dolor mit etwas
            </p>
        </PostModelo>
    );
}