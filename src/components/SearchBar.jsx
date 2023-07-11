import styled from "styled-components"
import { useGithubContext } from "../context"
import { useState } from "react"

const SearchBar = () => {
  const {
    handleChange,
    query,
    requests: { total, remaining },
    error,
    fetchUser,
    loading,
  } = useGithubContext()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Wrapper>
      <div className="form-wrapper section-center">
        {error.status ? <h3 className="error-text">{error.msg}</h3> : null}
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Github User"
            className="input"
            onChange={handleChange}
            value={query}
          />
          {loading || error.status ? null : (
            <button className="btn btn-search" onClick={fetchUser}>
              Search
            </button>
          )}
        </form>
        <h4 className="requests">
          Requests: {remaining}/{total}
        </h4>
      </div>
    </Wrapper>
  )
}
export default SearchBar

const Wrapper = styled.div`
  @media (min-width: 900px) {
    .form-wrapper {
      display: grid;
      grid-template-columns: 8fr 1fr;
      align-items: center;
      gap: 1em;
    }

    .input-form {
      height: 60px;
    }

    .input {
      font-size: 1.1rem;
    }

    .btn-search {
      padding: 0.5em 2em;
    }
  }

  .input-form {
    width: 100%;
    border-radius: 5px;
    background-color: white;
    padding: 0.5em;
    display: flex;
  }

  .input {
    border: none;
    width: 70%;
    flex-grow: 1;
  }

  .error-text {
    text-transform: capitalize;
    color: red;
  }

  .btn-search {
    background-color: var(--clr-dark-gray);
  }
`
