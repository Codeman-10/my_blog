import React from 'react'
import './Thumbnail.css'

function Thumbnail({ key, head, body }) {
    return (
        <div className="thumbnail_container" key={key}>
            <div className="thumb_header">
                {head}
            </div>
            <div className="thumb_body">
               <p> {body}</p>
            </div>
        </div>
    )
}

export default Thumbnail
