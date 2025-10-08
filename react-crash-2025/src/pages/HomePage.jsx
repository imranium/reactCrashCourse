import React from 'react'
import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <div>
        <Hero title="Become a React Dev" subtitle="This is Subtitle"/>
        <HomeCards />
        <JobListings isHome={true}/>
        <ViewAllJobs />
    </div>
  )
}

export default HomePage