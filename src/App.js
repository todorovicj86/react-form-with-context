// import React, { Component } from 'react'
import React from 'react'
// import Navbar from './Navbar'
// import Form from './Form'
// import Page from './Page'
import NavbarHooks from './NavbarHooks'
import FormHooks from './FormHooks'
import PageHooks from './PageHooks'
// import { ThemeProvider } from './contexts/ThemeContext'
// import { LanguageProvider } from './contexts/LanguageContext'
import { LanguageProvider } from './contexts/LanguageContextHooks'
import { ThemeProvider } from './contexts/ThemeContextHooks'
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       // <ThemeProvider>
//       //   <LanguageProvider>
//       //     <Page>
//       //       <Navbar />
//       //       <Form />
//       //     </Page>
//       //   </LanguageProvider>
//       // </ThemeProvider>
//     )
//   }
// }
function App() {
    return (
      <ThemeProvider>
      <LanguageProvider>
        <PageHooks>
          <NavbarHooks />
          <FormHooks />
        </PageHooks>
      </LanguageProvider>
    </ThemeProvider>
    )
}
export default App;