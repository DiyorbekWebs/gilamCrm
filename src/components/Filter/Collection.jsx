import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Btn, Div1, Icon, Text } from ".";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: "290px",
  marginBottom: "11px",
  padding: "0px",
  "&:not(:last-child)": {},
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    padding: "0px",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {},
    "& .MuiAccordionSummary-content": {},
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));
export default function Collection() {
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
            <Icon />
          </Btn>
          <Text>Выберите коллекцию</Text>
        </Div1>
      </AccordionSummary>
      <AccordionDetails>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </AccordionDetails>
    </Accordion>
  );
}
