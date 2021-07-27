import {login, logout} from '../../actions/auth'

test('should check if user is login', ()=>{
    const uid = '14clbbNNKDUV2PDVkzxEBhYs3Hf2'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})
test('should check if user is logout', ()=>{
    const action = logout()
    expect(action).toEqual({
        type:'LOGOUT'
    })
})