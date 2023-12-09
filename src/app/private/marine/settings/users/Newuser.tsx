import React from "react";
import InputField from "@app/components/forms/InputField";
import SelectField from "@app/components/forms/SelectField";
import * as z from "zod";
import Form from "@app/components/forms/Form";
import { Button } from "@app/components/ui/button";
const schema = z.object({});

function Newuser() {
  return (
    <Form
      schema={schema}
      className=" py-10 flex flex-col gap-7 px-2 h-full pb-10"
    >
      <InputField
        name=""
        label="Email"
        placeholder="example@email.com"
      />
      <InputField
        name=""
        label="First Name"
        placeholder=""
      />
      <InputField
        name=""
        label="Last Name"
        placeholder=""
      />
      <InputField
        name=""
        label="Other Name"
        placeholder=""
      />
      <InputField
        name=""
        label="Password"
        placeholder=""
        type="password"

      />
      <InputField
        name=""
        label="Confirm Password"
        placeholder=""
        type="password"

      />
      <SelectField
        label="Institution "
        name=""
        options={[]}
      />
      <SelectField
        label="User Role"
        name=""
        options={[]}
      />
      <nav className="mt-auto justify-end flex items-center gap-5">
        <Button className="" variant="outline">
          Cancel
        </Button>
        <Button className="px-5" variant="success">
          Save
        </Button>
      </nav>
    </Form>
  );
}

export default Newuser;
