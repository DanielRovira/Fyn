// import { useState } from 'react'

import './App.css'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, teal } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: green,
    secondary: teal,
  },
});

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <header className='Header'>
        <div className='Logo'><img src="/fyn.png" alt="Logo" /><h1>Fyn</h1></div>
        <div className='HeaderButtons'>
          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <a href="#about">About us</a>
        </div>
        <div className='HeaderLoginButtons'>
          <Button variant="outlined" href='https://fyn-app.onrender.com/login'>Login</Button>
          <Button variant="contained" href='https://fyn-app.onrender.com/signup'>Sign Up</Button>
        </div>
      </header>
      <section className='Section01' id="home">
        <div className='Section01subSection01'>
          <h1>Manage Finance More Easily</h1>
          <h2>understand better what happens in your business</h2>
          <h3>create your free account and try it yourself!</h3>
          <div className='GetStartedButton'>
            <Button variant="contained" size="large" href='https://fyn-app.onrender.com/signup' >Get Started</Button>
            <Button variant="outlined" size="large" href='https://fyn.onrender.com/#plans' >See our plans</Button>
          </div>
        </div>
        <div className='Section01subSection02'>
          <img src="smartphone.png" alt="Smartphone" />
        </div>
      </section>
      <section className='Section02' id="product">
        <div className='Section02-title'>
          <h1>your finances organized!</h1>
        </div>
        <div className='Section02-content'>
          <img src="/notebook.png" alt="Notebook" />
        </div>
      </section>
      <section className='Section03' id="about">
        <div style={{height: '500px'}}></div>
      </section>
    </ThemeProvider>
  )
}

export default App
