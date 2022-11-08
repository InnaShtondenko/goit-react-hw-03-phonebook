import { PropTypes } from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export function Filter({ onInputCallback }) {
  return (
    <FilterLabel>
      Filter contacts by name
      <FilterInput onInput={e => onInputCallback(e.target.value)} />
    </FilterLabel>
  );
}

Filter.propTypes = {
  onInputCallback: PropTypes.func.isRequired,
};