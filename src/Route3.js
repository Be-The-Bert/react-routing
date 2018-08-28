import React from 'react';

export default function Route3(props) {
  return (
    <div>
      Route3
      <br/>
      {props.match.params.username}
    </div>
  )
}