import PropTypes from "prop-types";
import { forwardRef } from "react";
import { clsx } from "clsx";

import { Link } from "../link/Link";
import { button } from "./theme";

const CustomButton = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export const Button = forwardRef(
  (
    {
      children,
      type = "button",
      className = "",
      variant = "primary",
      size = "normal",
      pill = false,
      outline = false,
      disabled = false,
      icon,
      iconRight = null,
      href = null,
      target = null,
      ...props
    },
    ref,
  ) => {
    const Button = href ? Link : CustomButton;
    return (
      <Button
        ref={ref}
        rel={href && target === "_blank" ? "noopener" : null}
        disabled={disabled}
        type={href ? null : type}
        href={href}
        target={target}
        className={clsx(
          button.base,
          pill && button.pill,
          button.size[size],
          !outline ? button.variants[variant] : button.outlineVariants[variant],
          disabled && button.disabled,
          outline && disabled && button.outlineVariants?.disabled[variant],
          className,
        )}
        {...props}
      >
        {icon && !iconRight && icon}
        {children}
        {icon && iconRight && icon}
      </Button>
    );
  },
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.oneOf(["submit", "button"]),
  size: PropTypes.oneOf(["normal", "small", "large", "xlarge", "icon"]),
  variant: PropTypes.oneOf([
    "custom",
    "primary",
    "secondary",
    "success",
    "warning",
    "info",
    "error",
    "disabled",
  ]),
  className: PropTypes.string,
  target: PropTypes.string,
  pill: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  iconRight: PropTypes.bool,
};

Button.displayName = "Button";
