import { FormEvent, useState } from "react";
import styled from "styled-components";
import { formUrl } from "../../config";
import { lightTheme } from "../../ThemeConfig";
import Button from "../Button";

const ContactFormStyle = styled.form`
  display: flex;
  width: 100%;
  height: calc(100vh - 157px);

  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;

  label {
    display: none;
  }

  input {
    border: 0;
    border-bottom: 1px solid ${lightTheme.colors.secondaryMain};
    outline: 0;
    width: 280px;
    max-width: calc(100% - 20px);
    padding: 8px;
  }

  input::placeholder {
    color: ${lightTheme.colors.primaryMain};
    font-size: 14px;
  }

  button {
    margin-top: 16px;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setLoading] = useState(false);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const url =
      formUrl +
      new URLSearchParams({
        name,
        email,
        comment,
        phone,
      });
    fetch(url)
      .then(() => {
        setLoading(false);
        console.log(`<div className=""></div>`);
        setName("");
        setEmail("");
        setPhone("");
        setComment("");
      })
      .catch((err: Error) => console.error(err.toString()));
  };

  return (
    <ContactFormStyle onSubmit={submitForm}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          disabled={isLoading}
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={isLoading}
        />
      </div>
      <br />
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          disabled={isLoading}
        />
      </div>
      <br />
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          name="comment"
          placeholder="Comment"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          disabled={isLoading}
        />
      </div>
      <Button
        buttonType="normal"
        buttonVariant="secondary"
        type="submit"
        disabled={isLoading}
      >
        {!isLoading ? "Submit" : "Loading..."}
      </Button>
    </ContactFormStyle>
  );
}
