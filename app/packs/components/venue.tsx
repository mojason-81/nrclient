import * as React from "react";
import VenueBody from "components/venue_body";
import VenueHeader from "components/venue_header";

interface VenueProps {
  rows: number;
  seatsPerRow: number;
}

const Venue = (props: VenueProps): React.ReactElement => {
  const [ticketsToBuyCount, setTicketsToBuyCount] = React.useState(1);
  return (
    <>
      <VenueHeader
        seatsPerRow={props.seatsPerRow}
        setTicketsToBuyCount={setTicketsToBuyCount}
      />
      <VenueBody
        seatsPerRow={props.seatsPerRow}
        rows={props.rows}
        ticketsToBuyCount={ticketsToBuyCount}
      />
    </>
  );
};

export default Venue;
