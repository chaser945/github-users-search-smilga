import FusionCharts from "fusioncharts"
import charts from "fusioncharts/fusioncharts.charts"
import ReactFusioncharts from "react-fusioncharts"

// Resolves charts dependancy
charts(FusionCharts)

const BarChart = ({ data }) => {
  const dataSource = {
    chart: {
      caption: "Top 5 High-Income Careers",
      yaxisname: "Annual Income",
      showvalues: "1",
      numberprefix: "$",
      theme: "candy",
    },
    data,
  }
  return (
    <ReactFusioncharts
      type="bar3d"
      width="100%"
      height="400"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  )
}
export default BarChart
