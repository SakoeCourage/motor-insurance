'use client';
import Table, { DataRow } from '@app/components/ui/Table';
import { FileEdit } from 'lucide-react';
import React from 'react';
import { TableColumn } from 'react-data-table-component';
import { useRouter } from 'next/navigation';

const columns: TableColumn<DataRow>[] = [
  {
    name: <div className='text-lg font-medium'>Int #</div>,
    selector: (row: any) => row.intNo,
  },
  {
    name: <div className='text-lg font-medium'>SLICOM Reg.#</div>,
    selector: (row: any) => row.regNo,
  },
  {
    name: <div className='text-lg font-medium'>Name</div>,
    selector: (row: any) => row.name,
  },
  {
    name: <div className='text-lg font-medium'>Phone #</div>,
    selector: (row: any) => row.phone,
  },
  {
    name: <div className='text-lg font-medium'>Email</div>,
    selector: (row: any) => row.email,
  },
  {
    name: <div className='text-lg font-medium'>Action</div>,
    selector: (row: any) => row.intNo,
    cell: (row: any) => <FileEdit color='blue' size={18} />,
  },
];

const data: DataRow[] = [
  {
    intNo: '01HGWT3Q75VPDVA35AZMDQE42J',
    regNo: '25492eea-659f-4b2e-824e-f82b33a6011d',
    name: 'Dach-Bartell',
    phone: '267-865-6913',
    email: 'stregidga0@sogou.com',
  },
  {
    intNo: '01HGWT3Q760CN866GK7YM2EY2A',
    regNo: 'd4ebd4a2-ddc7-495a-a3d2-463bd5a426bb',
    name: 'Torphy, Rempel and Balistreri',
    phone: '255-936-1656',
    email: 'wstrathearn1@digg.com',
  },
  {
    intNo: '01HGWT3Q77WKPC8PJBF5G6D5Y2',
    regNo: 'c1642e8d-701e-43a4-80e0-c6f78e85ef9c',
    name: 'Veum-Greenholt',
    phone: '367-810-1775',
    email: 'iunthank2@t.co',
  },
  {
    intNo: '01HGWT3Q79NSQCPB9183E3YKNJ',
    regNo: '581d0305-e4eb-4ee9-b288-eeef32d23ee0',
    name: 'Schroeder-Erdman',
    phone: '415-362-8131',
    email: 'epenfold3@mysql.com',
  },
  {
    intNo: '01HGWT3Q7ACH4Q7H62AP8PV8E4',
    regNo: '504ce922-8296-43d3-ac52-2d1bb6baf8a1',
    name: 'Blanda-Hayes',
    phone: '739-897-3495',
    email: 'aclive4@pbs.org',
  },
  {
    intNo: '01HGWT3Q7BFB6VQX2PAQCA8J25',
    regNo: '5bbce201-f542-4a0e-bce7-cfca5812bc97',
    name: 'Cummerata-McCullough',
    phone: '414-353-2700',
    email: 'slanphier5@toplist.cz',
  },
  {
    intNo: '01HGWT3Q7CVB6XZVJ4G9CQ3RVZ',
    regNo: '930e0fa6-c6a7-4276-88eb-ad6775e9c1bc',
    name: 'Maggio-King',
    phone: '310-748-9399',
    email: 'chaggerwood6@sina.com.cn',
  },
  {
    intNo: '01HGWT3Q7DFVTNC9YNFMWQEN4Z',
    regNo: '6ed299b4-294e-4afc-898b-dbc1c0224161',
    name: 'Daniel, Keebler and Kemmer',
    phone: '364-193-5692',
    email: 'preaper7@myspace.com',
  },
  {
    intNo: '01HGWT3Q7EQNGH5WSYHVDYHP6T',
    regNo: '1024c524-39d2-4a47-bfc4-7af1708d94d6',
    name: 'Daugherty Inc',
    phone: '336-404-6350',
    email: 'akordova8@nasa.gov',
  },
  {
    intNo: '01HGWT3Q7JH282P68K548X6WC7',
    regNo: 'b2467d94-4331-417a-9d23-93c9fb3f3778',
    name: 'Mraz, Romaguera and Swaniawski',
    phone: '934-860-7276',
    email: 'bmcgorley9@ameblo.jp',
  },
  {
    intNo: '01HGWT3Q7K3SAVGKWDF0EV63QJ',
    regNo: 'be67a325-3d04-4c79-a520-24049f18a6c9',
    name: 'Reichel LLC',
    phone: '448-559-5491',
    email: 'lgilffillanda@prlog.org',
  },
  {
    intNo: '01HGWT3Q7MEQ05DBBTNDJTB76R',
    regNo: '4d058786-84dc-4f4a-83c4-49de4e2a7aa7',
    name: 'Ward LLC',
    phone: '412-903-7644',
    email: 'kmainb@state.gov',
  },
  {
    intNo: '01HGWT3Q7NMH2ATTSZNHNCGBBV',
    regNo: '849ef744-661f-4a25-bf4a-2c66a1eac36e',
    name: 'Fay, Price and Monahan',
    phone: '633-909-9114',
    email: 'hrussellc@mlb.com',
  },
  {
    intNo: '01HGWT3Q7RV7AFW506ZH5VRXE5',
    regNo: '33ee4ca4-5022-4d08-a449-78e877d9de96',
    name: 'Hirthe, Pfeffer and King',
    phone: '776-159-7363',
    email: 'eloughnand@wired.com',
  },
  {
    intNo: '01HGWT3Q7TDFNGPB846K5G2PMK',
    regNo: '79e9407c-aa27-4a76-8953-c24a5f60ceef',
    name: 'Moen, Larkin and Bahringer',
    phone: '850-890-7009',
    email: 'ifoggoe@cnbc.com',
  },
  {
    intNo: '01HGWT3Q7VTG90ZYPG730F954Q',
    regNo: 'ca0cddbf-75ca-4c91-89b3-33798516a533',
    name: 'Beier-Franecki',
    phone: '153-311-9724',
    email: 'bdillandf@reddit.com',
  },
  {
    intNo: '01HGWT3Q7X24W5EDBPWWMEM1Q6',
    regNo: '6746bce0-cb50-4d1f-a6a9-86d3828f52fb',
    name: 'McGlynn Group',
    phone: '634-482-7209',
    email: 'ogiamittig@businesswire.com',
  },
  {
    intNo: '01HGWT3Q7YP7ESR1HZ8GFN0T2X',
    regNo: 'bc7b0f4f-d869-407f-8c60-91602d6b3149',
    name: 'Crona, Gleichner and Considine',
    phone: '210-156-1078',
    email: 'bpinah@discuz.net',
  },
  {
    intNo: '01HGWT3Q804H311645STY20PA9',
    regNo: '1f053605-f418-4d92-8bae-1d440fc9f557',
    name: 'Boehm LLC',
    phone: '495-377-7926',
    email: 'amostyni@princeton.edu',
  },
  {
    intNo: '01HGWT3Q82K2SQGP1ZNC3XY5R6',
    regNo: 'a7894624-c735-45e7-94c9-1d98f87d0fa1',
    name: 'Frami-Davis',
    phone: '400-334-6401',
    email: 'ayesinovj@aboutads.info',
  },
];

const Page = () => {
  const router = useRouter();
  return (
    <div className='w-full h-full'>
      <div className='mb-14'>
        <h2 className='text-2xl'>All ReInsure</h2>
        <p className='text-sm text-gray-500'>List of all reinsurers</p>
      </div>
      <Table
        columns={columns}
        tableData={data}
        addButtonLabel='New Intermediary'
        searchPlaceholder='Search by intermediary name'
        addButtonFunction={() => {
          router.push('/intermediary/add');
        }}
      />
    </div>
  );
};

export default Page;
