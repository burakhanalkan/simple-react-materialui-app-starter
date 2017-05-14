import './styles/App.css'

import 'whatwg-fetch'
import * as React from 'react'
import { connect } from 'react-redux'
import * as Actions from './redux/actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
        <MuiThemeProvider>
            <div style={{textAlign: 'center'}}>
                Simple React MaterialUI App Starter
            </div>
        </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        /* Map state values as props to be able to use state 
           values as this.props.yourPropName in your react component
           For example:
           myPropName: state.ReducerName.stateVariableName
        */
    }
}

export default connect(mapStateToProps)(App)