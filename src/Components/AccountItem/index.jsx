import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function AccountItem({ data }) {
  return (
    <Link to={data.nickname} className={cx("link")}>
      <div className={cx("wrapper")}>
        <img src={data.avatar} className={cx("userAvatar")}></img>
        <span className={cx("userInfo")}>
          <p className={cx("name")}>
            <span>{data.full_name}</span>
            {data.tick && (
              <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
            )}
          </p>
          <p className={cx("userName")}>{data.nickname}</p>
        </span>
      </div>
    </Link>
  );
}

export default AccountItem;
