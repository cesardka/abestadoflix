import React from 'react';

function FormField({ label, name, type, onChange, value }) {
    return (
        <>
            <label>
                {label}
                {type !== "textarea"
                ? <input
                    name={name}
                    type={type}
                    onChange={onChange}
                    value={value}
                />
                : <textarea
                    name={name}
                    onChange={onChange}
                    value={value}
                />}
            </label>
        </>
    )
}

export default FormField;