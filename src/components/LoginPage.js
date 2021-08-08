import React from 'react'
import {connect} from 'react-redux'
import { startLoginWithGithub, startLoginWithGoogle } from '../actions/auth'
export const LoginPage = ({startLoginWithGithub, startLoginWithGoogle})=>(
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It is time to get your expenses under control</p>
            <button className="button" onClick={startLoginWithGoogle}>Login with Google</button>
            <button className="button" onClick={startLoginWithGithub}>Login with Github</button>
        </div>
    </div>
)
const mapDispatchToProps = (dispatch)=>({
    startLoginWithGoogle:() => dispatch(startLoginWithGoogle()),
    startLoginWithGithub:() => dispatch(startLoginWithGithub())

})
export default connect(undefined, mapDispatchToProps)(LoginPage)
