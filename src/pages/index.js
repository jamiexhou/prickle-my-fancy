// Step 1: Import React
import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hello there! I'm Jamie and this is a blog I started, with the intention of 
        learning about how to develop websites. And what better topics to discuss, than my newest quarantine-driven obsession, 
        growing houseplants! I'm going to try to weekly-ish posts about whats going on in my hobby, as well as updates for the
        results. Hopefully, other plant parents can enjoy and find insight in this content that I put out!</p>
      <StaticImage
        alt="A multi-head bluish purple echevaria in a terracotta pot on a blue floor."
        src="../images/echevaria afterglow edited.jpg"
      />
      <p>The above image is of a succulent I imported under the name Echevaria CV Afterglow! It likes very high light and 
        (for an echevaria) surprisingly frequent waterings! The farina also rubs off easily.
      </p>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage