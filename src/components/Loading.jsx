import styled from "styled-components"
import loadingGif from "../assets/loading.gif"
const Loading = () => {
  return (
    <Wrapper>
      <img src={loadingGif} alt="loading" />
    </Wrapper>
  )
}
export default Loading

const Wrapper = styled.div`
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3em auto;
`
