import { Box, Paper } from "@mui/material";
import "./App.css";
import ChartSheet from "./components/ChartSheet";
import FormSheet from "./components/FormSheet";

function App() {
  return (
    <Box className="App">
      <Paper elevation={3}>
        <Box className="content-base">
          <FormSheet />
          <ChartSheet />
        </Box>
      </Paper>
    </Box>
  );
}

export default App;
