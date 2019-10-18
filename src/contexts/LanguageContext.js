import React, { Component, createContext } from 'react'

const LanguageContext = createContext();


class LanguageProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            language: 'spanish',
        }
        this.changeLanguage = this.changeLanguage.bind(this)
    }

    changeLanguage(evt){
        this.setState({
            language: evt.target.value,
        })
    }
    render() {
        return (
            <LanguageContext.Provider value = {{...this.state, changeLanguage: this.changeLanguage}}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

// we do not need this part when using Hooks
const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component languageContext = {value} {...props} />}
    </LanguageContext.Consumer>
)



export { LanguageContext, LanguageProvider,  withLanguageContext  };
