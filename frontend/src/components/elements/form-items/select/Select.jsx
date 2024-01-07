import clsx from "clsx";
import { forwardRef, useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Transition } from "@headlessui/react";

const listItems = [
  {
    value: "Agadir",
    content: "Agadir",
  },
  {
    value: "Casablanca",
    content: "Casablanca",
  },
  {
    value: "Paris",
    content: "Paris",
  },
];

export const Select = forwardRef(
  (
    {
      selected,
      setSelected,
      variant = "default",
      icon,
      iconRight = true,
      list = listItems,
      label,
      name,
      hasError = false,
      errorMessage,
      className,
      ...rest
    },
    ref,
  ) => {
    console.log(variant);
    const options = [
      {
        value: "",
        content: "Select an option",
      },
      ...list,
    ];

    const selectRef = useRef();
    const [showSelect, setShowSelect] = useState(false);

    const toggleSelect = () => {
      setShowSelect((prev) => !prev);
    };

    const handleChangeSelect = (item) => {
      setSelected(item);
      closeSelect();
    };

    const closeSelect = () => {
      setShowSelect(false);
    };

    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
          closeSelect();
        }
      };

      document.addEventListener("click", handleOutsideClick, true);
      return () => {
        document.removeEventListener("click", handleOutsideClick, true);
      };
    }, []);

    return (
      <div
        ref={selectRef}
        className={clsx("relative min-w-[200px] max-w-full mb-4", className)}
      >
        {label && (
          <label
            className={clsx("inline-block mb-2 capitalize")}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <div className="w-full relative">
          {icon && icon}

          <input
            ref={ref}
            type="hidden"
            id={name}
            name={name}
            value={selected}
            {...rest}
          />
          <button
            onClick={toggleSelect}
            className={clsx(
              "w-full justify-between inline-flex gap-2 items-center bg-secondary py-2 px-3 text-primary border-2 transition-all duration-300",
              showSelect ? "border-primary" : "border-transparent",
            )}
          >
            <span>{selected ? selected : "Select an option"}</span>

            {iconRight && (
              <FiChevronDown
                className={clsx(
                  "w-5 h-5 text-inherit transition-all ease-out duration-300",
                  showSelect && "-rotate-180",
                )}
              />
            )}
          </button>

          <Transition
            as={"ul"}
            show={showSelect}
            enter="transition origin-top ease-out duration-300"
            enterFrom="transform origin-top opacity-0 scale-75"
            enterTo="transform origin-top opacity-100 scale-100"
            leave="transition origin-top ease-in duration-300"
            leaveFrom="transform origin-top opacity-100 scale-100"
            leaveTo="transform origin-top opacity-0 scale-75"
            className="min-w-full bg-secondary border-2 border-primary divide-y-2 divide-primary absolute left-1/2 -translate-x-1/2 top-[50px] z-[2]"
          >
            {options?.map((item, index) => (
              <li
                key={index}
                onClick={() => handleChangeSelect(item)}
                className="py-3 px-3 hover:bg-primary text-primary hover:text-secondary transition-all duration-300 cursor-pointer"
                data-value={item.value}
              >
                {item.content}
              </li>
            ))}
          </Transition>
        </div>
        {hasError && errorMessage && (
          <p
            className={clsx(
              "absolute z-[1] -bottom-5 left-0 text-error text-xs font-normal inline-block",
            )}
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
