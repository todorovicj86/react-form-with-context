import React, { Component } from 'react'
import Navbar from './Navbar'
import Form from './Form'
import Page from './Page'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <Page>
            <Navbar />
            <Form />
          </Page>
        </LanguageProvider>
      </ThemeProvider>
    )
  }
}
export default App;