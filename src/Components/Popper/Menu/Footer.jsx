import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Footer({ logout }) {
  console.log(logout);
  return (
    <div onClick={logout} className={cx("footer")}>
      <button className={cx("logOutBtn")}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
      <span className={cx("title")}>Log out</span>
    </div>
  );
}

export default Footer;
