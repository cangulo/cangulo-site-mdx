import React from "react"
import { Table } from "react-bootstrap"
import _ from "lodash"

const TableRender = props => (
  <Table striped bordered hover responsive="md">
    <thead>
      <tr>
        {/* {props.columns.map((header, index) => (
          <th key={index}>{_.startCase(header)}</th>
        ))} */}
      </tr>
    </thead>
    <tbody>
      {/* {props.data.map((row, index) => (
        <tr key={index}>
          {props.columns.map((header, index) => (
            <td key={index}>{row[header]}</td>
          ))}
        </tr>
      ))} */}
    </tbody>
  </Table>
)

export default TableRender
