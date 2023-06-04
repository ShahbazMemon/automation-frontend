import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// components//
import QueueCard from "@/common/components/QueueCard";
import Selector from "@/common/components/Selector";
import Summary from "./Summary";
import TopCompanies from "./TopCompanies";
import { FormProvider, useForm } from "react-hook-form";

const Website = () => {
  const methods = useForm();
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
        <FormProvider {...methods}>
          <form>
            <Grid p={"15px 0px"} container spacing={10} columns={12}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Selector
                  title={"Website Name"}
                  defaultValue={websites[0]}
                  items={websites}
                  handleChange={handleChange}
                  name={"website"}
                  // selectedOption={selectedOption}
                />
              </Grid>
            </Grid>
          </form>
        </FormProvider>
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
