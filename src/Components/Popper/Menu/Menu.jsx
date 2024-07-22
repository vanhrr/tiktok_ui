import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import { Wrapper as PopperWrapper } from "../Wrapper";

const cx = classNames.bind(styles);

function Menu({ children, items }) {
  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("actionList")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <ul>
              {items.map((item, index) =>
                item.to ? (
                  <Link to={item.to} className={cx("link")}>
                    <li key={index}>
                      <span>{item.icon}</span>
                      {item.title}
                    </li>
                  </Link>
                ) : (
                  <li key={index}>
                    <span>{item.icon}</span>
                    {item.title}
                  </li>
                )
              )}
            </ul>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
