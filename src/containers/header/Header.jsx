import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div>
      <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>
            Let Build Something amazing with GPT-3 OpenAl
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iste, illum eaque molestias omnis tempora ipsum magnam totam reprehenderit quos nemo? Est cupiditate nulla id dolorum officia voluptates animi, eos mollitia consectetur laborum. Quibusdam dolorem delectus necessitatibus? Quod omnis temporibus animi reiciendis aspernatur asperiores consequatur dolore recusandae cupiditate. Sapiente, quisquam.</p>
          <div className='gpt3__header-content__input'>
            <input type='email' placeholder='your email address'/>
            <button type='button'>Get Started</button>
          </div>
          <div className='gpt3__header-content__people'>
            <img src={people} alt='people' />
            <p>10700 requested access over the past 24hour</p>
            

          </div>
        </div>
        <div className='gpt3__header-image'>
            <img src={ai} alt='ai'/>
        </div>

      </div>
    </div>
  )
}

export default Header