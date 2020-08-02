import styled   from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: all .2s ease;
    transform-origin: center center;

    &:hover,
    &:focus {
      opacity: .5;
    }
`;

Button.defaultProps = {
  to: "",
};

export default Button;