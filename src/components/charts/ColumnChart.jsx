import FusionCharts from "fusioncharts"
import charts from "fusioncharts/fusioncharts.charts"
import ReactFusioncharts from "react-fusioncharts"

// Resolves charts dependancy
charts(FusionCharts)

const ColumnChart = ({ data }) => {
  const dataSource = {
    chart: {
      caption: "Most Popular",
      yaxisname: "Stars",
      decimals: "1",
      theme: "candy",
    },
    data,
  }

  return (
    <ReactFusioncharts
      type="column3d"
      width="100%"
      height="400"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  )
}

export default ColumnChart
