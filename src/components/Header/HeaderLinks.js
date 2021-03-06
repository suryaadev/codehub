import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

//matrial icon
import {CloudDownload } from "@material-ui/icons";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      
      <ListItem className={classes.listItem}>
        <Button
            href="/"
            color="transparent"
            className={classes.navLink}
          > Home
          </Button>
        
        
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/Project"
          color="transparent"
          className={classes.navLink}
        > Projects
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        > Coding Zone
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="Team"
          color="transparent"
          className={classes.navLink}
        > Team
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="Contact"
          color="transparent"
          className={classes.navLink}
        > Contact Us
        </Button>
      </ListItem> 
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Surya"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AccountCircleIcon}
          dropdownList={[
            <Link to={"Login"} className={classes.dropdownLink, classes.navLink}>
              Login/SignUp
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>
      
    </List>
  );
}
