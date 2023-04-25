import Image from 'next/image';
import styles from './spaces.module.css'

export default function SpacesComponent(props:any){

    return(
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div></div>
                    <div className={styles.title}>
                        <h3>{props.translate('spaces.title1')}<br/> {props.translate('spaces.title2')}</h3>

                        <p>{props.translate('talents.section2.description')}</p>
                        {/* <div className={styles.search_grade}>
                            <input type='text' placeholder={props.translate('talents.section2.placeholder')} />
                            <button type='button'>
                                <Image
                                    src='/images/talento/arrow-right.png'
                                    alt='search' title='arrow'
                                    width={28}
                                    height={22}
                                />
                            </button>
                        </div> */}

                    </div>
                    <div className={styles.sofa}>
                        <img
                            src='/images/talento/mueble.png'
                            alt='mueble bonito'
                            title='mueble bonito'
                        />
                    </div>

                </div>
            </div>
        </>
    );
}
