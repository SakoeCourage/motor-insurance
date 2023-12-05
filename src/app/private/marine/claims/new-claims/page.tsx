"use client";
import DateInput from "@app/components/forms/DateField";
import Form from "@app/components/forms/Form";
import InputField from "@app/components/forms/InputField";
import SelectField from "@app/components/forms/SelectField";
import TextAreaField from "@app/components/forms/TextAreaField";
import ScrollSection from "@app/components/ui/scrollSection";
import React from "react";
import * as z from "zod";

const schema = z.object({});
const page = () => {
  return (
    <ScrollSection className="px-4 h-full bg-white py-4 shadow shadow-gray-400">
      <Form className="flex flex-col gap-6" initialValues={{}} schema={schema}>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <p className="text-xl border-b text-teal-500">
              Registration Details
            </p>
            <div className="flex flex-col gap-4">
              <InputField
                label="Registration Number"
                name="registration_number"
                placeholder="Enter registration number"
              />
              <DateInput
                label="Report Date"
                name="report_date"
                placeholder="Select Date"
              />
              <DateInput
                label="Loss Date"
                name="loss_date"
                placeholder="Select Date"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl border-b text-teal-500">Policy Details</p>
            <div className="grid grid-cols-3 gap-4">
              <InputField
                label="Policy Number"
                name="policy_number"
                placeholder="Enter policy number"
              />
              <InputField label="Make" name="make" placeholder="Enter make" />
              <InputField
                label="Sum Assured"
                name="sum_assured"
                placeholder="Enter sum assured"
              />
              <DateInput
                label="Inception Date"
                name="inception_date"
                placeholder="Select Date"
              />
              <InputField
                label="Model"
                name="model"
                placeholder="Enter model"
              />
              <InputField
                label="Premium"
                name="premium"
                placeholder="Enter premium"
              />
              <DateInput
                label="Expiry Date"
                name="expiry_date"
                placeholder="Select Date"
              />
              <InputField
                label="Seating"
                name="seating"
                placeholder="Enter seating"
              />
              <InputField
                label="Cubic/Tonnage"
                name="cubic"
                placeholder="Enter cubic"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xl border-b text-teal-500">Claims Details</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <InputField
                name="location_of_accident"
                label="Location of Accident"
              />
              <TextAreaField name="notification" label="Notification" />
              <TextAreaField
                name="circustance"
                label="Circumstance / Cause of Loss"
              />
              <TextAreaField
                name="police_investigation"
                label="Police or Fire Service Investigation"
              />
              <TextAreaField
                name="loss"
                label="Injury / Extent of Damage or Loss"
              />
              <TextAreaField
                name="statement_of_claim"
                label="Statement of Claim"
              />
            </div>
            <div className="flex flex-col gap-3">
              <InputField name="salvage" label="Salvage" />
              <TextAreaField name="subrogation" label="Subrogation" />
              <TextAreaField
                name="subrogation"
                label="Assesment / Consideration"
              />
              <TextAreaField name="reinsatement" label="Reinsatement Cover" />
              <InputField name="Driver" label="Driver Detais (Name)" />
              <InputField name="lice" label="Driver Detais (Licence Number)" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl border-b text-teal-500">Processing...</p>
          <div className="grid grid-cols-2 gap-4">
            <SelectField name="loss_type" label="Loss Type" options={[]} />
            <InputField name="claim_amount" label="Claim Amount" />
            <DateInput name="estimate_date" label="Estimate Date" />
            <InputField name="estimate_amount" label="Estimate Amount" />
            <InputField name="legal_fess" label="Legal Fees" />
            <InputField name="loss_adjustor_fees" label="Loss Adjustor Fees" />
            <SelectField name="currency" label="Currency" options={[]} />
            <DateInput name="settle_date" label="Settle Date" />
            <DateInput name="discharge_date" label="Discharge Date" />
            <SelectField
              name="settlement"
              label="Settlement Type"
              options={[]}
            />
          </div>
        </div>
      </Form>
    </ScrollSection>
  );
};

export default page;
