import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../components/redux/contactsSlice";
import { deleteContact } from "../../components/redux/contactsOps";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <span>
            {contact.name}: {contact.phone}
          </span>
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
