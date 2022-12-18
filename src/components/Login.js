import { useContext, useState } from "react"
import axios from "axios"

import logo from "./../assets/images/logo.png"
import { Link, useNavigate } from "react-router-dom"

import { LoginContext } from "../contexts/LoginContext"

export default function Login() {

    const { setLoginReceivedInfo } = useContext(LoginContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginRequestSent, setLoginRequestSent] = useState(false)

    const loginRequisition =  {
        email: email,
        password: password
    }

    const loginUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

    const navigate = useNavigate()

    function validateLogin(e) {
        e.preventDefault()
        axios.post(loginUrl, loginRequisition)
            .then(response => {
                console.log(response)
                setLoginReceivedInfo(response.data)
                navigate('/hoje')
            })
            .catch(error => {
                console.log(error)
            })
        
    }

    console.log(email);
    console.log(password);

    return (
        <>
            <img src={logo} />
            <form onSubmit={(e) => validateLogin(e)}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    type="email"
                    disabled={loginRequestSent}
                    placeholder="email"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    type="password"
                    disabled={loginRequestSent}
                    placeholder="senha"
                />
                <button
                    type="submit"
                    disabled={loginRequestSent}
                >
                    Entrar
                </button>
            </form>
            <Link to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </Link>
        </>
    )
}