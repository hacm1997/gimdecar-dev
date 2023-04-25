import Link from "next/link";
import styles from "./activities.module.css"
import Image from "next/image";

export default function ActivitiesComponent({translate}:any){

    return(
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.title}>
                        <div>
                            <div>
                                <h2>
                                {translate("section2.title")}
                                </h2>
                            </div>
                            <div className={styles.description}>
                                <p>
                                    {translate("section2.description")}
                                </p>
                            </div>
                            <div className={styles.button}>
                                <Link href="/#form-seccion">{translate("section2.button")}</Link> 
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageLanguage}>
                        <Image
                            width={450}
                            height={450}
                            src="/images/idiomas/activities/language.png" alt="Lenguaje" title="Lenguaje"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
