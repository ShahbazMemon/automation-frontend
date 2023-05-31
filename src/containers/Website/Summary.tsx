import CardSummary from "@/common/components/CardSummary";
import { Grid, Typography } from "@mui/material";
import React from "react";

type graphKeys = {
};

type summaryProps = {
  totalCompanyScrap: number;
  graphData: Array<graphKeys>;
};

const Summary = ({ title, data }: { title: string; data: summaryProps }) => {
  return (
    <>
      <Typography variant="h5" pb={2} color="black">
        Scrapping Summary
      </Typography>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <CardSummary
              title={title}
              value={data?.totalCompanyScrap}
              footer={<div> 24% increase from yesterday </div>}
            />
          </Grid>
          {data?.graphData?.map((item) => {
            return (
              <>
                
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Summary;
