import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  selectNameFilter,
} from "../../components/redux/contactsSlice";
import css from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      placeholder="Search contacts..."
      className={css.input}
    />
  );
}
