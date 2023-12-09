import React from "react";
import StatsCard from "@app/components/ui/dashboard/StatsCard";
import StickerPurchase from "@app/components/ui/dashboard/StickerPurchase";
import MotorPolicyStatsCard from "@app/components/ui/dashboard/MotorPolicyStatsCard";

const statsCards = [
  {
    mainHeader: { title: "Total Insured", value: 11 },
    leftHeader: { title: "Individuals", value: 10 },
    rightHeader: { title: "Institutions", value: 5 },
  },
  {
    mainHeader: { title: "Total Policies", value: 203 },
    leftHeader: { title: "Active", value: 100 },
    rightHeader: { title: "Pending", value: 103 },
  },
  {
    mainHeader: { title: "Expiring Policies (today)", value: 2 },
    leftHeader: { title: "Tomorrow", value: 1 },
    rightHeader: { title: "In a month", value: 6 },
  },
];

const page1 = () => {
  return (
    <div className="!overflow-scroll mb-20">
      {/* Statistics Cars */}
      <div className="statsCArdContainer flex justify-between pr-">
        {statsCards.map((el) => (
          <StatsCard
            mainHeader={el.mainHeader}
            leftHeader={el.leftHeader}
            rightHeader={el.rightHeader}
          />
        ))}
      </div>

      {/* lower sections */}
      <section className="lowerSections mt-10 grid grid-cols-3  gap-12 min-h-fit !overflow-scroll">
        {/* sticker purchase */}
        <div className="stickerPurchaseTable col-span-2">
          <StickerPurchase />
        </div>

        {/* motor policy card */}
        <MotorPolicyStatsCard />
      </section>
    </div>
  );
};

export default page1;
