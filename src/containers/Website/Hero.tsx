import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Box, Typography, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// components//
import QueueCard from "@/common/components/QueueCard";
import Selector from "@/common/components/Selector";
import Summary from "./Summary";
import TopCompanies from "./TopCompanies";

const Website = () => {
  // styled //
  const Item = styled(Paper)(({ theme }: any) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // states
  const [selectedOption, setSelectedOption] = useState("");
  const [websites, setWebsites] = useState([
    {
      title: "Clutch",
      link: "https://clutch.co/",
    },
    {
      title: "def",
      link: "....",
    },
    {
      title: "ghi",
      link: "....",
    },
    {
      title: "jkl",
      link: "....",
    },
  ]);
  const [queues, setQueues] = useState([
    {
      title: "Message",
      progressBar: {
        total: 150,
      },
    },
    {
      title: "Resolve Messages",
      progressBar: {
        total: 150,
      },
    },
    {
      title: "Fails Messages",
      progressBar: {
        total: 150,
      },
    },
  ]);
  const [data, setData] = useState({
    totalCompanyScrap: 120,
    industrydata: [
      { title: "Web Development", link: "...." },
      { title: "Mobile Application", link: "" },
      { title: "Blockchain", link: "..." },
    ],
  });

  useEffect(() => {
    // will fetch websites from db
    //setWebsites(....)
    // will fetch data of companies scapped today
    // will fetch industries
    //setSummary(....)
    console.log("run");
  }, []);

  // handlers
  const handleChange = (e: any) => {
    const result = e.target.value;
    setSelectedOption(result);
    // hit api for scap data
    // and set setQueues()
  };

  return (
    <section>
      <Container>
        <Box p={"20px 0px"}>
          <Selector
            title={"Website Name"}
            items={websites}
            handleChange={handleChange}
            selectedOption={selectedOption}
          />
        </Box>
        <div style={{ padding: "15px 0px" }}>
          <Typography variant="h5" pb={2} color="black">
            Queues Progress
          </Typography>
          <Grid container spacing={1.5} columns={12}>
            {queues.map((queue, i) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  key={i}
                  style={{ alignItems: "center" }}
                >
                  <QueueCard item={queue} />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <div style={{ padding: "15px 0px" }}>
          <Summary data={data} />
        </div>
        <div style={{ padding: "15px 0px" }}>
          <TopCompanies data={data} />
        </div>
      </Container>
    </section>
  );
};

export default Website;
