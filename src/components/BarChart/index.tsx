import React, { FC, useMemo } from "react";
import { getChartData } from "../../utils/getChartData";
import ReactECharts from "echarts-for-react";
import style from "./BarChart.module.scss";
import { colors } from "../../constants/colors";
import { getStyledChartItems } from "../../utils/getStyledChartItems";

interface IBarChartProps {
  data: string;
}

const BarChart: FC<IBarChartProps> = ({ data }) => {
  const [dataSet, labels] = getChartData(data);

  const options = useMemo(
    () => ({
      xAxis: {
        type: "category",
        data: labels,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: getStyledChartItems(dataSet, colors),
          type: "bar",
          label: {
            show: true,
            position: "top",
          },
          tooltip: {
            show: false,
          },
          axisPointer: false,
        },
      ],
    }),
    [dataSet, labels]
  );

  return (
    <div className={style.container}>
      <ReactECharts option={options} />
    </div>
  );
};

export default BarChart;
