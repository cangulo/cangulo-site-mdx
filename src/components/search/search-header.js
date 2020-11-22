import React from "react"
import { navigate } from "gatsby"
import { Form, FormControl } from "react-bootstrap"
import _ from "lodash"

const SearchFormHeader = () => (
  <Form
    action="/search"
    method="GET"
    onSubmit={event => {
      event.preventDefault()
      const queryText = event.target["queryText"].value
      if (_.isEmpty(queryText)) {
        navigate(`/search`)
      }
      navigate(`/search?s=${queryText}`, {
        state: { query: queryText },
        replace: true,
      })
    }}
    inline
  >
    <FormControl
      type="text"
      placeholder="Search"
      name="queryText"
      className="mr-sm-2"
    />
  </Form>
)

export default SearchFormHeader
