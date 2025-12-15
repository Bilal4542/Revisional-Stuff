import React from 'react'

const EducationCard = ({title, year, desc}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{year}</p>
      <p>{desc}</p>
    </div>
  )
}

export default EducationCard
