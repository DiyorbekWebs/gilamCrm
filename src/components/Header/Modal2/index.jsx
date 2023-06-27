import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Plus2 } from "../../../assets/img/img";
import { Btn, Div1, Text } from "../../Filter";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: "290px",
  marginBottom: "11px",
  padding: "0px",
  "&:not(:last-child)": {},
  "&:before": {
    display: "none",
    backgroundColor: "#fff",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    padding: "0px",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {},
    "& .MuiAccordionSummary-content": {},
    backgroundColor: "#ffff",
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));
export function Collection2({ text, check }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === "panel2"}
      onChange={handleChange("panel2")}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Div1>
          <Btn>
            <img src={Plus2} alt="" />
          </Btn>
          <Text>{text}</Text>
        </Div1>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "#ffff",
        }}
      >
        <Text>Test</Text>
      </AccordionDetails>
    </Accordion>
  );
}
