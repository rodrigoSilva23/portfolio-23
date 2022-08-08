import { ChatTeardropDots, Heart, Cube } from "phosphor-react";
import { Popover, Transition } from "@headlessui/react";
import { useState } from "react";
import { WidgetForm } from "./WidgetForm";
interface WidgetButtonProps {
  widget?: boolean;
}
export const WidgetButton = ({}: WidgetButtonProps) => {
  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end ">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full px-3 mt-1 h-12 text-white flex items-center  group ">
        <ChatTeardropDots className="w-6 h-6" />
        <span className=" max-w-0 overflow-hidden group-hover:max-w-xs  group-focus:max-w-xs  transition-all duration-500 ease-linear ">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};
