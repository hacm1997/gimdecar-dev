import {NextPage} from "next";

import Layout from "../../business/general/layout/layout.component";
import styles from "../../business/views/espacios/learn/learn.module.css";
import ReadyLearnComponenet from "../../business/content/readyLearn/readyLearn.component";
import StarsRatings from "../../business/content/ratings/ratinsStars.component";
import {Swiper} from "swiper/react";
import SliderComments from "../../business/views/home/slider/slider.component";


const Home: NextPage =() =>{
    return(
        <>
            <Layout>
                    <div className={styles.title}>
                        <h1>Hora de <span>aprender</span></h1>
                    </div>
                <SliderComments id="espacios"/><br/>
                <StarsRatings />
                <ReadyLearnComponenet/>
            </Layout>

        </>
    );
};

export default Home;