import './App.css';
//import header
import Header from './components/Header';
// import contactform
import ContactForm from './components/ContactForm';
// import conctact 
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import { useState } from 'react';


const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list
  const [contact, newContact] = useState(contactsJSON);
  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const newContactList = (data) => {
    newContact([...contact, data]);
  };

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", gap: "100px" }}>
        <ContactForm addNewContact={newContactList} />

        <div
          style={{
            //style kontak
            backgroundColor: "#a0e8d7",
            borderRadius: "20px",
            width: "50%",
            maxheight: "100px",
            padding: "10px",
            marginTop: "70px",
            marginRight: "60px",
          }}
        >
          {contact.map((contact) => {
            return <Contact data={contact} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
