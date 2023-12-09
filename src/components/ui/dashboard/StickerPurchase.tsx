'use client'

import React from "react";

const StickerPurchase = () => {
  return (
    <div className="shadow bg-white">
      {/* title */}
      <p className="px-4 py-3 border-b font-medium italic">Last Ten Sticker Purchases</p>
      {/* table */}
      <table className="stickerPurchasesTable w-full text-left">
        {/* headers */}
        <tr className="bg-gray-100">
          <th className="py-2 pl-4">Order ID</th>
          <th className="">Customer Name</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Amount</th>
        </tr>

        {/* table data */}
        <tr>
          <td className="py-2 pl-4">SLICO182350938</td>
          <td className=" ">Sierra Leone Insurance Co.</td>
          <td>100</td>
          <td>4 Dec 2023</td>
          <td>SLL 2000</td>
        </tr>
        <tr>
          <td className="py-2 pl-4">SLICO182350549</td>
          <td className=" ">Greater Insurance Co.</td>
          <td>100</td>
          <td>2 Dec 2023</td>
          <td>SLL 10000</td>
        </tr>
        <tr>
          <td className="py-2 pl-4">SLICO182350938</td>
          <td className=" ">Apex Leone Insurance Co.</td>
          <td>100</td>
          <td>4 Nov 2023</td>
          <td>SLL 2400</td>
        </tr>
        <tr>
          <td className="py-2 pl-4">SLICO182350938</td>
          <td className=" ">Sierra Leone Insurance Co.</td>
          <td>100</td>
          <td>5 Dec 2023</td>
          <td>SLL 23000</td>
        </tr>
        <tr>
          <td className="py-2 pl-4">SLICO182350938</td>
          <td className=" ">Sierra Leone Insurance Co.</td>
          <td>100</td>
          <td>4 Dec 2023</td>
          <td>SLL 23000</td>
        </tr>
      </table>
    </div>
  );
};

export default StickerPurchase;
