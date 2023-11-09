import React, { useState } from 'react'
import './AboutUs.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Qa from './Qa';

const aboutUs = [
    {
      question: "How does Parkname seperate itself from other domain name parkingcompanies?",
      descriptionAsk: "Your domains are a valuable online property. As in any incestment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a proffesional domainer, you will find everything you need throught Parkname to generate maximum profits for your domain portfolio."
    },  
    {
      question: "Is Parkname Parking actually free?",
      descriptionAsk: "No, Parkname Parking is not free. We offer various services with different pricing options. You can check our pricing details on our website."
    },  
    {
      question: "What you do?",
      descriptionAsk: "Parkname provides domain name parking and monetization services. We help domain owners make money from their unused domain names."
    },      
    {
      question: "When was Parkname first founded?",
      descriptionAsk: "Parkname was founded in 2018"
    },
    
  ]

const AboutUs = () => {
  return (
    <div className='MainAsk AboutUs'>
        <div className='about' >
            <div className='blueIcon'>
                < PermIdentityIcon/>
            </div>

            <div className='aboutUs__articles'>
                <p className="aboutUs__title">
                    About Us
                </p>
                <p className='aboutUs__article'>
                    {aboutUs.length} articles in this Topic
                </p>
            </div>
        </div>

        {aboutUs.map((item) => (
            <Qa 
                key={item.id}
                id={item.id}
                question={item.question}
                descriptionAsk={item.descriptionAsk}    
            />
        ))}

    </div>
  )
}

export default AboutUs