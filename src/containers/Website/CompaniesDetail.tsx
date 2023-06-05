import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Table from "@/common/components/tables/Table";
import FilterDropdowns from "./FilterDropdowns";
import Graph from "@/common/components/Graph";

type industryKeys = {
  title: string;
  link: string;
};

type topCompaniesProps = {
  industrydata: Array<industryKeys>; //graphKeys
};

const CompaniesDetail = ({ data }: { data: topCompaniesProps }) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [industries, setIndustries] = useState(data?.industrydata);
  const [filterModes, setFilterModes] = useState([
    { title: "Length", link: "person" },
    { title: "PayScale", link: "payScale" },
  ]);
  const [locations, setLocations] = useState([
    { title: "option4", link: "Option 4" },
    { title: "option5", link: "Option 5" },
    { title: "option6", link: "Option 6" },
  ]);
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
      payScale: 200,
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
  const [custom, setCustom] = useState({
    filterMode: ""
  });

  //   action on selector
  const apiCallEvent = (data: any) => {
    //  api work remaining 
    console.log("data >", data);
    setCustom({ ...custom, filterMode: data.filter })
  };

  return (
    <>
      <FilterDropdowns
        industries={industries}
        filterModes={filterModes}
        locations={locations}
        apiCallEvent={apiCallEvent}
      />
      <Box p={"15px 0px"}>
        <Graph graphData={graphData} mode={custom.filterMode} />
      </Box>
      <Box p={"15px 0px"}>
        <Typography variant="h5" pb={2} color="black">
          Top Companies
        </Typography>
        <div>
          <Table />
        </div>
      </Box>
    </>
  );
};

export default CompaniesDetail;
