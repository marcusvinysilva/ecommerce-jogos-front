import React from 'react';
import Button from './styles'
import {Link} from "react-dom";
const GlobalButton = ({children}) => {
   return (
      <div>
        <div>
         <Button onClick={() => { alert('clicado') }}> {children} </Button>
         </div>
      </div>
   )
}

export default GlobalButton;

