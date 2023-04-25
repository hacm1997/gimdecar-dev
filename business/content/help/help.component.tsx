import Image from "next/image";
import styles from "./help.module.css"
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";


export default function HelpComponent(){
    const { t, lang } = useTranslation("home");
    const router = useRouter(); 
    return(
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={router.asPath === '/espacios' || router.asPath === '/talento' ? styles.miniTag2 : styles.miniTag}>
                        <div className={ router.asPath === '/espacios' || router.asPath === '/talento' ? styles.text2 : styles.text}>
                            <p>{t("section4.wsmessage")}</p>
                        </div>
                    </div>
                    <div className={styles.whatsapp}>
                            <Image
                                src={"/images/whatsapp.png"}
                                width={100}
                                height={100}
                                alt="logo whatsapp"
                                title="whatsapp"
                            />
                        </div>
                </div>
            </div>
        </>
    );
}