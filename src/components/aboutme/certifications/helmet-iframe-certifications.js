import React from "react"
import { Helmet } from "react-helmet"

const HelmetIframeScripts = () => (
  <Helmet>
    <script
      type="text/javascript"
      src="https://cdn.youracclaim.com/assets/utilities/embed.js"
    ></script>
  </Helmet>
)

export default HelmetIframeScripts
