import { useDispatch } from "react-redux";
import { addContact } from "../../components/redux/contactsOps";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();

    if (!name || !phone) return;

    dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="tel" name="phone" placeholder="Phone" required />
      <button type="submit">Add Contact</button>
    </form>
  );
}
