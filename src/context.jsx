import { createContext, useContext, useState, useEffect } from "react"
import mockUser from "./mockData/mockUser"
import mockRepos from "./mockData/mockRepos"
import mockFollowers from "./mockData/mockFollowers"
import axios from "axios"

const GithubContext = createContext()

const GithubProvider = ({ children }) => {
  const [user, setUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  const baseUrl = "https://api.github.com"
  // HANDLE CHANGE
  // =============
  const [query, setQuery] = useState("")
  const [requests, setRequests] = useState({ total: 60, remaining: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ status: false, type: "", msg: "" })

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const fetchRequests = async () => {
    setLoading(true)
    try {
      const res = await axios(`${baseUrl}/rate_limit`)
      const { data } = res
      const {
        rate: { limit, remaining },
      } = data
      setRequests({ total: limit, remaining })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    // console.log(limit, remaining)
  }

  const checkRequests = () => {
    if (requests.remaining === 0) {
      setError({
        status: true,
        type: "request",
        msg: "You have run out of requests. Please! try again later.",
      })
    }
  }

  useEffect(() => {
    fetchRequests()
  }, [])

  useEffect(() => {
    checkRequests()
  }, [requests])

  // FETCH USER FUNCTIONALITY
  // =======================

  const fetchUser = () => {
    setLoading(true)
    setError({ status: false, type: "", msg: "" })
    axios(`${baseUrl}/users/${query}`)
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          setUser(response.data)
          return response.data
        }
      })
      .then((data) => {
        // Promise settle start
        Promise.allSettled([axios(data.followers_url), axios(data.repos_url)])
          .then((res) => {
            console.log(res)
            const [followersRes, reposRes] = res
            setFollowers(followersRes.value.data)
            setRepos(reposRes.value.data)
            setLoading(false)
          })
          .catch((err) => {
            console.log(err)
            setLoading(false)
          })
        // promise settle end
      })
      .catch((error) => {
        console.log(error)
        setError({
          status: true,
          type: "invalid_user",
          msg: "invalid username !",
        })
        setLoading(false)
      })
  }

  return (
    <GithubContext.Provider
      value={{
        user,
        repos,
        followers,
        handleChange,
        query,
        requests,
        loading,
        error,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

const useGithubContext = () => useContext(GithubContext)

export { GithubProvider, useGithubContext }
