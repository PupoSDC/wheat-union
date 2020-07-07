import React, { FunctionComponent, ReactNode } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/core/styles";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { User } from "types/User";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    margin: "auto",
    display: "flex",
    position: "relative",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    overflow: "scroll",
    maxWidth: 280 + 65,
    [theme.breakpoints.up("sm")]: {
      maxWidth: 330 * 2 + 65,
    },
  },
  cardContent: {
    width: "305px",
    [theme.breakpoints.up("sm")]: {
      width: "350px",
    },
  },
  map: {
    margin: "auto",
    height: "280px",
    width: "280px",
    [theme.breakpoints.up("sm")]: {
      height: "310px",
      width: "310px",
    },
  },
}));

type ProfileItemProps = {
  icon: ReactNode;
  label: string;
  secondaryLabel?: string;
};

const ProfileItem: FunctionComponent<ProfileItemProps> = ({ icon, label, secondaryLabel }) => (
  <ListItem>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={label} secondary={secondaryLabel ? <i>"{secondaryLabel}"</i> : ""} />
  </ListItem>
);

const UserProfile: FunctionComponent<User> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
  children,
}) => {
  const classes = useStyles();
  const prettyAdress = `${address.street} ${address.suite || ""}, ${address.zipcode || ""} ${
    address.city
  }`;

  const position: LatLngTuple = [Number(address.geo.lat), Number(address.geo.lng)];

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {username}
          </Typography>
          <List dense>
            {email && <ProfileItem icon={<MailIcon />} label={email} />}
            {phone && <ProfileItem icon={<PhoneIcon />} label={phone} />}
            {website && <ProfileItem icon={<HomeIcon />} label={website} />}
            {address && <ProfileItem icon={<LocationOnIcon />} label={prettyAdress} />}
            {company && (
              <ProfileItem
                icon={<BusinessIcon />}
                label={company?.name}
                secondaryLabel={company?.catchPhrase}
              />
            )}
          </List>
        </CardContent>

        <CardContent className={classes.cardContent}>
          <Map center={position} zoom={13} className={classes.map}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>{prettyAdress}</Popup>
            </Marker>
          </Map>
        </CardContent>
        <CardContent>{children}</CardContent>
      </Card>
    </>
  );
};

export default UserProfile;
