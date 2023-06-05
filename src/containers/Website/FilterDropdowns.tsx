import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Selector from "@/common/components/Selector";
import { useForm, FormProvider, useWatch } from "react-hook-form";

const FilterDropdowns = ({ industries, filterModes, locations, apiCallEvent }: any) => {

  const methods = useForm();
  const watchAllFields = useWatch({ control: methods.control });

  useEffect(() => {
    console.log(watchAllFields);
    apiCallEvent(watchAllFields)
  }, [watchAllFields]);

  return (
    <>
      <FormProvider {...methods}>
        <form>
          <Grid p={"15px 0px"} container spacing={10} columns={12}>
            <Grid item xs={6} md={4} lg={3}>
              <Selector
                title="Industry Name"
                defaultValue={""}
                items={industries}
                name="industry"
              />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Selector
                title="Filter"
                defaultValue={""}
                items={filterModes}
                name="filter"
              />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Selector
                title="Location"
                defaultValue={""}
                items={locations}
                name="location"
              />
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default FilterDropdowns;
