"use client";
import React from "react";
import { useController, useFormContext } from "react-hook-form";
import IconifyIcon from "../icon";

interface TextInputProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  helpText?: string;
  rows?: number;
}

const TextAreaField: React.FC<TextInputProps> = ({
  label,
  name,
  required,
  helpText,
  placeholder,
  rows = 3,
  ...props
}) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
  });

  // const didFocus = fieldState.isDirty;

  // useEffect(() => {
  //   // console.log(name);
  //   console.log(formState.errors);
  //   console.log(name, fieldState.error);
  //   console.log('formDirty', formState.isDirty);
  // }, [fieldState]);

  // const borderClass = fieldState.isTouched
  //   ? fieldState.error
  //     ? "border-red-500"
  //     : "border-green-500"
  //   : "border-gray-300";

  const borderClass = fieldState.error
    ? "border-red-500"
    : fieldState.isDirty && !fieldState.error
    ? "border-green-500"
    : "border-gray-300";
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-gray-800 font-light">
        {label}
        {required && <span className="text-red-500 pl-1">*</span>}
      </label>
      <textarea
        {...props}
        {...field}
        placeholder={placeholder}
        className={`p-2 rounded-[5px] text-black border ${borderClass} shadow-sm`}
        rows={rows}
        // onChange={(e) => field.onChange(e.target.value)}
      />
      {fieldState.error && (
        <label className="text-red-500 flex items-center gap-1 text-sm pt-1">
          <IconifyIcon icon="solar:danger-circle-bold-duotone" fontSize={15} />
          {fieldState.error.message?.toString()}
        </label>
      )}
    </div>
  );
};

export default TextAreaField;
