import React from "react";
import styled from "styled-components";


const Divimg = styled.div`


img{
 height: 300px;
 width: 300px;
}
`;

export function Image(){
return(
    <Divimg>
        <img src="https://assets.dicebreaker.com/warhammer-not-dand-rpg-tabletop.png/BROK/resize/1200x1200%3E/format/jpg/quality/70/warhammer-not-dand-rpg-tabletop.png"/>
    </Divimg>
)


};
