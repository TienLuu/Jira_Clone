import Grid from "@mui/material/Unstable_Grid2";

import useTimer from "../../../hooks/useTimer";
import { Title, Wrapper, Timer } from "./Styles";

const UnderDevelopment = () => {
   const { days, hours, minutes, seconds } = useTimer(new Date("2023-03-1"));

   return (
      <Wrapper>
         <Title>
            <h2>Comming Soon</h2>
            <p>Our Page is under construction</p>
         </Title>
         <Timer>
            <Grid container spacing={{ xs: 1, md: 4 }}>
               <Grid xs={3}>
                  <div className="card">
                     <p>{days}</p>
                     days
                  </div>
               </Grid>
               <Grid xs={3}>
                  <div className="card">
                     <p>{hours}</p>
                     hours
                  </div>
               </Grid>
               <Grid xs={3}>
                  <div className="card">
                     <p>{minutes}</p>
                     minutes
                  </div>
               </Grid>
               <Grid xs={3}>
                  <div className="card">
                     <p>{seconds}</p>
                     seconds
                  </div>
               </Grid>
            </Grid>
         </Timer>
      </Wrapper>
   );
};

export default UnderDevelopment;
