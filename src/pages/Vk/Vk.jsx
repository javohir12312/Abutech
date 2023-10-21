import React from 'react';
import "./Vk.scss"

const Vk = () => {
  return (
    <header>
      <div className="navbar">
        <div className="container">
          <div className="cont-bar">
            <div className="l-bar">
              <img src="https://pngimg.com/uploads/vkontakte/vkontakte_PNG14.png" alt="" />
              <input type="text" placeholder="Поиск" id="serch" />
            </div>
            <div className="r-bar">
              <a href="">Switch to English</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header-content">
          <div className="med">
            <div className="f-cont">
              <h3>Недавно входили на сайт с этого компьютера</h3>
              <p>Чтобы войти снова, нажмите на фотографию или имя.</p>
              <div className="f-cont-box">
                <a href="#" className="wrap">
                  <img src="https://sun9-48.userapi.com/c855536/v855536005/1b8d99/CU6Y-BaXge4.jpg" alt="" className="img" />
                  <span>Empty Madness</span>
                </a>
                {/* Boshqa "wrap" elementlarni ham qo'shing */}
                <div className="active">
                  <div className="user">+</div>
                  <a href="#">Войти в другой аккаунт</a>
                </div>
              </div>
            </div>
            <div className="pre-last">
              <div className="pretitle">
                <h3>ВКонтакте для мобильных устройств</h3>
                <p>Скачать для <a href="#">iPhone</a> или <a href="#">Android</a></p>
              </div>
            </div>
          </div>
          <div className="r-cont">
            <div className="f-form">
              <form action="">
                <input type="text" placeholder="Телефон или email" name="Email" />
                <input type="password" placeholder="Пароль" name="password" />
                <div className="form-button">
                  <button id="myModal" className="btn" type="button">Войти</button>
                  <a href="">Забыли пароль?</a>
                </div>
              </form>
              <div className="t-form">
                <form action="">
                  <h3>Впервые ВКонтакте?</h3>
                  <p>Моментальная регистрация</p>
                  <input type="text" placeholder="Ваше имя" />
                  <input type="text" placeholder="Ваша фамилия" />
                  <span>Дата рождения</span> <b></b>
                  <div className="sel">
                    <div>
                      <select name="" id="day">
                        <option value="day">День</option>
                      </select>
                    </div>
                    <div>
                      <select name="" id="month">
                        <option value="">Месяц</option>
                      </select>
                    </div>
                    <div>
                      <select name="" id="year">
                        <option value="">Год</option>
                      </select>
                    </div>
                  </div>
                  <button className="btn2" type="button">Продолжить регистрацию</button>
                  <button className="btn3" type="button">Войти через Facebook</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="alish">
            <a href="#">ВКонтакте</a>
            <p>2020 FinDelMan</p>
          </div>
          <div>
            <a href="">О ВКонтакте</a>
            <a href="">Правила</a>
            <a href="">Реклама</a>
            <a href="">Разработчикам</a>
          </div>
          <div>
            <a href="">English</a>
            <a href="">Русский</a>
            <a href="">Українська</a>
            <a href="">все языки »</a>
          </div>
        </footer>
      </div>
    </header>
  );
};

export default Vk;
