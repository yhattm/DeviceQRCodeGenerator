import React, { useState } from "react";
import "./styles.css";
import QRCode from "qrcode.react";
import { TextField, MenuItem } from "@material-ui/core";

const App = () => {
  const [token, setToken] = useState("");
  const [ssid, setSSID] = useState("bestvvtk");
  const [ip, setIP] = useState("192.168.0.1");
  const [type, setType] = useState("radar");

  const msgObj = { token, ssid, ip, type };
  const msgStr = JSON.stringify(msgObj);
  return (
    <div className="App">
      <h1>Device QR Code Generator</h1>
      <div />
      <TextField
        label="Token"
        value={token}
        onChange={event => {
          setToken(event.target.value);
        }}
      />
      <div />
      <TextField
        label="SSID"
        value={ssid}
        onChange={event => {
          setSSID(event.target.value);
        }}
      />
      <div />
      <TextField
        label="IP"
        value={ip}
        onChange={event => {
          setIP(event.target.value);
        }}
      />
      <div />
      <TextField
        label="Type"
        value={type}
        select
        onChange={event => {
          setType(event.target.value);
        }}
      >
        <MenuItem value="switch">Switch</MenuItem>
        <MenuItem value="radar">Radar</MenuItem>
        <MenuItem value="camera">Camera</MenuItem>
        <MenuItem value="doorbell">Doorbell</MenuItem>
        <MenuItem value="ring">Ring</MenuItem>
      </TextField>
      <p>QRCode msg is {msgStr}</p>
      <div />
      <QRCode value={msgStr} includeMargin={true} />
    </div>
  );
};

export default App;
