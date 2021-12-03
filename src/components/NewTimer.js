import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../NewTimer.css'

import { addTimer } from '../actions'

export default function NewTimer() {
    const [ name, setName ] = useState('')
    const dispatch = useDispatch()

    return (
        <div className='NewTimer'>
            <input type='text'
            placeholder='New Timer name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <button
            onClick={(e) => dispatch(addTimer(name))}>
                Save
            </button>

        </div>
    )
}