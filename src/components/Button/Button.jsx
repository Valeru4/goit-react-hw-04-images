import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <div>
      <Btn type="button" onClick={onClick}>
        Load more
      </Btn>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
