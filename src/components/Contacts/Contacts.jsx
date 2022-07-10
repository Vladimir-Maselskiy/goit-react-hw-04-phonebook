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
