import React from 'react'

function MorraGame(props) {
    const {img,title,sale,subTitle,price} = props.data;
  return (
    <div>
        <div className='picture'>
            <img src={img} width={"100%"} alt={props.alt}/>
        </div>
        <div className='meta'>
            <div className='flexarea'>
                <h3>{title}</h3>
                {/* <span>{sale}</span> */}
            </div>
            <div className='flexarea'>
                <h4>{subTitle}</h4>
                {/* <span className='price'>{price}</span> */}
            </div>
        </div>
    </div>
  )
}

export default MorraGame