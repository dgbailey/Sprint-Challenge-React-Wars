import React from 'react';
import './PageNav.css';


const PageNav = (props) => {
    return(
        <div className='pageNav-cont'>
            {console.log(props)}
            <button className='prev' onClick={()=> props.pagefunc(props.prev)}>PREV</button>
            <button className='next' onClick={()=> props.pagefunc(props.next)}>NEXT</button>
        </div>
    )
}

export default PageNav;