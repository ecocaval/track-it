import { useContext, useState } from "react"
import axios from "axios"

import logo from "./../assets/images/logo.png"
import { Link, useNavigate } from "react-router-dom"

import { LoginContext } from "../contexts/LoginContext"

export default function Register() {

    const { setLoginReceivedInfo } = useContext(LoginContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [loginRequestSent, setLoginRequestSent] = useState(false)

    function validateRegister(e) {
        e.preventDefault()

        const registerUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

        const body = {
            email: email,
            name: name,
            image: image,
            password: password
        }

        axios.post(registerUrl, body)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <>
            <img src={logo} />
            <form onSubmit={(e) => validateRegister(e)}>
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
                <input
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    type="text"
                    disabled={loginRequestSent}
                    placeholder="nome"
                />
                <input
                    value={image}
                    onChange={(e) => setImage(e.currentTarget.value)}
                    type="url"
                    disabled={loginRequestSent}
                    placeholder="foto"
                />
                <button
                    type="submit"
                    disabled={loginRequestSent}
                >
                    Cadastrar
                </button>
            </form>
            <Link to="/">
                Já tem uma conta? Faça login!
            </Link>
        </>
    )
}