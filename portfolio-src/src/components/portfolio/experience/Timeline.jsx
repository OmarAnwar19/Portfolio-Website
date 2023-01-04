//react imports
import React from "react";

//mui imports
import { Timeline } from "@mui/lab";

import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

//icon imports
import { LaptopMac } from "@mui/icons-material";

//component imports
import TLineItem from "./TLineItem";

export default function OppositeContentTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: { sm: 0.2, xs: 0.5 },
        },
      }}
    >
      <TLineItem
        time={"2004"}
        title={"Code"}
        subtitle={"Lorem ipsum dolor sit"}
        icon={<LaptopMac />}
      />

      <TLineItem
        time={"2004"}
        title={"Code"}
        subtitle={"Lorem ipsum dolor sit"}
        icon={<LaptopMac />}
      />

      <TLineItem
        time={"2004"}
        title={"Code"}
        subtitle={"Lorem ipsum dolor sit"}
        icon={<LaptopMac />}
      />

      <TLineItem
        time={"2004"}
        title={"Code"}
        subtitle={"Lorem ipsum dolor sit"}
        icon={<LaptopMac />}
      />

      <TLineItem
        time={"2004"}
        title={"Code"}
        subtitle={"Lorem ipsum dolor sit"}
        icon={<LaptopMac />}
      />
    </Timeline>
  );
}
