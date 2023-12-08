"use client";

import React from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface HeaderProps {
  title: string;
  value: number;
}

interface StatsCardProps {
  mainHeader: HeaderProps;
  leftHeader: HeaderProps;
  rightHeader: HeaderProps;
}

const StatsCard: React.FC<StatsCardProps> = ({
  mainHeader,
  leftHeader,
  rightHeader,
}) => {
  const series = [
    leftHeader.value,
    rightHeader.value,
  ];

  const option = {
      labels: [leftHeader.title, rightHeader.title,],
      formatter: function (val:any) {
        return val + ""
      }
  };

  return (
    <div className="px-10 text-gray-600 bg-white pt-14 pb-10 shadow w-[360px] text-center">
      {/* main header */}
      <div className="mainHeader mx-auto text-center">
        {/* title */}
        <p className="font-semibold text-lg">{mainHeader.title}</p>
        {/* value */}
        <p className="font-semibold text-[84px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {mainHeader.value}
        </p>
      </div>

      {/* lower sections */}
      {mainHeader.title == 'Expiring Policies (today)' && <div className="lowerSections flex justify-between mt-6">
        <div className="leftHeader">
          <p className="font-semibold">{leftHeader.title}</p>
          <p className="font-semibold text-[64px] text-pink-500">{leftHeader.value}</p>
        </div>

        <div className="rightHeader">
          <p className="font-semibold">{rightHeader.title}</p>
          <p className="font-semibold text-[64px] text-purple-700">{rightHeader.value}</p>
        </div>
      </div>}

      {/* charts section */}
      {mainHeader.title !== 'Expiring Policies (today)' && <div className="chart">
        <ApexChart
          type="donut"
          options={option}
          series={series}
          height={300}
          width={300}
        />
      </div>}
    </div>
  );
};

export default StatsCard;
