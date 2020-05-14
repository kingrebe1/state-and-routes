import React from 'react'

export default function DynamicPage(props) {
    const nameOfPage = props.match.params.name;
    return(
        <div>
            <h1 className="dynamic-page">{nameOfPage}</h1>
        </div>
    )
}