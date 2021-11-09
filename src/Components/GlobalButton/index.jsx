import React from 'react';
import Button from './styles'
import {Link} from "react-dom";
 export const GlobalButton = ({children}) => {
   return (
      <div>
        <div>
         <Button onClick={() => { alert('clicado') }}> {children} </Button>
         </div>
      </div>
   )
}



