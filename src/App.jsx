import style from './App.module.css';
import styled from 'styled-components';
import { Card, Card1, Card2, Card3} from './component/card';
import nok from './img/logo.png';
import leaf from './img/leaf.png';
import point from './img/point.png';
import telega from './img/telega.png';
import cake from './img/cake.png';
import salt from './img/salt.png';
import box from './img/box.png';
import cloud from './img/cloud.png';
import check from './img/check.png';
import like from './img/like.png';
import smartphone from './img/smartphone.png';
import phoneimg from './img/phoneimg.png';
import Apple from './img/Apple.png';
import googleplay from './img/googleplay.png';
import hand from './img/hand.png';
import location from './img/location.png';
import email from './img/email.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import hours from './img/hours.png';
import headphones from './img/headphones.png';
import lin1e from './img/line.png';
import wallet from './img/wallet.png';
import x from './img/x.png';
import moto from './img/moto.png';
import 'animate.css';

const Container = styled.div`
  
max-width: 1700px;
margin: 0 auto;
`
function App() {
  return (<div>
    <div className={style["container1"]}>
      <Container>
        <div className={style["navbar"]}>
          <div className={style["start"]}>
            <img  src={nok} alt="" />
          </div>
          <div className={style["middle"]}>
            <ul>
              <li>О приложении</li>
              <li>Доставка</li>
              <li>Скачать приложение</li>
              <li>Курьерам</li>
              <li>Стать партнёром</li>
            </ul>
          </div>
          <div className={style["finish"]}>
            <div className={style["phone"]}>
              <div className={style["phone-img"]}>
                    <img src={phoneimg} alt="" />
              </div>
              <div className={style["phone-number"]}>
                <p>+ 125 458 65 89</p>
              </div>
            </div>
            <div className={style["recall"]}>
              <button>Обратный звонок</button>
            </div>
          </div>
          <div className={style["three-line"]}>
              <img src={lin1e} alt="" />
          </div>
        </div>
        <div className={style["center"]}>
          <div className={style["left-center"]}>
            <p className='animate__animated animate__backInDown'>Хотите чего-то большего, чем просто еды? </p>
            <h1 className='animate__animated animate__backInDown'>Сделайте <span style={{color:"#1DC46C"}}>«knock- knock»</span>,и мы едем к вам!</h1>
            <p className='animate__animated animate__swing animate__slower-2s'>NOK Delivery - это не только доставка еды и продуктов питания, но и напитков, одежды, бытовой химии, косметики и парфюмерии, спортивного питания, лекарств, подарков, цветов, товаров для детей и прочего.</p>
            <button className='animate__animated animate__fadeInDownBig animate__slower-2s'>Скачать приложение</button>
          </div>
          <div className={style["right-center"]} >
              <img  className='animate__animated animate__backInDown' src={hand} alt="" />
          </div>
        </div>
      </Container>
    </div>
    <div className={style["container2"]}>
      <Container>
        <div className={style["box"]}>
          <Card  imgUrl={leaf} text1 = "Всегда качественные товары и свежие продукты"/>
          <Card imgUrl={wallet} text1 = "Всегда качественные товары и свежие продукты"/>
          <Card imgUrl={headphones} text1 = "Всегда качественные товары и свежие продукты"/>
        </div>  
      </Container>
    </div>
    <div className={style["container3"]}>
      <Container>
        <div className={style["text-c3"]}>
        <p className='animate__animated animate__rollIn'> <span>NOK</span> - это уникальное приложение, которое предоставляет возможность быстро и легко получать все необходимые товары из магазинов нашего города всего за несколько кликов. Благодаря интеграции наших партнёров и объединению усилий, город становится более доступным для каждого клиента.</p>
        </div>
      </Container>
    </div>
    <div className={style["container4"]}>
      <Container>
        <div className={style["deliver"]}>
                <Card1 imgUrl={point} text1 = "Для просмотра доступных заведений, предоставьте доступ к вашему местоположению"/>
                <Card1 imgUrl={moto} text1 = "Для просмотра доступных заведений, предоставьте доступ к вашему местоположению"/>
                <Card1 imgUrl={x} text1 = "Для просмотра доступных заведений, предоставьте доступ к вашему местоположению"/>
            
        </div>
        <div className = {style["market"]}>
            <Card2 imgUrl={telega} text1 = "Супермаркеты" btn="Подробнее"/>
            <Card2 imgUrl={cake} text1 = "Кондитерские изделияи выпечка" btn="Подробнее"/>
            <Card2 imgUrl={salt} text1 = "Аптеки" btn="Подробнее"/>
            <Card2 imgUrl={box} text1 = "Рестораны" btn="Подробнее"/>
        </div>
        <div className={style["text-box"]}>
          <h1 className='animate__animated animate__rollIn'>«Экспресс курьер»- оперативная доставка документов, товаров или подарков.</h1>
          <p className='animate__animated animate__rollIn'>Предоставляем уникальную услугу «Экспресс курьер» для наших партнёров и клиентов. Вам не нужно делегировать поручения сотрудникам по работе или знакомым. Занимайтесь работой, или отдыхайте, а наш курьер максимально быстро доставит товар или документы адресату с соблюдением конфиденциальности и сохранности.</p>

        </div>
      </Container>
    </div>
    <div className={style["container5"]}>
      <Container>
          <div className={style["grey-text"]}>
              <h1 className='animate__animated animate__flipInY'>Сделать заказ стало <span style = {{color:"#325F93"}}>ещё проще</span></h1>
              <p className='animate__animated animate__flipInY'>Три простых шага для работы с нами!</p>
          </div>
        <div className={style["grey"]}>
          <div className={style["three"]}>
                <div className={style["box1"]}>
                  <div className={style["left-box1i"]}>
                    <img src={cloud} alt="" />
                  </div>
                  <div className={style["left-box1"]}>
                    <h1  className='animate__animated animate__flipInY'>Загрузите наше приложение</h1>
                    <p  className='animate__animated animate__bounceInRight'>Укажите свои контактные данные.</p>
                  </div>
                </div>
                <div className={style["box2"]}>
                  <div className={style["left-box2i"]}>
                    <img src={check} alt="" />
                  </div>
                  <div className={style["left-box2"]}>
                    <h1 className='animate__animated animate__flipInY'>Сравните и сэкономьте.</h1>
                    <p className='animate__animated animate__bounceInRight'>Выберите понравившиеся товары по выгодным ценам и оформите заказ через приложение или по телефону.</p>
                  </div>
                </div>
                <div className={style["box3"]}>
                  <div className={style["left-box3i"]}>
                    <img src={like} alt="" />
                  </div>
                  <div className={style["right-box3"]}>
                    <h1 className='animate__animated animate__flipInY'>Получите лучший сервис.</h1>
                    <p className='animate__animated animate__bounceInRight'>Отлично проведите время с родственниками, коллегами и друзьями. Мы предоставим все необходимое для вашего отдыха и комфорта.</p>
                  </div>
                </div>
          </div>
        </div>
      </Container>
    </div>
    <div className={style["container6"]}>
      <Container>
        <h1 className={style["download"]}> <span style={{color:"#325F93"}}>Скачайте приложение,</span> чтобы воспользоваться сервисом доставки.</h1>
        <div className={style["software"]}>
          <div className={style["android"]}>
            <h1 className='animate__animated animate__bounceInRight'>Для пользователей Android.</h1>
            <Card3
            number="1"
            text1="Откройте Google Play Market на смартфоне."
              />
            <Card3
            number="2"
            text1="Найдите и выберите наше приложение."
              />
            <Card3
            number="3"
            text1="Нажмите на кнопку «Установить»."
              />
            <Card3
            number="4"
            text1="Завершите операцию, следуя инструкциям на экране."
              />
            <div className={style["google1"]}>
              <img className='animate__animated animate__bounceInRight' src={googleplay} alt="" />
            </div>
          </div>
          <div className={style["smartphone"]}>
              <img className='animate__animated animate__bounceInRight' src={smartphone} alt="" />
          </div>
          <div className={style["ios"]}>
          <h1 className='animate__animated animate__bounceInRight'>Для пользователей IOS.</h1>
            <Card3
            number="1"
            text1="Откройте AppStore на смартфоне."
              />
            <Card3
            number="2"
            text1="Найдите и выберите приложение «Nok delivery»."
              />
            <Card3
            number="3"
            text1="Нажмите на кнопку «Установить»."
              />
            <Card3
            number="4"
            text1="Завершите установку следуя инструкциям на экране."
              />
            <div className={style["ios"]}>
              <img className='animate__animated animate__bounceInRight' src={Apple} alt="" />
            </div>
          </div>
        </div>
        <div className={style["cur"]}>
          <div className={style["left-cur"]}>
              <h1 className='animate__animated animate__bounce'>Курьерам </h1>
          </div>
          <div className={style["right-cur"]}>
              <h1 className='animate__animated animate__bounce'>Стать партнёром</h1>
          </div>
        </div>
      </Container>
    </div>
    <div className={style["container7"]}>
      <Container>
        <div className={style["kart"]}>
            <h1 className={style["contact"]}>Наши контакты</h1>
            <div className={style["info"]}>
              <div className={style["locate"]}>
                <img src={location} alt="" />
              </div>
              <div className={style["text-locate"]}>
                <p className='animate__animated animate__bounceInRight'>Узбекистан, Ташкент, Мирабадский район, ул. Айбека, 61</p>
              </div>
            </div>
            <div className={style["info"]}>
              <div className={style["locate"]}>
                <img src={phoneimg} alt="" />
              </div>
              <div className={style["text-locate1"]}>
                <p className='animate__animated animate__bounceInRight'>+998 71-205-90-01</p>
              </div>
            </div>
            <div className={style["info"]}>
              <div className={style["locate"]}>
                <img  src={email} alt="" />
              </div>
              <div className={style["text-locate2"]}>
                <p className='animate__animated animate__bounceInRight'>office@nokdelivery.uz</p>
              </div>
            </div>
            <div className={style["info"]}>
              <div className={style["locate"]}>
                <img src={hours} alt="" />
              </div>
              <div className={style["text-locate3"]}>
                <p>Пн-Вс  00:00 - 24:00</p>
              </div>
            </div>
            <h1 className={style["social"]}>Мы в социальных сетях</h1>
            <div className={style["mediaS"]}>
              <div className={style["facebook"]}>
                  <img className='animate__animated animate__bounceInRight' src={facebook} alt="" />
              </div>
              <div className={style["instagram"]}>
              <img className='animate__animated animate__bounceInRight'  src={instagram} alt="" />
              </div>
            </div>
            <div  className={style["wee"]}>
                <button className={style["we"]}>написать нам</button>
            </div>
        </div>
      </Container>
    </div>
    <div className={style["container8"]}>
      <Container>
        <div className={style["footer"]}>
          <div className={style["first"]}>
            <img src={nok} alt="" />
          </div>
          <div className={style["second"]}>
            <div className={style["text-second"]}>
              <p className='animate__animated animate__pulse animate__infinite'>Скачать приложение:</p>
            </div>
            <div className={style["google1"]}>
              <img className='animate__animated animate__pulse animate__infinite' src={googleplay} alt="" />
            </div>
            <div className={style["ios1"]}>
              <img className='animate__animated animate__pulse animate__infinite' src={Apple} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>)
}

export default App;
