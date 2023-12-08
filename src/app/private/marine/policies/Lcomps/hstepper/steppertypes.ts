import { boolean } from "zod";

export type getCurrentStep = () => Step | undefined

export type onNextStep = () => void;

export type onPrevStep = () => void;

export type isLastStep = () => boolean;

export type isFirstStep = () => boolean;

export interface StepperFunctions {
    getCurrentStep: () => Step | undefined;
    onNextStep: () => void;
    onPrevStep: () => void;
    isLastStep: () => boolean;
    isFirstStep : () => boolean;
}

export type Step = {
    label: String,
    component: React.FC<Partial<StepperFunctions>>
}


export interface IStepperOPtions {
    steps: Step[]
}