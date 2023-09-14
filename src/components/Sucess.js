import React from 'react'

export default function Sucess({message}) {
  return (
    <div>
        <div class="alert alert-success" role="alert">
          {message}
       </div>
    </div>
  )
}
