import React, { createContext, useState } from 'react'

const LanguageContext = createContext();

function LanguageProvider(props){
    const [language, setLanguage] = useState("english")

    const changeLanguage = (evt) => setLanguage(evt.target.value)

    return(
        <LanguageContext.Provider value = {{language,changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )
}


// we do not need this part when using Hooks
// export const withLanguageContext = Component => props => (
//     <LanguageContext.Consumer>
//         {value => <Component languageContext = {value} {...props} />}
//     </LanguageContext.Consumer>
// )



export { LanguageContext,LanguageProvider  };
