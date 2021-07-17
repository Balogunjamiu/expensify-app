//higher order component - A component (HOC) that renders another component
//To reuse Code
//Render hijacking 
// Prop manipulation
//Abstract state
import React from 'react'
import ReactDom from 'react-dom'

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);
const withAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please dont share</p>}
                <WrappedComponent {...props}/>
        </div>
    )
}
//requireAuthentication
const requireAuthentication = (WrappedComponent) =>{
    return (props)=>(
        <div>
            {/* {!props.isAuthenticated && <p>please login in as user</p>}
            {props.isAuthenticated && <WrappedComponent{...props}/>} */}
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please login in to view information</p>)}
        </div>
    )
}
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDom.render(<AdminInfo isAdmin={false} info="These are details"/>, document.getElementById('app'))
ReactDom.render(<AuthInfo isAuthenticated={false} info="These are details"/>, document.getElementById('app'))