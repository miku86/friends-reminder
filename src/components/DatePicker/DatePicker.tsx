import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "date-fns";
import React from "react";
import { connect } from "react-redux";
import { updateLastTimeContacted } from "../../state/friendsSlice";
import { convertHumanTimeToTimeStamp } from "../../utils/date";
import { Friend, UpdateFriend } from "../../utils/types";

interface Props {
  docId: Friend["docId"];
  lastTimeContacted: Friend["lastTimeContacted"];
  updateLastTimeContacted: ({ docId, lastTimeContacted }: UpdateFriend) => void;
}

const DatePicker = ({
  docId,
  lastTimeContacted,
  updateLastTimeContacted,
}: Props) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(lastTimeContacted)
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSubmit = (date: Date | null) => {
    const lastTimeContacted = convertHumanTimeToTimeStamp(date);
    updateLastTimeContacted({ docId, lastTimeContacted });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Last Contact"
        format="yyyy/MM/dd"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        disableFuture={true}
        onAccept={handleSubmit}
      />
    </MuiPickersUtilsProvider>
  );
};

const mapDispatchToProps = {
  updateLastTimeContacted,
};

export default connect(null, mapDispatchToProps)(DatePicker);
