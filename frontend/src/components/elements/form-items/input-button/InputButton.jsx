import { inputButton } from "./theme";
import { kebabCase } from "lodash";
import clsx from "clsx";

export const InputButton = ({
  variant = "default",
  type = "text",
  label,
  placeholder,
  hasError = false,
  errorMessage,
  disabled = false,
  buttonContent,
  icon,
  iconRight = false,
  ...rest
}) => {
  return (
    <div className={clsx(inputButton[variant].wrapper)}>
      {label && (
        <label
          className={clsx(inputButton[variant].label)}
          htmlFor={kebabCase(label)}
        >
          {label}
        </label>
      )}
      <div className={clsx(inputButton[variant].input_wrapper.wrapper)}>
        <div className={clsx(inputButton[variant].input_wrapper.container)}>
          <input
            type={type}
            id={kebabCase(label)}
            name={kebabCase(label)}
            className={clsx(
              inputButton[variant].input_wrapper.input.base,
              disabled && inputButton[variant].input_wrapper.input.disabled,
              hasError && "!border-error",
            )}
            placeholder={(label && `Enter Your ${label}`) || placeholder}
            disabled={disabled}
            {...rest}
          />
          {(buttonContent || icon) && (
            <button
              className={clsx(
                inputButton[variant].input_wrapper.button,
                disabled && variant === "transparent" && "!border-l-2",
                disabled &&
                  inputButton[variant].input_wrapper.input.disabled +
                    " !text-primary",
                hasError && "!bg-error !text-white !border-error",
              )}
              disabled={disabled}
            >
              {icon && !iconRight && icon}
              {buttonContent}
              {icon && iconRight && icon}
            </button>
          )}
        </div>

        {hasError && errorMessage && (
          <p
            className={clsx(
              inputButton[variant].input_wrapper.input.errorMessage,
            )}
          >
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};
