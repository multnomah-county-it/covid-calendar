import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { computeHouseHoldQuarantinePeriod } from "./calculator";
import { PersonData, CalculationResult } from "./types";
import { format } from "date-fns";

interface Props {
  members: PersonData[];
}
export default function GridView(props: Props) {
  const events = [
    {
      classNames: ["unknown-future"],
      title: "Unknown end",
      start: "2020-08-01",
      end: "2020-08-01",
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderColor: "rgba(0, 0, 0, 0)"
    }
  ];

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
      {computeHouseHoldQuarantinePeriod(props.members).map(
        (result: CalculationResult) => {
          return (
            <div className="p32">
              {result.person.name} {" quarantined until: "}{" "}
              {format(result.date, "MM/dd/yyyy")}
            </div>
          );
        }
      )}
    </div>
  );
}
