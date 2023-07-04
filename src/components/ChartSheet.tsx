import { Box, Card } from "@mui/material";
import { useAtomValue } from "jotai";
import { Line } from "react-chartjs-2";
import { asyncValues } from "../atoms";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./ChartSheet.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartSheet(): JSX.Element {
  const values = useAtomValue(asyncValues);
  if (values === undefined) {
    return (
      <Card>
        <Box className="chart-message">not loaded</Box>
      </Card>
    );
  }

  const graphData = {
    labels: values.map((_, i) => i),
    datasets: [{ label: "values", data: values }],
  };

  return (
    <Card>
      <Box className="chart-base">
        <Line data={graphData}></Line>
      </Box>
    </Card>
  );
}

export default ChartSheet;
