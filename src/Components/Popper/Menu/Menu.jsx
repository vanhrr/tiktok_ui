import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Wrapper as PopperWrapper } from "../Wrapper";
import Header from "./Header";
import Footer from "./Footer";
const cx = classNames.bind(styles);

function Menu({ children, items, onChange = () => {}, isLogin, logOut }) {
  const [history, setHistory] = useState([{ data: items }]);
  const [titleMenu, setTitleMenu] = useState("");
  const current = history[history.length - 1];

  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("actionList")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title={titleMenu}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}

            <ul>
              {current.data.map((item, index) => {
                const isParent = !!item.subItem;
                return item.to ? (
                  <Link key={index} to={item.to} className={cx("link")}>
                    <li key={index} className={index}>
                      <span>{item.icon}</span>
                      {item.title}
                    </li>
                  </Link>
                ) : (
                  <li
                    key={index}
                    className={index}
                    onClick={() => {
                      if (isParent) {
                        setHistory((prev) => {
                          return [...prev, item.subItem];
                        });
                      }
                      setTitleMenu(item.subItem.title);
                    }}
                  >
                    {!isParent && !item.to ? (
                      <Fragment />
                    ) : (
                      <span>{item.icon}</span>
                    )}
                    {item.title}
                  </li>
                );
              })}
            </ul>
            {isLogin && history.length === 1 ? (
              <Footer logout={logOut} />
            ) : (
              <Fragment />
            )}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
