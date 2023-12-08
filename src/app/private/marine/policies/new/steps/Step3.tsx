import React from "react";
import SelectField from "@app/components/forms/SelectField";
import { Icon } from "@iconify/react";
import { Button } from "@app/components/ui/button";
import ImageUpload from "../../Lcomps/Imageupload";
import InputField from "@app/components/forms/InputField";

function Step3() {
  return (
    <div className="grid grid-cols-1 gap-5 mb-5">
      <div className="grid grid-cols-2 gap-x-5 gap-y-10">
        <div className=" grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border">
          <nav className=" flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500">
            <Icon icon="grommet-icons:money" className=" text-gray-600" />
            <span>Premium Computation</span>
          </nav>
          <InputField
            label="Basic Premium"
            placeholder="0.00"
            name="BasicPremium"
          />
          <InputField
            label="Adjusted Premium"
            placeholder="0.00"
            name="LastName"
          />
          <InputField label="Sticker Fee" placeholder="0.00" name="LastName" />
          <InputField
            label="Brown Card Fee"
            placeholder="0.00"
            name="LastName"
          />
          <InputField label="Extra Seets" placeholder="0.00" name="LastName" />
          <InputField label="Extra TPPD" placeholder="0.00" name="LastName" />
          <InputField label="GST" placeholder="0.00" name="LastName" />
        </div>

        <div className=" h-max grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border">
          <nav className=" flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500">
            <Icon icon="grommet-icons:money" className=" text-gray-600" />
            <span>Total Premium Payerables</span>
          </nav>
          <InputField
            label="Applicable Rate"
            placeholder="100.00"
            name="Applicable Rate"
          />
          <InputField
            label="Sub Total"
            placeholder="0.00"
            name="Applicable Rate"
          />
          <InputField
            label="Total Loading"
            placeholder="0.00"
            name="Applicable Rate"
          />
          <InputField
            label="Total Discount"
            placeholder="0.00"
            name="Applicable Rate"
          />
          <InputField
            label="Total Premium"
            placeholder="0.00"
            name="Applicable Rate"
          />
        </div>
      </div>
    </div>
  );
}

export default Step3;
