import { AppBar, Typography } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(AppBar)`
  background-color: #08112B !important;
  display: flex;
  flex-direction: row !important;
  align-items: center !important;
  padding: 15px;
  margin-top: -5px;
`

export const Title = styled(Typography)`
  color: white;
  padding-left: 20px;
`