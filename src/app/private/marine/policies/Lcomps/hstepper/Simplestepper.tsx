import React from "react";
import {
  IStepperOPtions,
  getCurrentStep,
  onNextStep,
  onPrevStep,
  isLastStep,
  isFirstStep,
} from "./steppertypes";
import { Button } from "@app/components/ui/button";
const Simplestepper: React.FC<IStepperOPtions> = (props) => {
  const [currentStepIndex, setCurrentStepIndex] = React.useState<number>(0);
  const { steps } = props;
  let Component = steps[currentStepIndex].component;

  const getCurrentStep: getCurrentStep = () => {
    let c_step = steps.at(currentStepIndex);
    return c_step;
  };

  const isLastStep: isLastStep = () => {
    return currentStepIndex + 1 == steps.length;
  };

  const isFirstStep: isFirstStep = () => {
    return currentStepIndex == 0;
  };

  const scrollToTop = () => {
    var container = document.querySelector(".policy-page");

    if (container != null) {
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const onNextStep: onNextStep = () => {
    if (!isLastStep()) {
      setCurrentStepIndex((cv) => (cv = cv + 1));
      scrollToTop();
    }
  };
  const onPrevStep: onPrevStep = () => {
    if (!isFirstStep()) {
      setCurrentStepIndex((cv) => (cv = cv - 1));
      scrollToTop();
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <div className="flex flex-col gap-1">
          <nav className=" font-semibold text-gray-600">
            <nav className=" w-max ml-auto rounded-full bg-gray-100 py-2 px-5">
              Step <span className="text-gray-500">{currentStepIndex + 1}</span>
              /<span>{steps.length}</span>
            </nav>
          </nav>
          <Component
            onNextStep={onNextStep}
            onPrevStep={onPrevStep}
            isLastStep={isLastStep}
            isFirstStep={isFirstStep}
            getCurrentStep={getCurrentStep}
          />
        </div>
      </div>

      <nav className="!bg-white py-5 px-5 rounded-md border">
        <nav className="flex ml-auto items-center justify-end gap-3">
          <Button
            onClick={(e: React.FormEvent) => {
              e.preventDefault();
              onPrevStep();
            }}
            variant="outline"
            className="flex items-center gap-2"
          >
            Previous
          </Button>
          <Button
            onClick={(e: React.FormEvent) => {
              e.preventDefault();
              onNextStep();
            }}
            variant="success"
            className="flex items-center gap-2"
          >
            {isLastStep() ? "Finsih" : "Continue"}
          </Button>
        </nav>
      </nav>
    </div>
  );
};

export default Simplestepper;
