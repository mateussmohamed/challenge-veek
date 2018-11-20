import React from 'react'
import styled from 'styled-components'

import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { Button, Typography } from 'atoms'
import { Field } from 'molecules'

const FormApplicationStyled = styled.form`
  width: 100%;
`

const FormApplication = () => (
  <Grid>
    <FormApplicationStyled>
      <Row style={{ marginBottom: 50 }}>
        <Col xs={12}>
          <Typography variant="title2">Apply</Typography>
          <Typography variant="subtitle2">
            Thought experiments (Gedankenexperimenten) are “facts” in the sense{' '}
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={5}>
          <Field label="First Name" name="firstName" onChange={() => null} />
        </Col>
        <Col xs={12} sm={5} smOffset={2}>
          <Field label="Name" name="name" onChange={() => null} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={5}>
          <Field label="Email" name="email" onChange={() => null} />
        </Col>
        <Col xs={12} sm={5} smOffset={2}>
          <Field
            label="Telephone Number"
            name="telephone"
            onChange={() => null}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Field
            label="Upload your CV"
            name="cv"
            type="file"
            onChange={() => null}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Field
            label="Comments"
            name="comments"
            type="textarea"
            onChange={() => null}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Typography variant="legend">
            Thought experiments (Gedankenexperimenten) are “facts” in the sense
            that they have a “real life” correlate in the form of
            electrochemical activity in the brain.
          </Typography>
        </Col>
      </Row>
      <Row end="xs" style={{ marginTop: 80 }}>
        <Col>
          <Button secondary>Validate</Button>
        </Col>
      </Row>
    </FormApplicationStyled>
  </Grid>
)

export default FormApplication
