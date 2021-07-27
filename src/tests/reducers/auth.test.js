import authReducer from '../../reducers/auth'

test('should set default state', ()=>{
    const state = authReducer({},{type:'@@INIT'})
    expect(state).toEqual({})
})
test('should set uid for login',()=>{
    const uid = 'kjafkedioreafidjflkjaif'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action)
    expect(state.uid).toEqual(action.uid)
})
test('should set  clear uid for logout ', ()=>{
    const action = {
        type:'LOGOUT'
    }
    const state = authReducer({}, action)
    expect(state).toEqual({})
})