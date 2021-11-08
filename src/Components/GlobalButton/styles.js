import styled from "styled-components";

const Button = styled.button`
    position: inherit;
    padding: 10px 30px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: .3s ;background: ease.3s border ease;
    transform: skew(-7deg);
    z-index: -1;
    background: transparent;
    color: #fff;
    border: 1px solid #fff;
    font-size:18px;
    margin-left: 10px;

    :hover {
        
    background:#d92b4c;
    border:1px solid #d92b4c;
    
    
    }
`;

export default Button;