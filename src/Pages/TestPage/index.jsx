import React from 'react'
import Layout from '../../Components/Layout'
import ExploreMegaMenu from '../../Components/DropDowns/ExploreMegaMenu'
import MegaMenu from '../../Components/DropDowns/MegaMenu'

const TestPage = () => {
  return (
   <>
   <Layout>

    <div className="top-gap"></div>

    <h2>Test Page</h2>

    {/* <ExploreMegaMenu /> */}

    <MegaMenu />

   </Layout>
   </>
  )
}

export default TestPage