import React from 'react'

const Journal = (props) => {
  const {item}=props
  return (
    <div className='container'>
        <div className='journal--post'>
          <div className='journal---text'>
            <h1 className='text'>{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <div classname='journal--image'>
            <img src={`/${item.image}`} alt=' ' />
          </div>
    </div>
    </div>
  )
}

export default Journal