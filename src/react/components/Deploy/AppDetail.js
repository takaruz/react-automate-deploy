/**
 * Created by takaruz on 10/3/16.
 */
import React, {PropTypes} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import DetailTable from './DetailTable'

const CardAppDetail = ({
  client, detail, expanded
}) => (
  <Card style={{marginTop: 16, marginBottom: 16}}>
    <CardHeader
      title="Summary Detail"
      subtitle="expand to see application detail."
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <DetailTable
        client={client}
        detail={detail}
      />
    </CardText>
  </Card>
)

// Assign props to components
CardAppDetail.propTypes = {
  client: PropTypes.object.isRequired,
  detail: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired
}

export default CardAppDetail