import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'


const style = {
  margin: 16,
  textAlign: 'center',
  display: 'inline-block',
}

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
]

export default class SiteListTable extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectable: true,
      displaySelectAll: false,
      adjustForCheckbox: false,
      enableSelectAll: false,
      displayRowCheckbox: false,
    }
  }

  render() {
    return (
      <Table
        selectable={this.state.selectable}
      >
        <TableHeader
          displaySelectAll={this.state.displaySelectAll}
          adjustForCheckbox={this.state.adjustForCheckbox}
          enableSelectAll={this.state.enableSelectAll}
        >
          <TableRow>
            <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
              Select client site to deploy or rollback.
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={this.state.displayRowCheckbox}
        >
          {tableData.map((row, index) => (
            <TableRow key={index} selected={row.selected}>
              <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>{row.status}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}