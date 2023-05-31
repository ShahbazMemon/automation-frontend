import React, { useEffect, useState } from "react";
import CardSummary from "@/common/components/CardSummary";
import Graph2 from "@/common/components/Graph2";
import { Grid, Typography } from "@mui/material";
import Industry from "./IndustrySelector";

type industryKeys = {
  title: string;
  link: string;
};

type summaryProps = {
  totalCompanyScrap: number;
  industrydata: Array<industryKeys>; //graphKeys
};

const Summary = ({ data }: { data: summaryProps }) => {
  // for select industry
  const [selectedOption, setSelectedOption] = useState("");

  const [industry, setIndustry] = useState(data?.industrydata);
  const [graphData, setGraphData] = useState([
    {
      title: "Expedey",
      person: 72,
      payScale: 1200,
    },
    {
      title: "Kamsoft",
      person: 600,
      payScale: 1200,
    },
    {
      title: "Xiaomi",
      person: 39,
      payScale: 1200,
    },
    {
      title: "Apple",
      person: 543,
      payScale: 1200,
    },
    {
      title: "Salesoft",
      person: 643,
      payScale: 1200,
    },
    {
      title: "Vivo",
      person: 24,
      payScale: 1200,
    },
    {
      title: "Realme",
      person: 86,
      payScale: 1200,
    },
    {
      title: "Unknown",
      person: 322,
      payScale: 1200,
    },
    {
      title: "Motorola",
      person: 987,
      payScale: 1200,
    },
    {
      title: "LG",
      person: 1000,
      payScale: 1200,
    },
    {
      title: "Other",
      person: 210,
      payScale: 1200,
    },
  ]);

  //   action on selector
  const handleChange = (e: any) => {
    const result = e.target.value;
    setSelectedOption(result);
    // hit api and get selected industry data 
    // and then set into setGraphData()
    setGraphData([result])
  };

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
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Industry
              industry={industry}
              selectedOption={selectedOption}
              handleChange={handleChange}
            />
            <Graph2 graphData={graphData} />
          </Grid>
      </Grid>
    </>
  );
};

export default Summary;
