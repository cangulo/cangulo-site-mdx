import React from "react"
import { Container, Pagination, Row } from "react-bootstrap"
import _ from "lodash"

const PaginationList = ({ numberOfPages, pageNumber, preffixPath }) => {
  if (numberOfPages === 1) {
    return ""
  }

  const pages = _.range(0, numberOfPages)
    .filter(x => x >= 0 && x < numberOfPages)
    .map(x => {
      return {
        pageNumberHuman: x + 1,
        url: x === 0 ? `${preffixPath}` : `${preffixPath}/${x + 1}`,
        active: x === pageNumber,
      }
    })

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Pagination>
          {pages.map(page => {
            return (
              <Pagination.Item
                key={page.pageNumberHuman}
                href={page.url}
                active={page.active}
              >
                {page.pageNumberHuman}
              </Pagination.Item>
            )
          })}
        </Pagination>
      </Row>
    </Container>
  )
}

export default PaginationList
