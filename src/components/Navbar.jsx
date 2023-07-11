import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react"

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0()
  // console.log(useAuth0())
  return (
    <Wrapper>
      <nav className="nav-bar section-center">
        {isAuthenticated || user ? (
          <div className="logged-in">
            <h3 className="greetings">Welcome! {user.name}</h3>
            <img className="profile-img" src={user.picture} alt={user.name} />
            <button
              className="btn btn-logout"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </div>
        ) : (
          <button className="btn btn-login" onClick={() => loginWithRedirect()}>
            Login
          </button>
        )}
      </nav>
    </Wrapper>
  )
}
export default Navbar

const Wrapper = styled.div`
  background-color: white;

  .nav-bar {
    margin-bottom: 1em;
    padding: 1em;
    display: flex;
  }

  .logged-in {
    display: flex;
    align-items: center;
    gap: 1em;
    width: 100%;
  }

  .profile-img {
    width: 40px;
    border-radius: 50%;
    margin-left: auto;
  }

  .greetings {
    // color: var(--clr-purple);
  }

  .btn-logout,
  .btn-login {
    background-color: var(--clr-purple);
  }

  .btn-login {
    margin-left: auto;
  }

  @media (max-width: 360px) {
    .nav-bar {
      padding: 0.5em;
    }

    .logged-in {
      gap: 0.5em;
    }

    .btn-logout,
    .btn-login {
      padding: 0.5em 0.7em;
    }

    .greetings {
      font-size: 1.1rem;
    }

    .profile-img {
      width: 40px;
    }
  }
`
