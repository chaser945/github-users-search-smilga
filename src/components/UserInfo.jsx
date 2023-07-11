import styled from "styled-components"
import { useGithubContext } from "../context"
import { RiGitRepositoryFill } from "react-icons/ri"
import { FiUsers } from "react-icons/fi"
import { AiOutlineUserAdd } from "react-icons/ai"
import { VscGistSecret } from "react-icons/vsc"

const UserInfo = () => {
  const { user } = useGithubContext()
  const {
    followers,
    following,
    public_gists: gists,
    public_repos: repos,
  } = user
  const userInfoArr = [
    {
      id: 1,
      value: repos,
      label: "repos",
      icon: <RiGitRepositoryFill className="icon" />,
      color: "#efb428",
      backgroundColor: "#fefbea",
    },
    {
      id: 2,
      value: followers,
      label: "followers",
      icon: <FiUsers className="icon" />,
      color: "#da4a90",
      backgroundColor: "#ffe0f0",
    },
    {
      id: 3,
      value: following,
      label: "following",
      icon: <AiOutlineUserAdd className="icon" />,
      color: "#2badba",
      backgroundColor: "#e0fcff",
    },
    {
      id: 4,
      value: gists,
      label: "gists",
      icon: <VscGistSecret className="icon" />,
      color: "#5d55fa",
      backgroundColor: "#e6e6fe",
    },
  ]
  // console.log(user)
  return (
    <Wrapper>
      <div className="user-info section-center">
        {userInfoArr.map((c) => {
          const { id, value, label, icon, color, backgroundColor } = c
          return (
            <article className="info-card" key={id}>
              <span style={{ backgroundColor, color }} className="icon-wrapper">
                {icon}
              </span>
              <h3>{value}</h3>
              <p>{label}</p>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}
export default UserInfo

const Wrapper = styled.section`
  .user-info {
    display: grid;
    row-gap: 1em;
    margin-top: 2em;
  }

  .info-card {
    display: grid;
    grid-template-columns: 50px 1fr;
    align-items: center;
    column-gap: 2em;
    background-color: white;
    padding: 1em;
    border-radius: 10px;
  }

  .info-card {
    h3 {
      margin: 0;
    }
    p {
      margin: 0.5em 0;
      text-transform: capitalize;
    }
  }
  .icon-wrapper {
    height: 50px;
    grid-row: 1 / 3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 600px) {
    .user-info {
      grid-template-columns: 1fr 1fr;
      column-gap: 1em;
    }

    @media (min-width: 1000px) {
        .user-info {
          grid-template-columns: repeat(4, 1fr);
          column-gap: 1em;
        }
  }
`
