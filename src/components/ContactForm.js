// import react state nya
import React , {useState} from 'react';
// import material mui
import { TextField, Button } from "@mui/material";

// membuat variable 
const ContactForm = ({ addNewContact }) => {
    // data berisi berisi name, phone, email, dan photo url
    // membuat object sesuai dengan data yg ada
    const [name, addName] = useState("");
    const [phone, addPhone] = useState("");
    const [email, addEmail] = useState("");
    const [photo, addPhoto] = useState("");
//   membuat event target pada setiap data
    const inputName = (event) => {
      addName(event.target.value);
    };
    const inputPhone = (event) => {
      addPhone(event.target.value);
    };
    const inputEmail = (event) => {
      addEmail(event.target.value);
    };
    const inputPhoto = (event) => {
      addPhoto(event.target.value);
    };
    // 
    // membuat3ger sumbit data dengan data yng telah dibuat
    const submitData = (event) => {
      event.preventDefault();
      let dataForm = {name, phone, email, photo,};
      addName("");
      addPhone("");
      addEmail("");
      addPhoto("");
      addNewContact(dataForm);
    };
//   panggil render nya
    return (
      <>
      {/* style si form kontak */}
        <div
          style={{
            borderRadius: "10px",
            padding: "20px",
            marginTop: "70px",
            marginLeft: "30px",
            backgroundColor: "#FFF5E4",
            width: "50%",
            height: "380px",
           
          }}
        >
            {/* membuat submit datanya */}
          <form onSubmit={submitData}>
            <TextField
              type="text"
              fullWidth
              variant="filled"
              required//value tidak boleh kosong
              id=""
              margin="normal"
              label="Name"
              value={name}
              //membuat triger value input name
              onChange={inputName}
            />
            <TextField
              type="text"
              fullWidth
              variant="filled"
              required
              id=""
              margin="normal"
              label="Phone"
              value={phone}
              //membuat 3ger value input phone
              onChange={inputPhone}
            />
            <TextField
              type="text"
              fullWidth
              variant="filled"
              required
              id=""
              margin="normal"
              label="Email"
              value={email}
              //membuat 3ger value input email
              onChange={inputEmail}
            />
            <TextField
              type="text"
              fullWidth
              variant="filled"
              required
              id=""
              margin="normal"
              label="Photo"
              value={photo}
              //membuat 3ger value input photo url
              onChange={inputPhoto}
            />
            {/* 3ger button add new */}
            <Button
              type="submit"
              style={{ 
                float:"left",
                margin: "20px",
                color:"#016d00",
                padding: "5px 10px",
             }}
            >
              Add New
            </Button>
          </form>
        </div>
      </>
    );
  };

export default ContactForm;