import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Selector from "@/common/components/Selector";
import { useForm, FormProvider, useWatch } from "react-hook-form";

const Industry = ({industry, filter, location, apiCallEvent} : any) => {
  
  const methods = useForm();
  const watchAllFields = useWatch({control : methods.control}); 

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => console.log(value, name, type));
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  useEffect(()=>{
    console.log(watchAllFields);
    apiCallEvent(watchAllFields)
  }, [watchAllFields]);

  return (
    <>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={10} columns={12}>
            <Grid item xs={6} md={4} lg={3}>
              <Selector
                title="Industry Name"
                defaultValue={industry[0]}
                items={industry}
                name="industry"
              />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Selector
                title="Filter"
                defaultValue={filter[0]}
                items={filter}
                name="filter"
              />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Selector
                title="Location"
                defaultValue={location[0]}
                items={location}
                name="location"
              />
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default Industry;
