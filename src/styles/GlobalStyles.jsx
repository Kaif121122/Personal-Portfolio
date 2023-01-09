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
    
}

::-webkit-scrollbar-thumb{
    
  background-color:${({ theme }) => theme.colors.grey_color};
    border:5px solid transparent;
    border-radius:10px;
    cursor: pointer;
}

body{
  background-color:${({ theme }) => theme.colors.dark_Black_color};
  padding-top:10rem;
}

h1{
    font-size:5rem;
    font-weight:900;
    color:${({ theme }) => theme.colors.grey_color};
}

h2{
    color:${({ theme }) => theme.colors.grey_color};
    font-size:4.4rem;
    font-weight:500;
    white-space: normal;
    text-align: center;

}

h3{
    font-size: 1.8rem;
    font-weight:400;
}

p{
    color:${({ theme }) => theme.colors.grey_color};
    opacity: 0.9;
    font-size:1.65rem;
    line-height: 1.5;
    font-weight:500;
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

.flex-center{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.grid-four-column{
    grid-template-columns: repeat(auto-fit,minmax(27rem,1fr));
}

.common-heading{
    font-size: 3.8rem;
    font-weight:600;
    margin-bottom:5rem;
    text-transform:capitalize;
}

input,textarea{
    display: block;
    color:${({ theme }) => theme.colors.dark_Black_color};
    padding: 1.6rem 2.4rem;
    font-family: 'Montserrat', sans-serif;
    outline: none;
}

.common-inputs{
    background-color:${({ theme }) => theme.colors.grey_color};
    font-size: 1.5rem;
    cursor: pointer;
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

    .flex-center{
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
    }
}

`


