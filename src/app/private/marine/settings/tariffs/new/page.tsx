"use client"
import React from 'react'
import InputField from '@app/components/forms/InputField'
import Form from '@app/components/forms/Form'
import DateInput from '@app/components/forms/DateField'
import SelectField from '@app/components/forms/SelectField'
import * as z from "zod";
import { Button } from '@app/components/ui/button'
const schema = z.object({});
function page() {
    return (
        <div className='policy-page overflow-y-scroll h-full'>
            <div className=' container mx-auto py-5  min-h-screen w-full bg-white/70'>
                <nav className='flex z-20 px-4 backdrop-blur-sm !bg-white !items-center rounded-md  !h-max !gap-3 border !py-5'>
                    <nav className=' text-white transform  border shadow-sm !p-2 flex items-center justify-center rounded-full  aspect-square !bg-purple-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M12 15.333c1.105 0 2-.746 2-1.666c0-.92-.895-1.667-2-1.667s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V16m0-8v.667m0 0c1.105 0 2 .746 2 1.666" /><path d="M17 3.338A9.954 9.954 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5" /></g></svg>
                    </nav>
                    <nav className=' font-semibold text-gray-600 text-lg uppercase text-left'>New Tariff - DETAILS</nav>
                </nav>
                <Form className="flex flex-col gap-5 !py-8" initialValues={{}} schema={schema}>
                    <div className='grid border-b !bg-white grid-cols-1 lg:grid-cols-2 py-10 px-5 rounded-md border gap-x-5 gap-y-10'>
                        <SelectField
                            label="Schedule"
                            name=""
                            options={[]}
                        />
                        <SelectField
                            label="ComputationType"
                            name=""
                            options={[]}
                        />
                        <DateInput name="" label="Start Date" />
                        <DateInput name="" label="End Date" />
                        <InputField name='' label='Basic Premium' placeholder='0.00' />
                        <InputField name='' label='Description' placeholder='' />
                        <InputField name='' label='Additional Peril Charge' placeholder='0.00' />
                        <InputField name='' label='Extra Seats Charge' placeholder='0.00' />
                        <InputField name='' label='Ecowas Peril Charge' placeholder='0.00' />
                        <InputField name='' label='Personal Accident Charge' placeholder='0.00' />
                        <InputField name='' label='Nhis' placeholder='0.00' />
                        <InputField name='' label='Sticker Fee' placeholder='0.00' />
                        <InputField name='' label='Ecowas Levy' placeholder='0.00' />
                        <InputField name='' label='Other Charges' placeholder='0.00' />
                        <InputField name='' label='Excess Amount' placeholder='0.00' />
                        <InputField name='' label='Excess Rate' placeholder='0.00' />
                        <InputField name='' label='Office Premium' placeholder='0.00' />
                        <InputField name='' label='Comprehensive Minimum Rate' placeholder='0.00' />
                        <InputField name='' label='Death' placeholder='0.00' />
                        <InputField name='' label='Comprehensive Maximum Rate' placeholder='0.00' />
                        <InputField name='' label='Bodily Injury' placeholder='0.00' />
                        <InputField name='' label='Tppd Amount' placeholder='0.00' />
                        <InputField name='' label='Third Party Premium' placeholder='0.00' />
                        <InputField name='' label='Third Party Excess' placeholder='0.00' />
                        <InputField name='' label='Third Party Fire' placeholder='0.00' />
                        <InputField name='' label='Third Party Fire Excess' placeholder='0.00' />
                        <InputField name='' label='Tppd Rate' placeholder='0.00' />
                        <InputField name='' label='Brown Card Fee' placeholder='0.00' />
                        <InputField name='' label='Fire And Theft Minimum Rate' placeholder='0.00' />
                        <InputField name='' label='Fire And Theft Maximum Rate' placeholder='0.00' />
                        <InputField name='' label='Premium Floor' placeholder='0.00' />
                        <nav className='flex items-end gap-2 '>
                            <input className='inline-block mb-1' type="checkbox" name="isActive" id="" />
                            <label className='inline-block' htmlFor="isActive">IsActive</label>
                        </nav>
                    </div>
                    <Button variant="success" className="flex items-center gap-2">
                        Save
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                        Cancel
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default page