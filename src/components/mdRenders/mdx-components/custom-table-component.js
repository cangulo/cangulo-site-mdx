import React from "react"
import { Table } from "react-bootstrap"
import _ from "lodash"

const CustomTable = props => (
  <Table striped bordered hover responsive>
    <thead>
      <tr>
        {props.columns.map((header, index) => {
          const label = header.property ?? header
          return <th key={index}>{_.startCase(label)}</th>
        })}
      </tr>
    </thead>
    <tbody>
      {props.data.map((row, index) => (
        <tr key={index}>
          {props.columns.map((header, index) => {
            const codeType = header.code ?? false
            if (codeType) {
              return (
                <td key={index}>
                  <code>{row[header.property]}</code>
                </td>
              )
            }
            return <td key={index}>{row[header]}</td>
          })}
        </tr>
      ))}
    </tbody>
  </Table>
)

export default CustomTable
