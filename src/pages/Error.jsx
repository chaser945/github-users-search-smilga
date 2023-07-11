import styled from "styled-components"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <Wrapper>
      <div className="error-page">
        <h1 className="title">404</h1>
        <p className="text">Sorry, The page you tried can not be found.</p>
        <Link to="/">
          <button className="btn btn-back">back home</button>
        </Link>
      </div>
    </Wrapper>
  )
}
export default Error

const Wrapper = styled.div`
  .error-page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    margin: 0;
  }

  .btn-back {
    background-color: var(--clr-purple);
    text-transform: uppercase;
    margin-top: 2em;
  }
`
