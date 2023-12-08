import React from "react";

const MotorPolicyStatsCard = () => {
  return (
    <div className="bg-white shadow min-h-fit">
      {/* title */}
      <p className="px-4 py-3 border-b font-medium italic">
        Motor Policy Analysis
      </p>

      {/* Policy cards */}
      <div className="policyCardsContainer px-4 mt-6">
        <div className="policyCard grid grid-cols-6 text-sm shadow p-4">
          {/* logo */}
          <div className="logo col-span-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </div>

          {/* Details */}
          <div className="details flex flex-col col-span-5">
            <p>Comprehensive</p>
            <div className="values grid grid-cols-5">
              <span className="col-span-2">Number: 10</span>
              <span className="col-span-3"> Amount: SLL 13000</span>
            </div>
          </div>
        </div>

        <div className="policyCard grid grid-cols-6 text-sm shadow p-4 mt-4">
          {/* logo */}
          <div className="logo col-span-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </div>

          {/* Details */}
          <div className="details flex flex-col col-span-5">
            <p>Comprehensive</p>
            <div className="values grid grid-cols-5">
              <span className="col-span-2">Number: 10</span>
              <span className="col-span-3"> Amount: SLL 13000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorPolicyStatsCard;
