import { BiSolidHardHat } from "react-icons/bi";
import React, { useState, useRef } from "react";
import { TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import Typography from "../../modules/components/Typography";

export default function Form() {
  const form = useRef();
  const [formValues, setFormValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9axy8gd",
        "template_9j589gg",
        form.current,
        "RwpTdcCZaB7E7OTU-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return submitted ? (
    <Typography color="inherit" align="center" variant="h2" marked="center">
      See you there!
    </Typography>
  ) : (
    <form autoComplete="off" ref={form} onSubmit={sendEmail}>
      <TextField
        id="parent"
        name="parent"
        label="Parent(s) Name?"
        onChange={handleChange}
        required
        variant="outlined"
        color="primary"
        type="text"
        sx={{ mb: 3 }}
        fullWidth
        value={formValues.parent || ""}
        // error={emailError}
      />
      <TextField
        id="children"
        name="children"
        label="Name of your child(ren)?"
        onChange={handleChange}
        required
        variant="outlined"
        color="primary"
        type="text"
        value={formValues.children || ""}
        // error={passwordError}
        fullWidth
        sx={{ mb: 3 }}
      />
      <TextField
        id="message"
        name="message"
        label="Message (optional)"
        onChange={handleChange}
        variant="outlined"
        color="primary"
        type="text"
        value={formValues.message || ""}
        // error={passwordError}
        fullWidth
        sx={{ mb: 3 }}
      />
      <Button variant="outlined" color="secondary" type="submit">
        RSVP <BiSolidHardHat sx={{ mr: 2 }} />
      </Button>
    </form>
  );
}
