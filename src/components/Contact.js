// pertama inmport react
import React from 'react';
// material mui list item dan text
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// material avatar untuk gambarnya
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

// import garis
import Divider from "@mui/material/Divider";

// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // deklarasi isi cost dengan data array
     const { name, phone, email, photo } = data;
    // Contact berisi foto, nama, telepon, dan email
    return (
         <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar style={{
            display: "flex",
            gap: "40px",
            padding: "8px 8px ",
            alignItems: "right",
          }}>
          <Avatar alt={name} src={photo} style={{
                width: "80px",
                height: "80px",
                borderRadius: "50px",
          }}/>
        </ListItemAvatar>
        <ListItemText 
        primary={
            // membuat react fragment  promary untuk menampung nya
            <React.Fragment>
                <div style={{
                    fontWeight: "bolder"
                }}>
                    {name}
                </div>
            </React.Fragment>
          }
           secondary={
            // membuat react fragment secondarry untuk menampung nya
            <React.Fragment>
                <div>
                    {phone}
                </div>
                <div>
                    {email}
                </div>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};
// jangan lupa export default contact
export default Contact;
