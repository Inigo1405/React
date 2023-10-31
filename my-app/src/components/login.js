import React, { useState } from "react";
let inputUser = ''
let inputPass = ''

// let userAcepted = 'Pingul'
// let passAcepted = 'password123'

export const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [sesion, setSesion] = useState(false)


    const onChange = (e) => {
        if (e.target.name === 'user'){
            setUser(e.target.value)
            inputUser = e.target.value
        }
        else if(e.target.name === 'password'){
            setPassword(e.target.value)
            inputPass = e.target.value
        }

        console.log(inputUser)
        console.log(inputPass)
    }

    const verification = () => {
        if (inputUser === 'Pingul' && inputPass === '123'){
            setSesion(true)
        }
        else {
            setSesion(false)
        }
    }


    return (
        <>
            <div>login</div>
            <form action="">
                {
                    sesion === true ? 
                    <>
                        <p>Hola {inputUser}! </p>
                    </>
                    :
                    <>
                        <p>User: {user}</p>
                        <p>Password: {password}</p>

                        {/* User */}
                        <div>
                            <label htmlFor="user">Usuario</label>
                            <input type="text" name="user" id="user" onChange={onChange} />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={onChange} />
                        </div>

                        <button onClick={verification}>Iniciar sesion</button>
                    </>
                }
            </form>
        </>
    )
}