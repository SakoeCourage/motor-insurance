import type { Step } from "../Lcomps/hstepper/steppertypes";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
export const stepList: Step[] = [
  {
    label: "Step 1",
    component: Step1,
  },
  {
    label: "Step 2",
    component: Step2,
  },
  {
    label: "Step 3",
    component: Step3,
  },
];
