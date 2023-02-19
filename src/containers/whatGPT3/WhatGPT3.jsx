import React from 'react'
import { Features } from '../../components'
//import Features from '../features/Features'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whatGPT3'>
      <div className='gpt3__whatgpt3-features'>
        <Features  
        title='What is gpt3'
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
            The possibilites are beyond your imagination
        </h1>
        <p>Explore the libary</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Features 
          title='Chatbox'
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Features 
          title=' Know'
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" 
        />
        <Features 
          title='Education'
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>

      
    </div>
  )
}

export default WhatGPT3