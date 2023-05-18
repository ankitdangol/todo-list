import React from 'react';
import DeleteButton from './delete-svgrepo-com.svg';


export default function Items(props) {
    return (
        <li className='list'><button className='delete-button'><img alt='delete' src={DeleteButton} className='delete-button-svg' onClick={() => { props.selectDelete(props.id) }} /></button>{props.item}<input type="checkbox" class="checkbox"/></li>
    )
}
