import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Progress from "./Progress";

export default function MediaControlCard({ item }) {
  console.log(item);

  const theme = useTheme();

  return (
    <Card
      sx={{
        Width: "100%",
      }}
    >
      <CardContent style={{ minWidth: "310px", height: "120px", padding:10, alignContent:"center"}}>
        <Grid style={{margin:0, padding:0, alignItems:"center", height: "100%"}} container spacing={1.5} columns={12}>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <Typography variant="h6" component="div">
              {item.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" component="div">
              Total Message {item?.progressBar?.total}
            </Typography>
          </Grid>
          <Grid style={{alignItems:"center", textAlign:"center"}} item xs={5} sm={5} md={5} lg={5}>
            <Progress value={item.progressBar?.solve} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
