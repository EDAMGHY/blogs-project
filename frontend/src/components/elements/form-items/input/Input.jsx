import { input } from "./theme";
import { kebabCase } from "lodash";
import clsx from "clsx";
import { forwardRef } from "react";

export const Input = forwardRef(
  (
    {
      variant = "default",
      type = "text",
      label,
      placeholder,
      hasError = false,
      errorMessage,
      name,
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={clsx(input[variant].wrapper)}>
        {label && (
          <label
            className={clsx(input[variant].label)}
            htmlFor={kebabCase(label)}
          >
            {label}
          </label>
        )}
        <div className={clsx(input[variant].input_wrapper.wrapper)}>
          <input
            ref={ref}
            type={type}
            id={name}
            name={name}
            className={clsx(
              input[variant].input_wrapper.input.base,
              disabled && input[variant].input_wrapper.input.disabled,
              hasError && "!bg-error/20 !border-error",
            )}
            placeholder={(label && `Enter Your ${label}`) || placeholder}
            disabled={disabled}
            {...rest}
          />
          {hasError && errorMessage && (
            <p
              className={clsx(input[variant].input_wrapper.input.errorMessage)}
            >
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";
