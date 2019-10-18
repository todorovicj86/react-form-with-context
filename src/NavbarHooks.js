import React, { useContext, Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch'
import styles from './styles/NavbarStyles'
import { ThemeContext } from './contexts/ThemeContext'
import { LanguageContext } from './contexts/LanguageContext'


const content = {
    english: {
        search: "Search",
        food: "🥚",
    },
    serbian: {
        search: "Pretrazi",
        food: "🥓",
    },
    spanish: {
        search: "Buscar",
        food: "🥪",
    }
}

function NavbarHooks(props){
    const { classes } = props;
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)
    return(
        <div className={classes.root}>
            <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <span>{content[language].food}</span>
                    </IconButton>
                    <Typography className={classes.title} color='inherit' variant="h6" noWrap>
                        Form App
                    </Typography>
                    <Switch onChange={toggleTheme} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder={`${content[language].search}...`}
                            classes = {{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(NavbarHooks);
