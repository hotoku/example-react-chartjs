import { Box, Paper } from "@mui/material";
import { Suspense } from "react";
import "./App.css";
import ChartSheet from "./components/ChartSheet";
import FormSheet from "./components/FormSheet";

function App() {
  return (
    <Box className="App">
      <Paper elevation={3}>
        <Box className="content-base">
          <FormSheet />
          <Suspense fallback={<Box>loading ...</Box>}>
            <ChartSheet />
          </Suspense>
        </Box>
      </Paper>
    </Box>
  );
}

export default App;
