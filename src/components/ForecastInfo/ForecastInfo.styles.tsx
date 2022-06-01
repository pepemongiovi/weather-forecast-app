import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

export const Label = styled(Typography)`
  font-size: 1em !important;
  color: #d5bcff;

`

export const Value = styled(Typography)`
  font-size: 1.5em !important;
`

export const InfoContainer = styled.div`
  margin-bottom: 20px;
`

export const InfoGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10;
`
