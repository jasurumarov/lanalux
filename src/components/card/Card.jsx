import React from 'react'
import "../../scss/components/_card.scss"
import Man from '../../assets/images/card-man.svg'

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
    </>
  )
}

export default Card