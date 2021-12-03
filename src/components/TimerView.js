import React, { } from 'react' //why the '{ }' ??
import { useDispatch } from 'react-redux'
import '../TimerView.css'

import { togglerTimer } from '../actions'

export default function TimerView(props) {
    const { index, timer } = props
    const dispatch = useDispatch()

    return (
        <div className='TimerView'>
            <h2>{ timer.name }</h2>
            <h1>{ timer.time }</h1>
            <button
            onClick={() => dispatch(togglerTimer(index))}
            >
                {timer.isRunning ? 'Stop' : 'Start'}
            </button>


        </div>
    )

}