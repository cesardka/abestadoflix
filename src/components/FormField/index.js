import React                     from 'react';
import PropTypes                 from 'prop-types';
import { Wrapper, Label, Input } from './styles.js';

function FormField({ label, name, type, onChange, value, suggestions }) {
    const isTypeTextArea = type === 'textarea';
    const tag = isTypeTextArea ? 'textarea' : 'input';
    const hasSuggestion = Boolean(suggestions.length);

    return (
        <Wrapper>
            <Label>
                <Input
                    as={tag}
                    name={name}
                    type={type}
                    onChange={onChange}
                    value={value}
                    list={`suggestionFor_${name}`}
                    />
                <Label.Text>
                    {label}
                </Label.Text>
                { hasSuggestion && (
                    <datalist id={`suggestionFor_${name}`}>
                        { suggestions.map((suggestion) => {
                            return (
                                <option value={suggestion} key={`suggestionFor_${suggestion}_option`}>
                                    {suggestion}
                                </option>);
                        })}
                    </datalist>
                )}
            </Label>
        </Wrapper>
    )
}

FormField.defaultProps = {
    type: "text",
    value: "",
    suggestions: [],
};

FormField.propTypes = {
    label:    PropTypes.string.isRequired,
    name:     PropTypes.string.isRequired,
    type:     PropTypes.string,
    value:    PropTypes.string,
    onChange: PropTypes.func.isRequired,
    suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;