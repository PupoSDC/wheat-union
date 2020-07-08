import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import useAxios from "axios-hooks";
import { User } from "types/User";
import LoadingSpinner from "components/LoadingSpinner";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { USERS_API, userRouteForUserId } from "consts/routes";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: theme.spacing(1),
  },
  map: {
    margin: "auto",
    height: "370px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "310px",
      maxWidth: "720px",
      width: "100%",
      margin: "auto",
    },
  },
}));

const LandingPageView: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [{ data: users = [], loading }] = useAxios<User[]>(USERS_API);
  if (loading) return <LoadingSpinner />;
  const position: LatLngTuple = [0, 0];

  return (
    <div className={classes.container}>
      <Map center={position} zoom={0} className={classes.map}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {users.map(({ name, id, address: { geo } }) => {
          return (
            <Marker position={[Number(geo.lat), Number(geo.lng)]} key={id}>
              <Popup>
                <Link to={userRouteForUserId(id)}>{name}</Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default LandingPageView;
