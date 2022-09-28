import { BellAlertIcon,PresentationChartLineIcon,ChatBubbleLeftRightIcon,AdjustmentsHorizontalIcon,DocumentTextIcon } from "@heroicons/react/24/outline";
import React from "react";
import { AccordionNormal } from "./AccordionNormal";

const ACCORDION_DATA = [
  {
    id: 1,
    item: [<PresentationChartLineIcon className="w-6 h-6" />, "summary"],
    panel: ["1", "2"],
  },
  {
    id: 2,
    item: [<BellAlertIcon className="w-6 h-6 " />, "PUBLISH"],
    panel: ["Compose", "Feed"],
  },
  {
    id: 3,
    item: [<ChatBubbleLeftRightIcon className="w-6 h-6 " />, "engage"],
    panel: ["2", "1"],
  },
  {
    id: 4,
    item: [<AdjustmentsHorizontalIcon className="w-6 h-6 " />, "listen"],
    panel: ["2", "1"],
  },
  {
    id: 5,
    item: [<DocumentTextIcon className="w-6 h-6 " />, "report"],
    panel: ["2", "1"],
  },
];

function Action() {
  return (
    <div className="w-full">
      <AccordionNormal list={ACCORDION_DATA} />
    </div>
  );
}

export default Action;
