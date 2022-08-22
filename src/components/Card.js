import React, { useState } from 'react'
import Model from './Model';

const Card = ({ book }) => {
    console.log(book)
  const[show,setShow]=useState(false);
  const[bookItem,setItem]=useState();
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if (thumbnail !== undefined) {
                        return (
                            <>
                                <div className='card' onClick={()=>{setShow(true);setItem(item)}}>
                                    <img src={thumbnail} alt='' />
                                    <div className='bottom'>
                                        <h3 className='title'>{item.volumeInfo.title}</h3>
                                        <p className='amount'>&#8377;{amount}</p>
                                    </div>
                                </div>
                                <Model show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }


                })
            }

        </>
    )
}

export default Card
