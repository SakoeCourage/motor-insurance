'use client';
import Table, { DataRow } from '@app/components/ui/Table';
import React from 'react';
import { TableColumn } from 'react-data-table-component';
import { useRouter } from 'next/navigation';

const columns: TableColumn<DataRow>[] = [
  {
    name: <div className='text-lg font-medium'>Amount</div>,
    selector: (row: any) => row.amount,
  },
  {
    name: <div className='text-lg font-medium'>Start Date</div>,
    selector: (row: any) => row.startDate,
  },
  {
    name: <div className='text-lg font-medium'>End Date</div>,
    selector: (row: any) => row.endDate,
  },
  {
    name: <div className='text-lg font-medium'>Comment</div>,
    selector: (row: any) => 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },
];

const data: DataRow[] = [
  {
    id: 1,
    amount: '$4.32',
    startDate: '11/10/2023',
    endDate: '9/24/2023',
  },
  {
    id: 2,
    amount: '$3.90',
    startDate: '1/29/2023',
    endDate: '5/3/2023',
  },
  {
    id: 3,
    amount: '$5.82',
    startDate: '2/18/2023',
    endDate: '6/18/2023',
  },
  {
    id: 4,
    amount: '$8.02',
    startDate: '6/1/2023',
    endDate: '6/9/2023',
  },
  {
    id: 5,
    amount: '$1.61',
    startDate: '3/10/2023',
    endDate: '4/16/2023',
  },
  {
    id: 6,
    amount: '$8.91',
    startDate: '3/1/2023',
    endDate: '5/5/2023',
    comment:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
  },
  {
    id: 7,
    amount: '$9.64',
    startDate: '5/26/2023',
    endDate: '3/2/2023',
    comment: 'Nulla tellus.',
  },
  {
    id: 8,
    amount: '$2.82',
    startDate: '3/20/2023',
    endDate: '7/14/2023',
    comment:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
  },
  {
    id: 9,
    amount: '$8.47',
    startDate: '8/3/2023',
    endDate: '6/12/2023',
    comment:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
  },
  {
    id: 10,
    amount: '$8.04',
    startDate: '9/25/2023',
    endDate: '11/21/2023',
    comment:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  },
  {
    id: 11,
    amount: '$4.72',
    startDate: '6/1/2023',
    endDate: '3/31/2023',
    comment:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
  },
  {
    id: 12,
    amount: '$6.35',
    startDate: '2/28/2023',
    endDate: '3/15/2023',
    comment:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
  },
  {
    id: 13,
    amount: '$6.55',
    startDate: '8/9/2023',
    endDate: '6/14/2023',
    comment:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
  },
  {
    id: 14,
    amount: '$0.47',
    startDate: '3/4/2023',
    endDate: '6/2/2023',
    comment:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
  },
  {
    id: 15,
    amount: '$1.43',
    startDate: '11/15/2023',
    endDate: '3/13/2023',
    comment:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
  },
  {
    id: 16,
    amount: '$0.37',
    startDate: '3/27/2023',
    endDate: '2/13/2023',
    comment:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
  },
  {
    id: 17,
    amount: '$5.12',
    startDate: '8/25/2023',
    endDate: '12/9/2022',
    comment:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
  },
  {
    id: 18,
    amount: '$6.96',
    startDate: '5/11/2023',
    endDate: '7/2/2023',
    comment:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
  },
  {
    id: 19,
    amount: '$2.61',
    startDate: '10/15/2023',
    endDate: '5/22/2023',
    comment: 'Donec quis orci eget orci vehicula condimentum.',
  },
  {
    id: 20,
    amount: '$8.37',
    startDate: '8/26/2023',
    endDate: '1/15/2023',
  },
];

const Page = () => {
  const router = useRouter();
  return (
    <div className='w-full h-full'>
      <div className='mb-14'>
        <h2 className='text-2xl'>Sticker Prices</h2>
        <p className='text-sm text-gray-500'>List of all sticker prices</p>
      </div>
      <Table
        columns={columns}
        tableData={data}
        addButtonLabel='New Price'
        addButtonFunction={() => {
          router.push('/private/marine/endorsement/add');
        }}
      />
    </div>
  );
};

export default Page;
