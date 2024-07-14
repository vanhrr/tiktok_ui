import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import clsx from "clsx";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={cx("inner")}>header</div>
    </header>
  );
}

export default Header;
