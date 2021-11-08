import React from 'react';
import Button from './styles'
import {Link} from "react-dom";
const GlobalButton = () => {
   return (
      <div>
        <div>
         <Button onClick={() => { alert('clicado') }}> Learn More </Button>
         </div>
      </div>
   )
}

export default GlobalButton;

