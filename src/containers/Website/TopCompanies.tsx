import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Box, Grid, Typography } from "@mui/material";
import Table from "@/common/components/tables/Table";
import Checkbox from "./Checkbox";
import Industry from "./IndustrySelector";
import Graph2 from "@/common/components/Graph2";

type industryKeys = {
  title: string;
  link: string;
};

type topCompaniesProps = {
  industrydata: Array<industryKeys>; //graphKeys
};

const TopCompanies = ({ data }: { data: topCompaniesProps }) => {

  const { control } = useForm();

  // const [selectedIndustry, setSelectedIndustry] = useState("");
  const [filterMode, setFilterMode] = useState(data?.industrydata);
  const [industry, setIndustry] = useState(data?.industrydata);
  const [filter, setFilter] = useState("");
  const [location, setLocation] = useState("");
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

  // handlers

  //   action on selector
  const handleChange = (name : any,  value: any) => {

    console.log(name,value);
    
    // if (targetKey === "industry") {
    //   // setSelectedOption(targer?.title);
    // } else if (targetKey === "filter"){
      
    // } else {
    //   console.log("temp")
    // }

    // setSelectedOption(result);
    // // hit api and get selected industry data
    // // and then set into setGraphData()
    
    
    // setGraphData([result]);
  };

  return (
    <>
      <Industry
        control={control}
        industry={industry}
        filter={filter}
        location={location}
        handleChange={handleChange}
        // selectedOption={selectedOption}
      />
      <Box p={"15px 0px"}>
        <Graph2 graphData={graphData} />
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

export default TopCompanies;
