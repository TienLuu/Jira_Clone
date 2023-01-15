import PropTypes from "prop-types";
import { useImperativeHandle, forwardRef } from "react";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import LinearProgress from "@mui/material/LinearProgress";

import useUpdateValue from "../../../hooks/useUpdateValue";
import { Container, ProgressBar, ProgressInfo, Wrapper } from "./Styles";

const propTypes = {
   timeSpend: PropTypes.number,
   timeRemain: PropTypes.number,
   label: PropTypes.bool,
};

const defaultProps = {
   timeSpend: 0,
   timeRemain: 0,
};

const TimeTracking = forwardRef(({ timeSpend, timeRemain, label }, ref) => {
   const [timeSpending, setTimeSpending] = useUpdateValue(timeSpend);
   const [timeRemaining, setTimeRemaining] = useUpdateValue(timeRemain);

   const progress =
      (100 * Number(timeSpending)) /
      (Number(timeSpending) + Number(timeRemaining));

   const timeTrackingMethod = {
      setTimeSpending,
      setTimeRemaining,
   };

   useImperativeHandle(ref, () => timeTrackingMethod);

   return (
      <Wrapper>
         {label ? <label htmlFor="">Time Tracking</label> : null}
         <Container>
            <TimerOutlinedIcon className="clockIcon" />
            <ProgressBar>
               <LinearProgress variant="determinate" value={progress} />
               <ProgressInfo>
                  <span>{timeSpending}h logged</span>
                  <span>{timeRemaining}h remaining</span>
               </ProgressInfo>
            </ProgressBar>
         </Container>
      </Wrapper>
   );
});

TimeTracking.propTypes = propTypes;
TimeTracking.defaultProps = defaultProps;

export default TimeTracking;
