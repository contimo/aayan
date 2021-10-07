import * as React from "react"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Top from "../components/Top"
import Layout from "../components/layout"
import Teams from "../components/Teams"
import Patners from "../components/Patners"
import Events from "../components/Events"

const IndexPage = () => (
  <Layout>
    <Top />
    <Patners />
    <Hero />
    <Features />
    <Events />
    <Teams />
  </Layout>
)

export default IndexPage
