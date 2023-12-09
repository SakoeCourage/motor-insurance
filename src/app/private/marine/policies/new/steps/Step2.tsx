import React from "react";
import SelectField from "@app/components/forms/SelectField";
import { Icon } from "@iconify/react";
import { Button } from "@app/components/ui/button";
import ImageUpload from "../../Lcomps/Imageupload";
import InputField from "@app/components/forms/InputField";

function Step2() {
  return (
    <div className="grid grid-cols-1 gap-5">
      {/* Vehicle Information Section */}
      <div className=" grid grid-cols-1 gap-7 !bg-white pb-10 pt-5 px-5 rounded-md border">
        <nav className=" flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500">
          <Icon
            icon="fluent:vehicle-car-profile-16-regular"
            className=" text-gray-900"
          />
          <span>Policy Information</span>
        </nav>
        <nav className=" grid grid-cols-2 gap-5">
          <InputField
            label="Currency"
            placeholder="Enter Currency"
            name="Currency"
          />
          <InputField
            label="Exchange Rate"
            placeholder="1.00"
            name="Exchange Rate"
          />
          <InputField
            label="Duration"
            placeholder="Enter Duration"
            name="Yor"
          />
          <InputField
            label="Year of Days"
            placeholder="Enter Year of Days"
            name="Yor"
          />

          <InputField
            label="Inception Date"
            placeholder="Enter Inception Date"
            name="Inception Date"
          />

          <InputField
            label="Expiry Date"
            placeholder="Enter Expiry Date"
            name="Expiry Date"
          />
        </nav>
        <nav className=" py-5 border-y grid grid-cols-1 gap-7">
          <InputField
            label="Cover Type"
            placeholder="Enter Cover Type"
            name="Expiry Date"
          />
          <InputField
            label="Schedule"
            placeholder="Enter Schedule"
            name="Expiry Date"
          />
        </nav>
        <nav className=" grid grid-cols-2 gap-5">
          <InputField
            label="Sum Insured"
            placeholder="Enter Sum Insured"
            name="Sum Insured"
          />
          <InputField label="Rate" placeholder="Enter Rate" name="Rate" />
          <nav className=" col-span-2">
            <InputField label="Excess" placeholder="Enter Excess" name="Yor" />
          </nav>
          <InputField label="Excess Rate" placeholder="0.00" name="Yor" />

          <InputField
            label="Excess Amount"
            placeholder="0.00"
            name="Excess Amount"
          />
          <nav className=" col-span-2">
            <InputField
              label="Co  Insure"
              placeholder="Enter Co  Insure"
              name="Yor"
            />
          </nav>
          <InputField
            label="Co Insured Rate"
            placeholder="0.00"
            name="Co Insured Rate"
          />
          <InputField
            label="Clousure Amount"
            placeholder="0.00"
            name="Clousure Amount"
          />

          <InputField label="TPPD Rate" placeholder="0.00" name="TPPDRate" />
          <InputField label="TPPD Limit" placeholder="0.00" name="TPPDLimit" />
        </nav>
      </div>
      <nav className=" grid grid-cols-1 gap-7 px-2 pb-5">
        <h3>Comment</h3>
        <textarea
          cols={20}
          className=" min-w-full min-h-[10rem] border rounded-md"
        />
      </nav>
    </div>
  );
}

export default Step2;
