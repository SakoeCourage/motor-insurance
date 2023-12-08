'use client';

import Form from '@app/components/forms/Form';
import InputField from '@app/components/forms/InputField';
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
        <h2 className='text-2xl'>Add New Sticker Price</h2>
        <p className='text-sm text-gray-500'>
          Fill out the form below to add a new sticker price
        </p>
      </div>
      <div>
        <Form
          schema={schema}
          initialValues={{}}
          className='grid grid-cols-1 gap-5 w-full lg:w-[50%]'
        >
          <InputField name='date' label='Unit Price Motor (Vehicle)' />
          <InputField name='number' label='Unit Price Motor Cycle' />
          <InputField name='vecRegNumber' label='Vehicle Registration Number' />
          <DateField name='Insured' label='Start Date' />
          <DateField name='Insured' label='End Date' />
          <TextAreaField name='comment' label='Comment' rows={6} />
          <div className=' gap-2'>
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
