import React from 'react'
import Parts from './Parts'

export default function Content (props)  {
  return (
      <div>
    <Parts name={props.parts[0].name} exercises={props.parts[0].exercises}/>
    <Parts name={props.parts[1].name} exercises={props.parts[1].exercises}/>
    <Parts name={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}
