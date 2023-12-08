'use client';

import Form from '@app/components/forms/Form';
import InputField from '@app/components/forms/InputField';
import SelectField from '@app/components/forms/SelectField';
import { Button } from '@app/components/ui/button';
import ScrollSection from '@app/components/ui/scrollSection';
import React from 'react';
import * as z from 'zod';

const schema = z.object({});

const Page = () => {
  return (
    <ScrollSection className='bg-white shadow-md rounded p-4'>
      <div className='mb-14'>
        <h2 className='text-2xl'>Add new Intermediary</h2>
        <p className='text-sm text-gray-500'>
          Fill out the form below to add a new intermediary
        </p>
      </div>
      <div>
        <Form
          schema={schema}
          initialValues={{}}
          className='grid grid-cols-2 gap-5'
        >
          <InputField name='int#' label='SLICOM Reg.' />
          <InputField name='phone' label='Phone' />
          <InputField name='branchId' label='Branch ID' />
          <InputField name='firstName' label='First Name' />
          <InputField name='lastNme' label='Last Name' />
          <InputField name='otherName' label='Other Name' />
          <InputField name='email' label='Email' />
          <InputField name='address' label='Address' />
          <SelectField
            options={[]}
            name='intermediaryType'
            label='Intermediary Type'
          />
          <div className='col-span-2 gap-2'>
            <Button>Save</Button>
            <Button variant='secondary' className='text-red-600 bg-white'>
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </ScrollSection>
  );
};

export default Page;
