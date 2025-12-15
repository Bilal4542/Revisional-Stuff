import React from 'react'
import EducationCard from './EducationCard'

const Education = () => {
    const education = [
        {title: 'Matric',
         year:'2016 - 2018', 
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae rem aut labore quae ut assumenda illo totam exercitationem, accusantium porro et nesciunt mollitia veniam. Dolor doloremque neque sunt harum dicta!'
        },
        {title: 'FSC',
         year:'2018 - 2020', 
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae rem aut labore quae ut assumenda illo totam exercitationem, accusantium porro et nesciunt mollitia veniam. Dolor doloremque neque sunt harum dicta!'
        },
        {title: 'BS Software Engineering',
         year:'2020 - 2024', 
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae rem aut labore quae ut assumenda illo totam exercitationem, accusantium porro et nesciunt mollitia veniam. Dolor doloremque neque sunt harum dicta!'
        },
        {title: 'DIT',
         year:'2023', 
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae rem aut labore quae ut assumenda illo totam exercitationem, accusantium porro et nesciunt mollitia veniam. Dolor doloremque neque sunt harum dicta!'
        },
        {title: 'Matric',
         year:'2016 - 2018', 
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae rem aut labore quae ut assumenda illo totam exercitationem, accusantium porro et nesciunt mollitia veniam. Dolor doloremque neque sunt harum dicta!'
        },
        {title: 'FSC',
         year:'2018 - 2020', 
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae rem aut labore quae ut assumenda illo totam exercitationem, accusantium porro et nesciunt mollitia veniam. Dolor doloremque neque sunt harum dicta!'
        },
        {title: 'BS Software Engineering',
         year:'2020 - 2024', 
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae rem aut labore quae ut assumenda illo totam exercitationem, accusantium porro et nesciunt mollitia veniam. Dolor doloremque neque sunt harum dicta!'
        },
        {title: 'DIT',
         year:'2023', 
         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae rem aut labore quae ut assumenda illo totam exercitationem, accusantium porro et nesciunt mollitia veniam. Dolor doloremque neque sunt harum dicta!'
        },
    ]
  return (
    <div>
      {education.map((element) => {
        return <EducationCard title={element.title} year={element.year} desc={element.desc}/>
      })}
    </div>
  )
}

export default Education
