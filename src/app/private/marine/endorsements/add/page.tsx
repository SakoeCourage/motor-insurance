'use client';

import Form from '@app/components/forms/Form';
import InputField from '@app/components/forms/InputField';
import SelectField from '@app/components/forms/SelectField';
import TextAreaField from '@app/components/forms/TextAreaField';
import DateField from '@app/components/forms/DateField';
import { Button } from '@app/components/ui/button';
import ScrollSection from '@app/components/ui/scrollSection';
import React from 'react';
import * as z from 'zod';

const schema = z.object({});

const Page = () => {
  return (
    <ScrollSection className='bg-white shadow-md rounded p-4'>
      <div className='mb-14'>
        <h2 className='text-2xl'>Create Endorsement</h2>
        <p className='text-sm text-gray-500'>
          Fill out the form below to create a new endorsement
        </p>
      </div>
      <div>
        <Form
          schema={schema}
          initialValues={{}}
          className='grid grid-cols-2 gap-5'
        >
          <DateField name='date' label='Date' />
          <InputField name='number' label='Number' />
          <InputField name='vecRegNumber' label='Vehicle Registration Number' />
          <InputField name='Insured' label='Insured' />
          <TextAreaField name='comment' label='Comment' rows={6} />
          <SelectField options={[]} name='type' label='Type' />
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
