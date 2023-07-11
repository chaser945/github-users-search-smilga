import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { GithubProvider } from "./context"
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-7rnj1dlvdgblccg8.us.auth0.com"
    clientId="YxJJe4Oab1E798dREzj8ds923ufw9F6J"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
)
