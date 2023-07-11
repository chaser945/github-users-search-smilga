import styled from "styled-components"
import freelancingImg from "../assets/freelancing-clipart.svg"
import { useAuth0 } from "@auth0/auth0-react"

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <Wrapper>
      <div className="login-page">
        <img
          src={freelancingImg}
          alt="worker on laptop"
          className="freelance-img"
        />
        <h1 className="title">Github User</h1>
        <button className="btn btn-login" onClick={() => loginWithRedirect()}>
          Log In / Sign Up
        </button>
      </div>
    </Wrapper>
  )
}
export default Login

const Wrapper = styled.section`
  .login-page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .freelance-img {
    max-width: 200px;
  }

  .title {
    font-weight: 700;
  }

  .btn-login {
    text-transform: uppercase;
    background-color: var(--clr-dark-gray);
  }
`
