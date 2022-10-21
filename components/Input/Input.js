import React, { useRef, useState, useEffect } from "react";
import InputStyles from "./Input.styled";
import { AnimatePresence, motion } from "framer-motion";

export default function Input({
  title,
  name,
  type,
  autoComplete,
  pattern,
  autoFocus,
  required,
  className,
  onChange,
  hasError,
  getInputProps,
  variant,
  onInput,
  error,
  maxLength,
  defaultValue,
  fields,
  setField,
  onBlur,
  onFocus,
  submit,
  placeholder
}) {
  const elem = useRef();
  const [value, setValue] = useState(defaultValue || "");
  const [hasValue, setHasValue] = useState(false);

  const contentTransition = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 }
  };

  const onTyping = e => {
    // if (onInput) {
    //   onInput(e, elem.current.value);
    // }
    // if (elem.current && elem.current.value !== "") {
    //   setHasValue(true);
    //   return;
    // }
    // setHasValue(false);
  };

  const onValueChange = e => {
    if (e.target.key === "Enter") {
      e.preventDefault();
    }
    setValue(elem.current.value);
    if (onChange) {
      onChange(e);
    }
    if (onInput) {
      onInput(e, elem.current.value);
    }
    if (elem.current && elem.current.value !== "") {
      setHasValue(true);
      return;
    }
    setHasValue(false);
  };

  useEffect(() => {
    elem.current.addEventListener("input", onTyping);

    if (defaultValue && defaultValue !== "") {
      if (fields && setField) {
        const newField = { ...fields };
        newField[name] = defaultValue;
        setField(newField);
      }
      setHasValue(true);
    }
    return () => {
      if (elem.current) {
        elem.current.removeEventListener("input", onTyping);
      }
    };
  }, []);

  const reset = e => {
    e.preventDefault();
    setValue("");
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      if (submit !== undefined) {
        submit();
      }
      e.preventDefault();
    }
  };

  return (
    <InputStyles
      className={`input-container ${className || ""} ${variant || ""}`}
    >
      <label htmlFor={`${name}`}>
        <input
          ref={elem}
          className={`${name}-input ${hasError ? "has-error" : ""} ${
            hasValue ? "has-value" : ""
          }`}
          name={name}
          type={type || "text"}
          autoComplete={autoComplete}
          autoFocus={autoFocus && autoFocus}
          required={required && required}
          onChange={onValueChange}
          onKeyDown={onKeyDown}
          onBlur={e => {
            if (onBlur) onBlur(e);
          }}
          onFocus={e => {
            if (onFocus) onFocus(e);
          }}
          pattern={pattern}
          maxLength={maxLength}
          value={value}
          placeholder={placeholder}
          {...(getInputProps ? getInputProps() : [])}
        />
        <span className="label-title">{title}</span>
      </label>
      {hasError && error ? (
        <AnimatePresence>
          <motion.span className="error" animate {...contentTransition}>
            {error}
          </motion.span>
        </AnimatePresence>
      ) : null}
      <button className="btn reset" aria-hidden="true" onClick={reset}></button>
    </InputStyles>
  );
}
