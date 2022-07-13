import PropTypes from 'prop-types';
import { ListItem } from './ListItems.styled';

export default function ListItems(props) {
  const { contacts, onDelete } = props;
  return (
    <>
      {contacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <ListItem key={id}>
            {name} {number}
            <button id={id} onClick={() => onDelete(id)}>
              Delete
            </button>
          </ListItem>
        );
      })}
    </>
  );
}

ListItems.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
