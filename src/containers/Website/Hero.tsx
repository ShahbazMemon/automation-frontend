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
      title: "Home Queue",
      temp: "Etc",
      progressBar: {
        total: 150,
        solve: 10,
        fail: 120,
      },
    },
    {
      title: "Catagories Queue",
      temp: "Etc",
      progressBar: {
        total: 150,
        solve: 10,
        fail: 120,
      },
    },
    {
      title: "Companies Queue",
      temp: "Etc",
      progressBar: {
        total: 150,
        solve: 10,
        fail: 120,
      },
    },
    {
      title: "Companies Queue",
      temp: "Etc",
      progressBar: {
        total: 150,
        solve: 10,
        fail: 120,
      },
    },
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
            padding={"20px 20px"}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 500,
              height: 200,
              backgroundColor: "",
              borderRadius: "20px",
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
          <Box
            padding={"20px"}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              // height: "500px",
              backgroundColor: "#19857b",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <div style={{paddingBottom: "30px"}}>
                <Typography
                  variant="h4"
                  color="white"
                >
                  Queues Progress
                </Typography>
              </div>
              <Grid container spacing={1.5} columns={12}>
                {queues.map((queue, i) => {
                  return (
                    <Grid item xs={12} md={6} lg={4} key={i}>
                      <QueueCard item={queue} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </div>
      </Container>
    </section>
  );
};

export default Website;
