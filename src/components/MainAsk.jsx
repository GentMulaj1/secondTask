import React, { useState } from 'react'
import './MainAsk.css'

const MainAsk = ({ question, descriptionAsk, id }) => {
    const [open, setOpen] = useState({});

    const handleOpen = (index) => {
        setOpen(!open)

        if (index === open) {
            setOpen(null); // Close the currently open div
          } else {
            setOpen(index); // Open the selected div
          } 
    }
  
    return (
        <div className='MainAsk'>
            <div
                className='question'
                onClick={() => handleOpen(id)}
            >
                {question}

                <div >
                {open === id && 
                    <div  className='descriptionAsk'>
                        {descriptionAsk}
                    </div>
                }
                </div>
            </div>
        </div>
    );
  

}

export default MainAsk