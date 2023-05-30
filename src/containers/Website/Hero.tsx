import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import QueueCard from "../../common/components/QueueCard";
import CardSummary from '../../common/components/CardSummary'
import Progress from "../../common/components/Progress";

// components//
import Selector from "@/common/components/Selector";

const Website = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [websites, setWebsites] = useState([
    {
      value: "Clutch",
      link: "https://clutch.co/",
    },
    {
      value: "def",
      link: "....",
    },
    {
      value: "ghi",
      link: "....",
    },
    {
      value: "jkl",
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
    }
  ]);

  // styled //
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleChange = (e: any) => {
    const result = e.target.value;
    setSelectedOption(result);
    console.log("e >>", result);
  };

  const onSubmit = () => {
    // api integration required
    console.log("target", websites);
  };

  return (
    <section>
      <Container>
        <div style={{ padding: "20px 0px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "ActiveBorder",
            }}
          >
            <Selector
              title={"Website Name"}
              items={websites}
              handleChange={handleChange}
              selectedOption={selectedOption}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onSubmit={onSubmit}
            >
              Send
            </Button>
          </Box>
        </div>
        <div>
          <Typography variant="h4" color="black">
            Queues Progress
          </Typography>
          <div style={{padding: "15px 0px"}}>
          <Grid container spacing={1.5} columns={12}>
            {queues.map((queue, i) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={i} style={{alignItems: "center"}}>
                  <QueueCard item={queue} />
                </Grid>
              );
            })}
          </Grid>
          </div>
        </div>
        <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <CardSummary
              title="Problems completed today"
              value={5}
              footer={<div> 24% increase from yesterday </div>}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <CardSummary
              title="Problems completed today"
              value={5}
              footer={<div> 24% increase from yesterday </div>}
            />
          </Grid>
        </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Website;
