import styles from './header.module.css'
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function HeaderComponent(){
    const {t, lang} = useTranslation('nav');
    const wsp_esp = "https://api.whatsapp.com/send?phone=573042811369&text=Hola%20Dalca%20Group%20%F0%9F%8F%A0%F0%9F%8D%83.%20Estaba%20visitando%20su%20sitio%20web%20y%20estoy%20interesad@%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20y%20servicios%20que%20ustedes%20ofrecen.%20";
    const wsp_eng = "https://api.whatsapp.com/send?phone=573042811369&text=Hola%20Dalca%20Group%20%F0%9F%8F%A0%F0%9F%8D%83.%20Estaba%20visitando%20su%20sitio%20web%20y%20estoy%20interesad@%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20y%20servicios%20que%20ustedes%20ofrecen.%20";

    return(
        <>
            <Head>
                <meta name="keywords" content={t('keywords')} />
                <meta name="description" content={t('description')} />
            </Head>

            <link rel="canonical" href="https://gimdecar.edu.co" />
            <a
                href={lang === 'en' ? wsp_eng : wsp_esp}
                target="_blank"
                rel="noreferrer"
                title="Whatsapp"
                className={styles.float}
            >
                <i className='bx bxl-whatsapp'></i>
            </a>
        </>
    )
}
