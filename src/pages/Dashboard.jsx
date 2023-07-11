import {
  Navbar,
  SearchBar,
  UserInfo,
  UserCard,
  UserFollowers,
  Loading,
} from "../components/index"

import {
  PieChart,
  DoughnutChart,
  BarChart,
  ColumnChart,
} from "../components/charts"

import styled from "styled-components"
import { useGithubContext } from "../context"
import { useState } from "react"

const Dashboard = () => {
  const { repos, loading } = useGithubContext()
  // console.log(repos)

  // const testRepos = repos.map((c) => {
  //   return { label: c.name }
  // })

  // console.log(testRepos)

  const languagesObj = repos.reduce((acc, curr) => {
    const { language, stargazers_count } = curr
    if (!language) {
      return acc
    }
    if (!acc[language]) {
      acc[language] = {
        label: language,
        value: 1,
        stars: stargazers_count || 0,
      }
    } else {
      acc[language] = {
        ...acc[language],
        value: acc[language].value + 1,
        stars: acc[language].stars + stargazers_count || 0,
      }
    }
    return acc
    // console.log(acc)
  }, {})

  // console.log(languagesObj)

  const languagesArr = Object.values(languagesObj)
    .map((c) => {
      return {
        label: c.label,
        value: c.value,
      }
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)
  // console.log(languagesArr)

  const starsArr = Object.values(languagesObj)
    .map((c) => {
      return {
        label: c.label,
        value: c.stars,
      }
    })
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5)

  // console.log(starsArr)

  // STARS AND FORKS FUNCTIONALITY
  // ============================

  const { stars, forks } = repos.reduce(
    (acc, curr) => {
      const { stargazers_count, forks, id, name } = curr
      acc.stars[id] = { label: name, value: stargazers_count }
      acc.forks[id] = { label: name, value: forks }
      return acc
    },
    { stars: {}, forks: {} }
  )

  // console.log(stars)

  const columnChartStars = Object.values(stars)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)
  const barChartForks = Object.values(forks)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)

  return (
    <Wrapper>
      <Navbar />
      <div className="content-wrapper">
        <SearchBar />
        {loading ? (
          <Loading />
        ) : (
          <>
            <UserInfo />
            <div className="user-wrapper section-center">
              <UserCard />
              <UserFollowers />
            </div>
            <div className="chart-wrapper section-center">
              <PieChart languagesArr={languagesArr} />
              <ColumnChart data={columnChartStars} />
              <DoughnutChart starsArr={starsArr} />
              <BarChart data={barChartForks} />
            </div>
          </>
        )}
      </div>
    </Wrapper>
  )
}
export default Dashboard

const Wrapper = styled.div`
  .chart-wrapper {
    margin-top: 2em;
    display: grid;
    gap: 1em;
  }

  .content-wrapper {
    margin: 0 7px;
  }

  @media (min-width: 700px) {
    .user-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1em;
    }
  }
`
