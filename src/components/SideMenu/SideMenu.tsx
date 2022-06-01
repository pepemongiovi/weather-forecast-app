import { Drawer, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { addDays, pad } from "../../helpers/helper";
import WeatherForecast from "../../models/WeatherForecast";
import { Button } from "../common/Button/Button";

interface SideMenuProps {
  onSelect: (index: number) => void
  selectedForecastIndex: number | null
  dailyForecasts: WeatherForecast[]
}

const SideMenu = ({ selectedForecastIndex, dailyForecasts, onSelect }: SideMenuProps) => {
  const [menuItems, setMenuItems] = useState<string[]>([])
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => getMenuItems(), [])

  const getMenuItems = () => {
    const labels = []
    let date = new Date()

    for (let i = 0; i < parseInt(process.env.REACT_APP_DAYS_TO_FORECAST || "8"); i++) {
      date = addDays(i)

      const monthName = monthNames[date.getMonth()]
      const day = pad(date.getDate())
      let label = `${day} - ${monthName}`

      if (i === 0) label = `Today (${label})`
      else if (i === 1) label = `Tomorrow (${label})`

      labels.push(label)
    }
    setMenuItems(labels)
  }

  const isMenuItemSelected = (index: number) => selectedForecastIndex === index

  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          minWidth: 130, boxSizing: 'border-box'
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }} style={{ marginTop: 90 }}>
        <List>
          {menuItems.map((label, i) => (
            <ListItem key={label + i} style={{ textAlign: 'left' }}>
              <Button active={isMenuItemSelected(i)} {...{ label }} disabled={!dailyForecasts.length}
                onClick={() => onSelect(i)} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer >
  );
}

export default SideMenu