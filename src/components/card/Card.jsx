import React from 'react'
import "../../scss/components/_card.scss"
import Man from '../../assets/images/card-man.svg'
import YAndex1 from '../../assets/images/yandex-1.svg'
import YAndex2 from '../../assets/images/yandex-2.svg'
import Yandex3 from '../../assets/images/yandex-3-3-removebg-preview.png'
import Yandex4 from '../../assets/images/yandex-4.svg'
import Yandex5 from '../../assets/images/yandex-5.svg'
import Yandex6 from '../../assets/images/yandex-6.svg'


const Card = () => {
  return (
    <>
    <section className="card">
      <div className="container">
        <div className="card_product_box">
          <h1>Ваша корзина</h1>
          <div className="card_product_par">
            <div className="card_product_par_text">
            <img src={Man} alt="" />
              <div>
                <p className='card_text_first'>МУЖСКАЯ КУРТКА (СКАНДИНАВКА БЕЖЕВАЯ) С КАПЮШОНОМ </p>
                <span className='card_text_span_first'>Размер: XXXL(54) <p>Рост: 170</p></span>
              </div>
              </div>
              <div className="card_text_paragriph">
                <div className='card_text_paragriph_div_first'>8 000 $</div>
                <div className='card_text_paragriph_div_second'><button>-</button><p>|</p> <span>0</span> <p>|</p><button>+</button></div>
                <div className="card_text_paragriph_div_three"><p>Cумма</p> <p>16 000 $</p></div>
                <div className="card_text_paragriph_div_four"> x </div>
              </div>
            </div>
          
        </div>
      </div>
    </section>

    <section className="order">
      <div className="container">
          <h1 className='order_name'>OФOPMЛEHNE ЗAKAЗA</h1>
            <div className="form">
              <div className="form_first">
                <div className="from_first_froms">
                  <div className="from_first_froms_input">
                     <p>Имя*</p>
                    <input type="text" placeholder='Имя...' />
                  </div>
                  <div className="from_first_froms_input">
                     <p>Отчество*</p>
                    <input type="text" placeholder='Отчество...' />
                  </div>
                  <div className="from_first_froms_input">
                     <p>Фамилия*</p>
                    <input type="text" placeholder='Фамилия...' />
                  </div>
                  <div className="from_first_froms_input">
                     <p>Телефон</p>
                    <input type="text" placeholder='Телефон...' />
                  </div>
                </div>
              </div>
              <div className="yandex">
                <div className="yandex_1">
                  <div className="yandex_first">
                    <p className='yandex_first_par' >Способ получения</p>
                    <div className="yandex_card">
                    <div className="yandex_first_child">
                      <img src={YAndex1} alt="" />
                      <img src={YAndex2} alt="" />
                      <div className="yandex_first_child_text">
                        <p className='yandex_first_child_text_1'>Самовывоз</p>
                        <p className='yandex_first_child_text_2'>(по договоренности)</p>
                      </div>
                    </div>
                    <div className="yandex_second_child">
                      <img className='yandex_second_child_img1' src={Yandex3} alt="" />
                      <img src={Yandex4} alt="" />
                      <p >Доставка</p>
                    </div>
                    </div>

                  </div>
                  <div className="yandex_second">
                    <p className='yandex_first_par yandex_second_par_name ' >Способ оплаты</p>
                    <div className="yandex_card_second">
                    <div className="yandex_first_child_card">
                      <img className='yandex3' src={Yandex3} alt="" />
                      <img src={Yandex5} alt="" />
                      <div className="yandex_first_child_text">
                        <p className='yandex_first_child_text_par'>При получении</p>
                        {/* <p className='yandex_first_child_text_2'>(по договоренности)</p> */}
                      </div>
                    </div>
                    <div className="yandex_second_child hero">
                      <img className='yandex_second_child_img1' src={Yandex3} alt="" />
                      <img src={Yandex6} alt="" />
                      <p className='yandex_second_child_par'>Онлайн на сайте</p>
                    </div>
                    </div>

                  </div>
                  </div>

                  <div className="yandex_2">
                    <p>Адрес доставки</p>
                    <div className="yandex_last">
                      
                    </div>
                  </div>
              </div>
            </div>
           <div className="down_card">
            <p className='down_par'>Нажимая кнопку «Оформить заказ» вы соглашаетесь с условиями       обработки персональных данных</p>
            <button className='down_btn'>Оформить заказ</button>
           </div>
          </div>
    </section>
    </>
  )
}

export default Card