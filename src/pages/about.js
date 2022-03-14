// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
        <p>My name is Jamie and I am a 22 year old torontonian. As someone who spends a layout
          of time outside, I was really slowly being driven insane thanks to the quarantines. So 
          I dedicated my frenzied energy into figuring out how to bring the outside, well, inside!
          I'm going to attempt to write weekly ish blog posts about the state of my plants, new plant 
          projects, updates on projects, things I'm trying out, and just whatever strikes my fancy. 
        </p>
        <p>I am excited to share all of my musing with everyone else in the plant community and 
          hopefully together we can grow bigger and happier plants!
        </p>
        <p>This project was built using Gatsby and Github Pages. I would like to thank everyone
          who helped me with this project and put up with me as I struggled.
        </p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage