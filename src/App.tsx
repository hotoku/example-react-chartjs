import { Box, Paper } from "@mui/material";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import ChartSheet from "./components/ChartSheet";
import FormSheet from "./components/FormSheet";

function App() {
  return (
    <Box className="App">
      <Paper elevation={3}>
        <ErrorBoundary fallback={<Box></Box>}>
          <Box className="content-base">
            <FormSheet />
            <Suspense fallback={<Box>loading ...</Box>}>
              <ChartSheet />
            </Suspense>
          </Box>
        </ErrorBoundary>
      </Paper>
    </Box>
  );
}

export default App;
