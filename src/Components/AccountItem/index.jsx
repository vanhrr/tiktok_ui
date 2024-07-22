import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountItem({ children }) {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/419536339_1436922866931554_1160679505920234182_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=v2wFUnvog9cQ7kNvgEJZ5Rb&_nc_ht=scontent.fhan2-3.fna&oh=00_AYDaYaPrw1J4CrBIH5A1cLHEUReOnZY_-LzXLcNWSU1GWg&oe=669D6EAD"
        className={cx("userAvatar")}
      ></img>
      <span className={cx("userInfo")}>
        <p className={cx("name")}>
          <span>Nguyen Viet Anh</span>
          <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
        </p>
        <p className={cx("userName")}>vanhrr</p>
      </span>
    </div>
  );
}

export default AccountItem;
