import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  outline,
  small,
  medium,
  large,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = "Link";
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  console.log(typeof primary);
  const classes = cx("wrapper", { primary, medium });
  return (
    <Comp className={classes}>
      {/* adding span to easily control when add icons or something else in the future */}
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
