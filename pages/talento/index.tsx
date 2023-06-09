import type { NextPage } from "next";
import styles from './index.module.css';
import Layout from "../../business/general/layout/layout.component";
import TitleTalent from "../../business/views/talento/titleTalent/title.component";
import GradesComponent from "../../business/views/talento/knowTalents/section1/grades.component";
import useTranslation from "next-translate/useTranslation";
import NewTalentsComponent from "../../business/views/talento/knowTalents/section2/newTalents.component";
import SpacesComponent from "../../business/views/talento/spaces/spaces.component";
import SliderComments from "../../business/views/home/slider/slider.component";
import StarsRatings from "../../business/content/ratings/ratinsStars.component";
import HelpComponent from "../../business/content/help/help.component";
import ReadyLearnComponenet from "../../business/content/readyLearn/readyLearn.component";

const Home: NextPage = () => {
  const { t, lang } = useTranslation('talent');
  
  return (
    <>
      <Layout>
        <TitleTalent translate={t} />
        <GradesComponent translate={t} />
        <NewTalentsComponent translate={t} />
        <SpacesComponent translate={t} />
        <SliderComments title={t('comments.title')} titlebr={t('comments.title2')} id={"talento"} />
        <div style={{ paddingTop: '10px' }}>
          <StarsRatings/>
        </div>
        <HelpComponent/>
        <div className={styles.learn}>
          <div className={styles.top}>
            <ReadyLearnComponenet/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
