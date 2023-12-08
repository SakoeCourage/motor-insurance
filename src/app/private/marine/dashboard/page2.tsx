"use client";
import DateField from "@app/components/forms/DateField";
import Form from "@app/components/forms/Form";
import InputField from "@app/components/forms/InputField";
import SelectField from "@app/components/forms/SelectField";
import React from "react";
import * as z from "zod";

const gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const initialValues = {
  name: "",
  email: "",
  gender: "",
  dob: "",
};
const schema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Enter a valid name")
    .max(7, "Name too long"),
  email: z.string().min(1, "Email is required").email(),
  gender: z.string().min(1, "Gender is required"),
  dob: z.string().min(1, "Date of Birth is required"),
});
const page = () => {
  return (
    <div className="px-4">
      <Form
        initialValues={initialValues}
        schema={schema}
        className="space-y-4"
        onChange={(a, b) => console.log(a, b)}
      >
        <InputField
          name="name"
          label="Name"
          required
          placeholder="Enter name"
        />
        <InputField
          name="email"
          label="Email"
          required
          placeholder="Enter email"
        />
        <SelectField name="gender" label="Gender" options={gender} required />
        <DateField label="Date of Birth" name="dob" required />

        <button type="submit" className="bg-red-300">
          Click
        </button>
        <button type="reset" className="bg-red-300">
          Reset
        </button>
      </Form>
    </div>
  );
};

export default page;
