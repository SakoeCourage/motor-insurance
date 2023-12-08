'use client';
import Table, { DataRow } from '@app/components/ui/Table';
import React from 'react';
import { TableColumn } from 'react-data-table-component';
import { useRouter } from 'next/navigation';

const columns: TableColumn<DataRow>[] = [
  {
    name: <div className='text-lg font-medium'>Date</div>,
    selector: (row: any) => row.date,
  },
  {
    name: <div className='text-lg font-medium'>Number</div>,
    selector: (row: any) => row.number,
  },
  {
    name: <div className='text-lg font-medium'>Vehicle Registraion</div>,
    selector: (row: any) => row.registrationNumber,
  },
  {
    name: <div className='text-lg font-medium'>Insured</div>,
    selector: (row: any) => row.insured,
  },
  {
    name: <div className='text-lg font-medium'>Endorsement Type</div>,
    selector: (row: any) => row.type,
  },
  {
    name: <div className='text-lg font-medium'>Creator</div>,
    selector: (row: any) => row.creator,
  },
  {
    name: <div className='text-lg font-medium'>Authorizer</div>,
    selector: (row: any) => row.authorizer,
  },
];

const data: DataRow[] = [
  {
    date: '9/8/2023',
    number: '758',
    registrationNumber: 'WBAVM5C53EV908111',
    insured: true,
    type: 'UMPQ',
    authorizer: 'Robby Cush',
    creator: 'Amara Jahnig',
  },
  {
    date: '7/23/2023',
    number: '06',
    registrationNumber: 'JTDKN3DU5B0042496',
    insured: true,
    type: 'HCI',
    authorizer: 'Rachael Burleton',
    creator: 'Elsy Upton',
  },
  {
    date: '9/28/2023',
    number: '461',
    registrationNumber: '1GYS3GEF7BR188045',
    insured: false,
    type: 'SBRAP',
    authorizer: 'Mariam Nisbith',
    creator: 'Porty Oganesian',
  },
  {
    date: '10/13/2023',
    number: '66046',
    registrationNumber: '2C3CCAJT4CH383075',
    insured: true,
    type: 'FIVN',
    authorizer: 'Val Croley',
    creator: 'Cate Blaxeland',
  },
  {
    date: '4/19/2023',
    number: '3871',
    registrationNumber: 'WP1AE2A23CL483161',
    insured: true,
    type: 'WTTR',
    authorizer: 'Mathian Harbinson',
    creator: 'Reta Westnedge',
  },
  {
    date: '10/13/2023',
    number: '10241',
    registrationNumber: 'KNAFT4A26C5905842',
    insured: true,
    type: 'TMK^B',
    authorizer: 'Mathian Lemme',
    creator: 'Jaimie Dulieu',
  },
  {
    date: '6/26/2023',
    number: '33820',
    registrationNumber: 'TRUWC28N121272878',
    insured: false,
    type: 'LMRKO',
    authorizer: 'Fulton Clinkard',
    creator: 'Charmian Meadley',
  },
  {
    date: '4/9/2023',
    number: '29',
    registrationNumber: '2C3CA6CT6AH729902',
    insured: true,
    type: 'SCZ',
    authorizer: 'Jobi Goathrop',
    creator: 'Dion Leborgne',
  },
  {
    date: '3/26/2023',
    number: '834',
    registrationNumber: '5TFBY5F19CX254879',
    insured: false,
    type: 'CTBI',
    authorizer: 'Bette-ann Gawler',
    creator: 'Beaufort Mirralls',
  },
  {
    date: '1/16/2023',
    number: '240',
    registrationNumber: '1G6DX67D760947332',
    insured: true,
    type: 'VST',
    authorizer: 'Lars Filkov',
    creator: 'Pasquale Duffrie',
  },
  {
    date: '9/29/2023',
    number: '57727',
    registrationNumber: '19UUA8F76CA325771',
    insured: true,
    type: 'AMOV',
    authorizer: 'Demetra Naish',
    creator: 'Elizabet Gammett',
  },
  {
    date: '10/1/2023',
    number: '27598',
    registrationNumber: '3C6JD7DP5CG866745',
    insured: true,
    type: 'NBR',
    authorizer: 'Salim Avrasin',
    creator: 'Kathryn Leile',
  },
  {
    date: '6/5/2023',
    number: '25',
    registrationNumber: 'WBADS33403G401200',
    insured: true,
    type: 'XCO',
    authorizer: 'Terence Kondrat',
    creator: 'Yehudi Olivier',
  },
  {
    date: '6/17/2023',
    number: '87645',
    registrationNumber: 'WBACK73481L128675',
    insured: false,
    type: 'KEQU',
    authorizer: 'Will Koenen',
    creator: 'Roth Loffill',
  },
  {
    date: '5/8/2023',
    number: '3',
    registrationNumber: '3C4PDCEG3ET148504',
    insured: false,
    type: 'ARGS',
    authorizer: 'Athene Mitchiner',
    creator: 'Rockwell Lindenberg',
  },
  {
    date: '11/2/2023',
    number: '81',
    registrationNumber: 'WBAFV3C59ED119117',
    insured: true,
    type: 'BSX',
    authorizer: 'Marius Chadbourne',
    creator: 'Gerry Stuchburie',
  },
  {
    date: '12/14/2022',
    number: '706',
    registrationNumber: '1GYUKJEF4AR761670',
    insured: true,
    type: 'THO',
    authorizer: 'Adrea Badrick',
    creator: 'Norry Rowes',
  },
  {
    date: '9/18/2023',
    number: '59',
    registrationNumber: '1FTSX2A5XAE320745',
    insured: true,
    type: 'URRE',
    authorizer: 'Stacia Quiney',
    creator: 'Cordi Thurlow',
  },
  {
    date: '6/6/2023',
    number: '49',
    registrationNumber: 'TRUDD38J781498519',
    insured: true,
    type: 'AVP',
    authorizer: 'Jacky Suche',
    creator: 'Petronella Duckhouse',
  },
  {
    date: '5/11/2023',
    number: '8',
    registrationNumber: 'WAUFMBFC3EN103514',
    insured: true,
    type: 'LEN.B',
    authorizer: 'Dody Bohlens',
    creator: 'Alric Wharram',
  },
];

const Page = () => {
  const router = useRouter();
  return (
    <div className='w-full h-full'>
      <div className='mb-14'>
        <h2 className='text-2xl'>All Endorsements</h2>
        <p className='text-sm text-gray-500'>List of all endorsements</p>
      </div>
      <Table
        columns={columns}
        tableData={data}
        addButtonLabel='New Endorsement'
        searchPlaceholder='Search by policy # || Customer name'
        addButtonFunction={() => {
          router.push('/private/marine/endorsement/add');
        }}
      />
    </div>
  );
};

export default Page;
