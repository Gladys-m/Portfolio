import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
// import { emailjs } from '@emailjs/browser';

import { styles } from '../styles';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {}

  const handleSubmit = () => {}

  return (
    <div className='xl:mt-12 xl:flex-row flex gap-10'>
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='bg-black-100 p-8 rounded-2xl flex-[0.75]'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col'>
          <label className='flex flex-col'>
            <span className='tex-white font-medium mb-4'>Your name</span>
            <input 
              type='text' name='name' value={form.name} onChange={handleChange}
              className='bg-tertiary py-4 px-6 text-white font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='tex-white font-medium mb-4 mt-7'>Your email</span>
            <input 
              type='email' name='email' value={form.email} onChange={handleChange}
              className='bg-tertiary py-4 px-6 text-white font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='tex-white font-medium mb-4 mt-7'>Your name</span>
            <textarea 
              rows='7' name='message' value={form.message} onChange={handleChange}
              className='bg-tertiary py-4 px-6 text-white font-medium outline-none'
            />
          </label>
          <button 
            type='submit'
            className='bg-tertiary mt-10 py-3 px-8 w-fit font-bold shadow-primary outline-none shadow-md'
          >Send</button>
          
        </form>
      </motion.div>
    </div>
  )
}

export default Contact