import { Paper, Box } from "@mui/material";
import { useAtomValue } from "jotai";
import { asyncValues } from "../atoms";

import "./ChartSheet.css";

function ChartSheet(): JSX.Element {
  const values = useAtomValue(asyncValues);
  if (values === undefined) {
    return (
      <Paper>
        <Box className="chart-message">not loaded</Box>{" "}
      </Paper>
    );
  }
  return (
    <Paper>
      <Box className="chart-base">
        <ul>
          {values.map((v, i) => {
            return <li key={i}>{v}</li>;
          })}
        </ul>
      </Box>
    </Paper>
  );
}

export default ChartSheet;
