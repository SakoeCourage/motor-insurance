"use client";
import { useController, useFormContext } from "react-hook-form";
import IconifyIcon from "../icon";
import React, { useEffect } from "react";
import Select from "react-select";
import { nanoid } from "nanoid";
import { convertParam } from "@app/lib/utils";

interface IOption {
  value: string | number;
  label: string;
}

interface SelectInputProps {
  label: string;
  name: string;
  options: IOption[];
  required?: boolean;
  placeholder?: string;
  helpText?: string;
  readonly?: boolean;
  isMulti?: boolean;
}

const SelectField: React.FC<SelectInputProps> = ({
  label,
  name,
  required,
  options,
  readonly,
  isMulti,
  ...props
}) => {
  const { control, formState } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
  });
  const id = nanoid();
  const inputId = `#${id}-${name}`;

  const borderClass =
    fieldState.isDirty && fieldState.error
      ? "border-red-500"
      : fieldState.isTouched && fieldState.isDirty && !fieldState.error
      ? "border-green-500"
      : "border-gray-300";

  // useEffect(() => {
  //   console.log(formState);
  // }, [formState]);
  return (
    <div className="flex flex-col gap-1.5">
      <label className=" font-light text-gray-800">
        {label}
        {required && <span className="text-red-500 pl-1">*</span>}
      </label>
      <Select
        // styles={{
        //   control: (baseStyles, state) => ({
        //     ...baseStyles,
        //     borderColor: borderClass,
        //   }),
        // }}
        // classNames={{
        //   control: (state) => state.
        // }}

        options={options}
        id={id}
        inputId={inputId}
        name={name}
        isClearable={true}
        isDisabled={readonly}
        isMulti={isMulti}
        value={
          !field.value
            ? null
            : Array.isArray(field.value)
            ? options.filter((obj) => field.value.includes(obj.value))
            : options.find((x) => x.value === field.value)
        }
        onChange={(e: any) =>
          Array.isArray(e)
            ? field.onChange(
                convertParam(
                  e.map((x) => x.value),
                  null,
                  name
                )
              )
            : e === null
            ? field.onChange(convertParam(e, null, name))
            : field.onChange(convertParam(e.value, null, name))
        }
        // onChange={(e) => console.log(e)}
        {...props}
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

export default SelectField;
