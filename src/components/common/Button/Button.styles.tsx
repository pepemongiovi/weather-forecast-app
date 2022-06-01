import { Button } from "@mui/material";
import styled from "styled-components";

export const CustomButton = styled(Button) <{ active?: boolean }>`
  width: 100%;
  margin-bottom: 5px !important;
  background-color: ${props => props.active ? 'transparent' : '#7D34FA'} !important;
  border: ${props => props.active ? 'solid 2px #7D34FA !important' : 'none'};
  color: ${props => props.active ? '#7D34FA' : 'whote'} !important;
  &:hover {
    background-color: transparent !important;
    color: #7D34FA;
    border: solid 2px #7D34FA;
  }
`