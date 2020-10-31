import React from "react"

const PostReferences = ({ references }) => {
  if (references && references.length > 0) {
    return (
      <section>
        <hr></hr>
        <h2>References</h2>
        <div style={{ marginTop: "10px" }}>
          {references.map((refPairValue, index) => (
            <div key={index}>
              <p>
                <a href={refPairValue[1]}>{refPairValue[0]}</a>
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  return <div></div>
}
export default PostReferences
