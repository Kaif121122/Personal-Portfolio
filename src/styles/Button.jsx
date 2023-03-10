import styled from "styled-components";

export const Button = styled.button`

font-family: 'Montserrat', sans-serif;
text-decoration:none;
max-width: auto;
  background-color:${({ theme }) => theme.colors.teal_color};
color: ${({ theme }) => theme.colors.grey_color};
border: none;
padding: 1.4rem 2.4rem;
text-transform:uppercase;
text-align: center;
margin-top:1.5rem;
cursor: pointer;
transition:all 0.3s ease;
-webkit-transition:all 0.3s ease;
-moz-transition:all 0.3s ease;
-o-transition:all 0.3s ease;

&:hover,&:active{
    
opacity: 0.5;
    transform: scale(0.96);
}
a{
    color:${({ theme }) => theme.colors.grey_color};
}
`