import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import {SectionWrapper} from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}> Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-8xl leading-[30px]"
      >
        As a skilled software developer, I have a deep understanding of the latest technologies and best practices in the industry. I specialize in TypeScript and JavaScript, and have a solid background in frameworks like React, Node.js, and Three.js. I am passionate about creating efficient, scalable, and user-friendly software that solves real-world problems.
        With my experience in software development, I have honed my skills in designing and developing intuitive user interfaces and engaging user experiences. I work closely with my clients to understand their needs and requirements and collaborate with them to bring their ideas to life. I am a quick learner and can adapt to new technologies and tools with ease.
        I take pride in my ability to deliver high-quality software solutions that meet my clients' expectations. Whether you are a startup or a large organization, I can help you build custom software that addresses your unique business needs. Let's work together to create something great!

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>



    </>
  )
}

export default SectionWrapper(About,"about")