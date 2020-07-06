import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Map, TileLayer, Marker } from "react-leaflet";
import { LatLngTuple, LeafletMouseEvent } from "leaflet";
import { Geo, Address } from "types/User";
import axios from "axios";
import { REVERSE_LOCATION_API } from "consts/routes";
import { FieldProps, getIn } from "formik";
import { Feature } from "geojson";

const useStyles = makeStyles((theme) => ({
  map: {
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "280px",
      width: "280px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "320px",
      width: "320px",
    },
    [theme.breakpoints.up("md")]: {
      height: "480px",
      width: "480px",
    },
  },
}));

const dusseldorf: LatLngTuple = [51.215056287181916, 6.771869659423828];

interface LocationFieldProps extends FieldProps {}

/** Type inferred from oepnstreemaps API **/
type GeoJsonAddress = {
  road: string;
  suburb: string;
  city: string;
  postcode: string;
};

// Cache the old location to avoid unecessary API calls
let oldLocation: Geo;

const LocationField: FunctionComponent<LocationFieldProps> = ({
  field,
  form: { setFieldValue, values },
}) => {
  const fieldValue = getIn(values, field.name);
  const geoFieldValue = getIn(values, `${field.name}.geo`);

  const [location, setLocation] = useState<Geo>(geoFieldValue);
  const [zoom, setZoom] = useState<number>(1);
  const mapRef = useRef<Map>(null);
  const classes = useStyles();
  const position: LatLngTuple = location
    ? [Number(location.lat), Number(location.lng)]
    : dusseldorf;
  const handleClick = ({ latlng }: LeafletMouseEvent) => {
    console.log(`${REVERSE_LOCATION_API}?lat=${latlng.lat}&long=${latlng.lng}`);
    setLocation({
      lat: `${latlng.lat}`,
      lng: `${latlng.lng}`,
    } as Geo);
  };


  useEffect(() => {
    const getLocation = async () => {
      if (location && location !== oldLocation) {
        oldLocation = location;
        let address: GeoJsonAddress = {
          road: "",
          suburb: "",
          city: "",
          postcode: "",
        };
        try {
          const {
            data: { features },
          } = await axios.get<{ features: Feature[] }>(REVERSE_LOCATION_API, {
            params: {
              format: "geojson",
              lat: location.lat,
              lon: location.lng,
            },
          });
          if (!features.length || !features[0].properties || !features[0].properties.address) {
            throw new Error("Invalid features");
          }
          address = features[0].properties.address;
        } catch (error) {
          console.error("Failure to retrieve geographical data", location, error);
        }
        try {
          setFieldValue(field.name, {
            ...fieldValue,
            street: address.road,
            suite: address.suburb,
            city: address.city,
            zipcode: address.postcode,
            geo: location,
          } as Address);
        } catch (error) {
          console.error("Failure retrieving data from address", address, fieldValue, error);
        }
      }
    };
    getLocation();
  }, [location, field.name, fieldValue, setFieldValue]);

  return (
    <Map
      zoom={zoom}
      onzoomend={() => setZoom(mapRef.current!.leafletElement.getZoom())}
      center={position}
      className={classes.map}
      onclick={handleClick}
      ref={mapRef}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {location && <Marker position={position} />}
    </Map>
  );
};

export default LocationField;
