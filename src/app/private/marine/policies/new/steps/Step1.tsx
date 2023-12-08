import React from 'react'
import SelectField from '@app/components/forms/SelectField'
import { Icon } from '@iconify/react';
import { Button } from '@app/components/ui/button'
import ImageUpload from '../../Lcomps/Imageupload';
import InputField from '@app/components/forms/InputField';

function Step1() {
    return (
        <div className='grid grid-cols-1 gap-5'>
            <div className='grid grid-cols-2 gap-x-5 gap-y-10'>
                {/* Client Information */}
                <div className=' grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border'>
                    <nav className=' flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500'>
                        <Icon icon="carbon:customer-service" className=' text-gray-900' /><span>Client Information</span>
                        <Button className=' ml-auto flex items-center gap-1' variant="primary">
                            <Icon fontSize="1rem" className='!text-white' icon="clarity:search-line" />
                            <span>Get customer by search</span>
                        </Button >
                    </nav>
                    <InputField label='First Name' placeholder='Enter First Name' name='FirstName' />
                    <InputField label='Last Name' placeholder='Enter Last Name' name='LastName' />
                    <InputField label='Other Name' placeholder='Enter Other Name' name='OtherName' />
                    <InputField label='Phone Number' placeholder='Enter Phone Number' name='PhoneNumber' />
                </div>

                {/* Intermediary Infomation Information */}
                <div className=' grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border'>
                    <nav className=' flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500'>
                        <Icon icon="streamline:information-desk-customer" className=' text-gray-900' /><span>Intermdiary Information</span>
                        <Button className=' ml-auto flex items-center gap-1' variant="default">
                            <Icon fontSize="1rem" className='!text-white' icon="clarity:search-line" />
                            <span>Get Intermediary by search</span>
                        </Button >
                    </nav>
                    <InputField label='First Name' placeholder='Enter First Name' name='FirstName' />
                    <InputField label='Last Name' placeholder='Enter Last Name' name='LastName' />
                    <InputField label='Other Name' placeholder='Enter Other Name' name='OtherName' />
                    <InputField label='Phone Number' placeholder='Enter Phone Number' name='PhoneNumber' />
                </div>

            </div>

            {/* Vehicle Information Section */}
            <div className=' grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border'>
                <nav className=' flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500'>
                    <Icon icon="fluent:vehicle-car-profile-16-regular" className=' text-gray-900' /><span>Vehicle Information</span>
                </nav>
                <nav className=' grid grid-cols-2 gap-5'>
                    <InputField label='Registeration' placeholder='Enter Registeration' name='Registeration' />
                    <InputField label='Make' placeholder='Enter Make' name='Make' />
                    <InputField label='Year of Registration' placeholder='Enter Year of Registration' name='Yor' />
                    <InputField label='Model' placeholder='Enter Model' name='Model' />

                    <SelectField label='Body Type' name='Body Type' placeholder='Select Body Type' options={[{ label: "SUV", value: "SUV" }]} />
                    <InputField label='Color' placeholder='Enter Color' name='Color' />
                    <InputField label='Year of Manufacture' placeholder='2023' name='YOM' />
                    <InputField label='Mileage' placeholder='Enter Mileage' name='MIL' />
                    <InputField label='Chasis Number' placeholder='Enter Chasis Number' name='cn' />
                    <InputField label='Cubic Capacity' placeholder='Enter Cubic Capacity' name='cc' />
                    <InputField label='Seats' placeholder='Enter Seats' name='cc' />
                    <InputField label='Additional Seats' placeholder='Enter Additional Seats' name='cc' />
                </nav>
            </div>

            {/* Registration Doc */}
            <div className=' grid grid-cols-1 gap-5 !bg-white pb-10 pt-5 px-5 rounded-md border'>
                <nav className=' flex items-center !gap-1 border-b pb-3 !px-0 font-semibold text-gray-500'>
                    <span>Registeration Document (PDF,PNG,JPEG)</span>
                </nav>
                <ImageUpload />
            </div>
        </div>
    )
}

export default Step1