import React, { useState } from "react";
import Container, { Error, Success } from "./Form.styles";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); 
  const [buttonText, setButtonText] = useState("Submit");
  const queryClient = useQueryClient(); 

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);

  const reset = () => {
    setName("");
    setEmail("");
    setTitle("");
    setComment("");
    setError("");
    setSuccess("");
  };

  const refetch = () => { 
    queryClient.refetchQueries(['posts'], { type: 'active' });
  }

  const Submit = async (e) => {
    e.preventDefault();
    if (!name || !email || !title || !comment) {
      setSuccess("");
      setError("Error: blank field");
    } else {
      reset();
      setButtonText("Loading ...");

      await axios
        .post("http://localhost:5000/posts", {
          name: name,
          title: title,
          email: email,
          content: comment,
        })
        .then(() => {
          reset();
          setButtonText("Submit");
          setSuccess("Registration done");
          refetch();
        })
        .catch(() => {
          reset(); 
          setButtonText("Submit"); 
          setError("Failed, maybe the server is down"); 
        });
    }
  };

  return (
    <Container>
      <form>
        <h1>Create a comment</h1>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
        />
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Your comment"
        />
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@gmail.com"
        />
        <Success>{success}</Success>
        <Error>{error}</Error>
        <button onClick={Submit}>{buttonText}</button>
      </form>
    </Container>
  );
}

export default Form;
