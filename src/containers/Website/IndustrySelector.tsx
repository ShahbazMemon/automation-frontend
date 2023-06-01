import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Selector from "@/common/components/Selector";
import { useForm, FormProvider } from "react-hook-form";

const Industry = ({ control, industry, handleChange, selectedOption }: any) => {
  const methods = useForm();
  return (
    <>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={1.5} columns={12}>
            <Grid item xs={12} md={6} lg={4}>
              <Typography variant="h6" pb={1} color="black">
                Industry
              </Typography>
              <Selector
                title="Industry Name"
                control={control}
                items={industry}
                defaultValue=""
                handleChange={(e: any) =>
                  handleChange("industry", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Typography variant="h6" pb={1} color="black">
                Filter Mode
              </Typography>
              <Selector
                title="Filter"
                control={control}
                items={industry}
                defaultValue=""
                handleChange={(e: any) =>
                  handleChange("filter", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Typography variant="h6" pb={1} color="black">
                Temp
              </Typography>
              <Selector
                title="Temp"
                control={control}
                items={industry}
                defaultValue=""
                handleChange={(e: any) => handleChange("temp", e.target.value)}
              />
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default Industry;
