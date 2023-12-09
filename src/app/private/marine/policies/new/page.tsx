"use client"
import React from 'react'
import InputField from '@app/components/forms/InputField'
import Form from '@app/components/forms/Form'
import * as z from "zod";
import Simplestepper from '../Lcomps/hstepper/Simplestepper';
import { stepList } from './stepslist';
const schema = z.object({});
function page() {
    return (
        <div className='policy-page overflow-y-scroll h-full'>
            <div className=' container mx-auto py-5  min-h-screen w-full bg-white/70'>
                <nav className='flex z-20 px-4 backdrop-blur-sm !bg-white !items-center rounded-md  !h-max !gap-3 border !py-5'>
                    <nav className=' text-white transform  border shadow-sm !p-2 flex items-center justify-center rounded-full  aspect-square !bg-purple-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M6.502 6.132A4 4 0 0 1 10.406 3h11.187a4 4 0 0 1 3.905 3.132L26.135 9H27a1 1 0 1 1 0 2h-.42l.33 1.485A4 4 0 0 1 29 16v10a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-1H10v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V16a4 4 0 0 1 2.09-3.515L5.42 11H5a1 1 0 1 1 0-2h.864l.638-2.868ZM7.247 12h17.506l-1.207-5.434A2 2 0 0 0 21.593 5H10.407a2 2 0 0 0-1.953 1.566L7.247 12ZM5 25v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1H5Zm19 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h-3Zm-11.5-5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-5a1 1 0 0 0-1 1Zm-3-1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM24 17.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Z" /></svg>
                    </nav>
                    <nav className=' font-semibold text-gray-600 text-lg uppercase text-left'>New Policy - DETAILS</nav>
                </nav>
                <Form className="flex flex-col gap-5 !py-8" initialValues={{}} schema={schema}>
                    <div className='grid border-b !bg-white grid-cols-3 py-10 px-5 rounded-md border gap-x-5 gap-y-10'>
                        <InputField name='PolicyNumber' label='Policy Number' placeholder='Enter Policy Number' />
                        <InputField name='DebitNumber' label='Debit Number' placeholder='Enter Debit Number' />
                        <InputField name='StickerNumber' label='Sticker Number' placeholder='Enter Sticker Number' />
                    </div>
                    <Simplestepper steps={stepList} />
                </Form>
            </div>
        </div>
    )
}

export default page