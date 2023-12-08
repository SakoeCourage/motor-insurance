import React from "react";
import InputField from "@app/components/forms/InputField";
import SelectField from "@app/components/forms/SelectField";
import * as z from "zod";
import Form from "@app/components/forms/Form";
import { Button } from "@app/components/ui/button";
import ImageUpload from "../../Lcomps/Imageupload";
const schema = z.object({});

function Newncd() {
  return (
    <Form
      schema={schema}
      className=" py-10 flex flex-col gap-7 px-2 h-full pb-10"
    >
      <InputField
        name="VehicleRegisteration"
        label="Vehicle Registeration"
        placeholder="Enter Vehicle Registeration"
      />
      <InputField
        name="Customer Name"
        label="Customer Name"
        placeholder="Enter Customer Name"
      />
      <SelectField
        label="ID Types"
        name=""
        options={[{ label: "Driver's License", value: "DriversLicense" }]}
      />

      <InputField
        name="ID Number"
        label="ID Number"
        placeholder="Enter ID Number"
      />
      <InputField name="Current Rate" label="Current Rate" placeholder="0.00" />

      <div className=" grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border">
        <nav className=" flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500">
          <span className=" text-gray-500">ID Image (PNG,JPEG)</span>
        </nav>
        <ImageUpload />
        <nav className=" flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500">
          <span className="text-gray-500">Other Supporting Documents</span>
        </nav>
        <ImageUpload />
      </div>

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

export default Newncd;
