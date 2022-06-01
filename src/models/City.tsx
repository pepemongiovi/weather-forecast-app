interface Coordinates {
  lat: number;
  lon: number;
}

export default interface City {
  name: string
  coord: Coordinates
}


