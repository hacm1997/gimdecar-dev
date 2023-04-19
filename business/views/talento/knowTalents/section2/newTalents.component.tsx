import styles from './newTalents.module.css';
import Image from "next/image";

export default function NewTalentsComponent(props:any){

    return(
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.image}>
                        <Image
                            className={styles.light}
                            src={'/images/talento/lampara.png'}
                            width={350}
                            height={480}
                            alt='Lampara'
                            title='Lamapra'
                        />
                    </div>
                    <div className={styles.text}>
                        <div>
                            <h2>{props.translate('talents.section2.title')}</h2>
                            <p>{props.translate('talents.section2.description')}</p>
                            <div className={styles.search_grade}>
                                <input type='text' placeholder={props.translate('talents.section2.placeholder')} />
                                <button type='button'>
                                    <img
                                        src='/images/talento/arrow-right.png'
                                        alt='search' title='arrow'
                                        width={28}
                                        height={22}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
