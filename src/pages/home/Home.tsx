import type {FunctionComponent} from "react";
import {Card, Carousel, Flex, Space, Typography} from "antd";
import slide1 from "../../assets/slide1.webp?inline"
import slide2 from "../../assets/slide2.webp?inline"
import slide3 from "../../assets/slide3.png?inline"
import styles from "./Home.module.css"

const {Text} = Typography;

const Home: FunctionComponent = () => {

  return (
    <>
      <div className={styles.carousel}>
        <Carousel arrows autoplay infinite>
          <img src={slide1} alt="slide1"/>
          <img src={slide2} alt="slide2"/>
          <img src={slide3} alt="slide3"/>
        </Carousel>
      </div>
      <Space size="large">
        <Card title="О нас" variant="outlined" className={styles.card}>
          <Text>Муниципальная больница - одно из ведущих медицинских учреждений города, где забота о здоровье всегда
            стоит на первом месте</Text>
          <br/>
          <br/>
          <Text>В нашей больнице есть:</Text>
          <ul>
            <li>Квалифицированные врачи</li>
            <li>Современное оборудование</li>
            <li>Индивидуальный подход к каждому пациенту</li>
          </ul>
        </Card>
        <Card title="Контактная информация" variant="outlined" className={styles.card}>
          <Text>
            Номер телефона:
            <br/><br/>
            +7 (3822) 975-500
            <br/><br/>
            Электронная почта:
            <br/><br/>
            mail@mozdrav.ru
            <br/><br/>
            Адрес:
            <br/><br/>
            г. Томск, ул. Котовского, 19
          </Text>
        </Card>
        <Card title="Часы работы" variant="outlined" className={styles.card}>
          <Text>Режим работы:</Text>
          <br/><br/>
          <Flex style={{width: "100%"}}><Text style={{flex: 1}}>Пн. - Пт.</Text><Text style={{flex: 1}}>8:00 - 20:00</Text></Flex>
          <br/>
          <Flex style={{width: "100%"}}><Text style={{flex: 1}}>Сб.</Text><Text style={{flex: 1}}>8:00 - 18:00</Text></Flex>
          <br/>
          <Flex style={{width: "100%"}}><Text style={{flex: 1}}>Вс.</Text><Text style={{flex: 1}}>9:00 - 15:00</Text></Flex>
        </Card>
      </Space>
    </>
  )
}

export default Home