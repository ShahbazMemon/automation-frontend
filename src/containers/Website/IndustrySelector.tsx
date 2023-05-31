import { Box, Typography } from "@mui/material";
import React from "react";
import Selector from "@/common/components/Selector";

const Industry = ({industry, handleChange, selectedOption} : any) => {
  return (
    <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" pb={1} color="black">
            Select Industry
          </Typography>
          <Selector
            title={"Industry Name"}
            items={industry}
            handleChange={handleChange}
            selectedOption={selectedOption}
          />
        </Box>
    </>
  );
};

export default Industry;
