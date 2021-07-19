import * as React from "react";
import Row from "components/row";

interface VenueBodyProps {
  rows: number;
  seatsPerRow: number;
  ticketsToBuyCount: number;
}

const rowItems = (
  rows: number,
  seatsPerRow: number,
  ticketsToBuyCount: number
) => {
  const rowNumbers = Array.from(Array(rows).keys());
  return rowNumbers.map((rowNumber) => (
    <Row
      key={rowNumber}
      rowNumber={rowNumber}
      seatsPerRow={seatsPerRow}
      ticketsToBuyCount={ticketsToBuyCount}
    />
  ));
};

const VenueBody = (props: VenueBodyProps): React.ReactElement => {
  return (
    <table className="table">
      <tbody>
        {rowItems(props.rows, props.seatsPerRow, props.ticketsToBuyCount)}
      </tbody>
    </table>
  );
};

export default VenueBody;
