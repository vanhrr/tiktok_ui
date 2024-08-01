import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <div className={cx("wrapper")}>
      <button onClick={onBack} className={cx("backBtn")}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <span className={cx(title)}>{title}</span>
    </div>
  );
}

export default Header;
