import * as React from 'react'

interface Props {
    text: string
}

export default function ({text}: Props, {}) {
    return (
        <div className='phrase'>
            <span>{text}</span>
            <hr/>
        </div>
    )
}
