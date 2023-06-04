import React, { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type graphKeys = {
  title: string;
  person: number;
  payScale: number;
};

// type graphProps = {
//   graphData: Array<graphKeys>; //graphKeys
// };

const Graph2 = ({ graphData, mode }: { graphData: Array<graphKeys>, mode: any}) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  console.log("graphData >>", graphData);
  
  const options = {

      title: {
        text: 'Software Companies'
      },
      xAxis: {
        categories:  graphData.map((ele)=>{
          return ele?.title
        }),
      },
      series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: graphData.map((ele : {title : string, [key : string] : any})=>{
          return {name: ele?.title, y : ele[mode]}
        }),
        showInLegend: true
      }]
    // ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      // constructorType={'areaspline'}
      options={options}
      // ref={chartComponentRef}
      {...graphData}
    />
  );
};

export default Graph2;
