import { Box, Button, Card } from "@mui/material";
import { useSetAtom } from "jotai";
import { MouseEventHandler, useState } from "react";
import { download } from "../api";
import { asyncValues } from "../atoms";

import "./FormSheet.css";

function FormSheet(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const setValues = useSetAtom(asyncValues);

  const clickHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setValues(
      download().then((v) => {
        setLoading(false);
        return v;
      })
    );
  };

  return (
    <Card>
      <Box className="form-base">
        <Button variant="contained" disabled={loading} onClick={clickHandler}>
          download
        </Button>
      </Box>
    </Card>
  );
}

export default FormSheet;
