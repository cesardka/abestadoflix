import React                     from 'react';
import PropTypes                 from 'prop-types';
import { Wrapper, Label, Input } from './styles.js';

function FormField({ label, name, type, onChange, value }) {
    const isTypeTextArea = type === 'textarea';
    const tag = isTypeTextArea ? 'textarea' : 'input';

    return (
        <Wrapper>
            <Label>
                <Input
                    as={tag}
                    name={name}
                    type={type}
                    onChange={onChange}
                    value={value}
                    />
                <Label.Text>
                    {label}
                </Label.Text>
            </Label>
        </Wrapper>
    )
}

FormField.defaultProps = {
    type: "text",
    value: "",
};

FormField.propTypes = {
    label:    PropTypes.string.isRequired,
    name:     PropTypes.string.isRequired,
    type:     PropTypes.string,
    value:    PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default FormField;