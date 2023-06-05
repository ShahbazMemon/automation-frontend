import React from "react";
import CardSummary from "@/common/components/CardSummary";
import { Grid, Typography } from "@mui/material";

type summaryProps = {
  totalCompanyScrap: number;
};

const Summary = ({ data }: { data: summaryProps }) => {
  return (
    <>
      <Typography variant="h5" pb={2} color="black">
        Scrapping Summary
      </Typography>
      <Grid container spacing={1.5} columns={12}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CardSummary
            title={"Companies Scrapped Today"}
            value={data?.totalCompanyScrap}
            footer={<div> 24% increase from yesterday </div>}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Summary;
