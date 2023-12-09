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
        <h2 className='text-2xl'>Add Exchange Rate</h2>
        <p className='text-sm text-gray-500'>Add new exchange rate</p>
      </div>
      <div>
        <Form
          schema={schema}
          initialValues={{}}
          className='grid grid-cols-1 gap-5 w-[50%]'
        >
          <SelectField
            options={[
              { value: 'Euro', label: 'Euro' },
              { value: 'SLL', label: 'SLL' },
              { value: 'USD', label: 'USD' },
            ]}
            name='currency'
            label='Currency'
          />
          <InputField name='phone' label='Rate' />

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
