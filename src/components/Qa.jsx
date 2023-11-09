import React, { useState } from 'react'

const Qa = ({ question, descriptionAsk, id }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = (index) => {
        setOpen(!open)

        if (index === open) {
            setOpen(null); // Close the currently open div
          } else {
            setOpen(index); // Open the selected div
          } 
    }

  return (
    <div className='aboutUs__mainAsk'>
        <div
            className='question about__question'
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
  )
}

export default Qa