import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`

*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

html{
    font-size:62.5%;
    overflow-x:hidden;
    font-family: 'Montserrat', sans-serif;
}

::-webkit-scrollbar{
    width: 1.5rem;
}

::-webkit-scrollbar-track{
    background-color:${({ theme }) => theme.colors.thirdcolor};
}

::-webkit-scrollbar-thumb{
    
  background-color:#343e74;
    border:5px solid transparent;
    border-radius:10px;
}

body{
  background-color:${({ theme }) => theme.colors.topcolor};
}

h1{
    font-size:5rem;
    font-weight:900;
    color:black;
}

h2{
    color:black;
    font-size:4.4rem;
    white-space: normal;
    text-align: center;

}

h3{
    font-size: 1.8rem;
    font-weight:400;
}

p{
    color: black;
    opacity: 0.7;
    font-size:1.65rem;
    line-height: 1.5;
    font-weight:400;
}

a{
    text-decoration:none;

}

li{
  list-style: none;
}

.container{
    max-width:120rem;
    margin: 0 auto;
}

.grid{
    display: grid;
    gap: 2rem;
}

.grid-two-column{
    grid-template-columns: repeat(2,1fr);
}

.grid-four-column{
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
}

.common-heading{
    font-size: 3.8rem;
    font-weight:600;
    margin-bottom:5rem;
    text-transform:capitalize;
}

input,textarea{
    display: block;
    color: black;
    padding: 1.6rem 2.4rem;
    font-family: 'Montserrat', sans-serif;
}

@media (max-width:${({ theme }) => theme.media.tab}) {
    
    html{
        font-size: 56%;
    }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {
    html{
        font-size: 50%;
    }
    .grid-two-column{
        grid-template-columns: 1fr;
    }
}

`


