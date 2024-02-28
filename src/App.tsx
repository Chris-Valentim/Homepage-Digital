import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { SwiperSection } from "./components/SwiperSection";
import { SwiperSlide } from "swiper/react";
import RelatedIcon from './assets/ballonRelacionados.svg'
import { Card } from "./components/Card";
import { relatedContent } from "./mock";

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
      <Content />
      <SwiperSection
        titleComponent={<SwiperTitle title="Relacionados" iconPath={RelatedIcon} />}
      >
        {relatedContent.map((i) => (
          <SwiperSlide>
            <Card
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
    </>
  );
}

export default App;
