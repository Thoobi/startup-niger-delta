/* eslint-disable import/no-cycle */

'use client';

import { Input } from '@/components/ui/input';
// import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { useCallback, useEffect } from 'react';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { Label } from '../../ui/label';
import AngelFormInfo from './Angel-form-info';
import AngelFormIdentify from './Angel-form-identify';

export default function AngelFormInvestment() {
  const { setRange, setActiveTab, setIsNext } = useOnboardContext();

  useEffect(() => {
    setIsNext({
      pathname: '/onboarding/angel-investor',
      title: 'Investment Info',
    });
  }, [setIsNext]);

  const handlePrev = useCallback(() => {
    setRange(1);

    setActiveTab({
      title: 'Contact Info',
      Component: <AngelFormInfo />,
      src: '/angel/bgTrailer3.svg',
    });
  }, [setRange, setActiveTab]);

  const handleNext = useCallback(() => {
    setRange(3);

    setActiveTab({
      title: 'Identification',
      Component: <AngelFormIdentify />,
      src: '/angel/bgTrailer4.svg',
    });
  }, [setRange, setActiveTab]);

  return (
    <form className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 py-6 px-4">
        <div className="relative w-full">
          <Label
            htmlFor="angel"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Angel
          </Label>
          <Input
            type="text"
            id="angel"
            name="angel"
            placeholder="Full Name"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="investment-experience"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Investment Experience
          </Label>
          <Input
            type="date"
            id="investment-experience"
            placeholder="Choose investment experience"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="investment-proof"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Investment Proof
          </Label>
          <Input
            type="text"
            id="investment-proof"
            placeholder="E.g https://docs.googl.../1aByz123"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="investment-size"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Investment Size
          </Label>
          <Input
            type="tel"
            id="investment-size"
            placeholder="Choose investment size"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
      </div>

      <div className="col-span-2 flex items-end justify-between w-full mt-auto pb-6">
        <p className="text-custom-orange">
          *You must fill in all field to be able to continue
        </p>
        <div className="flex gap-3">
          <Button
            type="button"
            onClick={handlePrev}
            className="px-10 bg-gray-200 hover:bg-gray-200"
          >
            Back
          </Button>
          <Button
            type="button"
            onClick={handleNext}
            className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark"
          >
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}
