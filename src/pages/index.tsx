import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Box, Button } from "@mui/material";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import { NEXT_PUBLIC_GOOGLE_MAPS_API_KEY } from "utils/env";

function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef<any>();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
}

const Home: NextPage = () => {
  return (
    <Wrapper apiKey={NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <MyMapComponent center={{ lat: 51.169392, lng: 71.449074 }} zoom={8} />
    </Wrapper>
  );
};

export default Home;
