import React, { Component } from 'react';
import { Form, FormFragment } from 'react-forms-processor'
import { renderer, FormButton } from 'react-forms-processor-atlaskit'

export class BaseFormComponent extends Component {
    render() {
        return (
            <Form renderer={renderer} defaultFields={fields}>
            </Form>
        )
    }
}

export default BaseFormComponent
