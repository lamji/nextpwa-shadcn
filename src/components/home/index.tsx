import React from 'react'
import useViewModel from './useViewModel'

export default function Index() {
  const {data} = useViewModel()
  return (
    <div> 
      {JSON.stringify(data)}
    </div>
  )
}
