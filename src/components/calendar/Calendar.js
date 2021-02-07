import { Grid, GridItem, Box } from "@chakra-ui/react";
import CalDate from "./CalDate";
const days = [];
const day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 5; j++) {
        let options = {
            "key": i * 5 + j + 1
        }
        if (i === 0) {
            options.dayOfWeek = day_names[j];
            options.dateNum = 1 + j;
        }
        days.push(options);
    }
}
const Calendar = () => {
    return (
        <Grid
            h="700px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
        >
            {
                days.map(options => {
                    return <CalDate key={options.key} dayOfWeek={options.dayOfWeek} dateNum={options.dateNum} />
                })
            }

            {/* <CalDate dayOfWeek="Monday" dateNum="" isToday="false"/>
            <CalDate dayOfWeek="Tuesday" />
            <CalDate dayOfWeek="Wednesday" />
            <CalDate dayOfWeek="Thursday" />
            <CalDate dayOfWeek="Friday" />
            <CalDate />
            <CalDate />
            <CalDate />
            <CalDate />
            <CalDate /> */}
        </Grid>
    )
}

export default Calendar
