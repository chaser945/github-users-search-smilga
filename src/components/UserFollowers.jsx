import styled from "styled-components"
import { useGithubContext } from "../context"

const UserFollowers = () => {
  const { followers } = useGithubContext()

  if (followers.length < 1) {
    return <h2>No Followers Found</h2>
  }

  return (
    <Wrapper>
      <span className="label">Followers</span>
      <div className="followers-div">
        {followers.map((c) => {
          const { avatar_url, login, html_url } = c
          return (
            <article key={c.id}>
              <img className="follower-img" src={avatar_url} alt={login} />
              <div className="content">
                <h3 className="name">{login}</h3>
                <p className="link">{html_url}</p>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}
export default UserFollowers

const Wrapper = styled.div`
  margin-top: 3em;

  .label {
    background-color: white;
    padding: 0.5em 1em;
    border-radius: 5px 5px 0 0;
    color: var(--clr-gray);
  }

  .followers-div {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    background-color: white;
    padding: 2em;
    // margin-top: 4em;
    position: relative;
    max-height: 242px;
    overflow: auto;
  }

  .follower-img {
    width: 50px;
    border-radius: 50%;
  }

  article {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .name,
  .link {
    margin: 0;
  }

  .link {
    color: var(--clr-gray);
  }

  // .followers-div::before {
  //   content: "Followers";
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   transform: translate(0, -100%);
  //   background-color: white;
  //   padding: 0.5em 1em;
  //   color: var(--clr-gray);
  //   border-radius: 5px 5px 0 0;
  // }
`
