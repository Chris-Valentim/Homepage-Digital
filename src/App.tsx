import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Card } from "./components/Card";

import { SwiperSection } from "./components/SwiperSection";
import { SwiperSlide } from "swiper/react";

import LatestIcon from './assets/foundation.svg'
import RelatedIcon from './assets/ballonRelacionados.svg'
import { latestContent, relatedContent } from "./mock";

interface SwiperTitleProps {
  title: string;
  iconPath: string;
}

const SwiperTitle = ({ title, iconPath }: SwiperTitleProps) => {
  return (
    <>
      <img src={iconPath} alt="" />
      {title}
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Content />
        <SwiperSection
          titleComponent={<SwiperTitle title="Relacionados" iconPath={RelatedIcon} />}
        >
          {relatedContent.map((i) => (
            <SwiperSlide key={i.id}>
              <Card
              id={i.id}
              date={i.date}
              description={i.description}
              image={i.image}
              link={i.link}
              title={i.title}
              wasViewed={i.wasViewed}
            />
            </SwiperSlide>
          ))}
        </SwiperSection>
        <SwiperSection
          titleComponent={<SwiperTitle title="Mais recentes" iconPath={LatestIcon} />}
        >
          {latestContent.map((i) => (
            <SwiperSlide key={i.id}>
              <Card {...i} />
            </SwiperSlide>
          ))}
        </SwiperSection>
      </main>
    </>
  );
}

export default App;
