import PropTypes from 'prop-types';
import ListItems from 'components/ListItems/ListItems';
import { Box } from 'components/Form/Form.styled';
import { ContactsList } from './Contacts.styled';

export function Contacts(props) {
  return (
    <Box>
      <ContactsList>
        <ListItems {...props} />
      </ContactsList>
    </Box>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
