import React from 'react'

const Title = ({subheading, heading}) => {
  return (
   <>
    {/* <div className="subheading">/ {subheading} /</div> */}
    {subheading && <div className="subheading">/ {subheading} /</div>}
    <h2>{heading}</h2>
    </>
  )
}

export default Title