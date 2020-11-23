import React from "react"
import AboutMeArea from "../components/aboutme/aboutme-area"
import Layout from "../components/layout/layout"

const ContactPage = ({ location }) => (
  <div>
    <Layout title="About" location={location}>
      <AboutMeArea />
      {/* <div>
        HOLA
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="80e4c7dd-56c7-451a-8e76-d138e1158e75"
          data-share-badge-host="https://www.youracclaim.com"
        ></div>
        <script
          type="text/javascript"
          async
          src="https://cdn.youracclaim.com/assets/utilities/embed.js"
        ></script>
      </div> */}
    </Layout>
  </div>
)

export default ContactPage
