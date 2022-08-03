import { useState } from "react";
import Container from "./Form.styles";
import { Success, Error } from "./Form.styles";
import axios from "axios"; 
import { useQueryClient } from "@tanstack/react-query";

function UpdateForm(props) {
  const [title, setTitle] = useState(props.title);
  const [comment, setComment] = useState(props.comment);
  const [error, setError] = useState("");
  const [success] = useState("");
  const [status, setStatus] = useState("Update"); 
  const queryClient = useQueryClient();

  const handleCommentChange = (e) => setComment(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleCancelClick = (e) => {
    e.preventDefault();
    props.cancelFunc(); 
  }
  const update = async (e) => {
    e.preventDefault();
    setStatus("Updating ...");
    const res = await axios.patch("http://localhost:5000/post", {
      "id": props.id, 
      "title": title, 
      "content": comment, 
    }).then(res => res.status); 
      
    if (res === 204) { 
      queryClient.refetchQueries(["posts"], { type: "active" });
      props.cancelFunc(); 
    } else { 
      setError("Something went wrong. Refresh the page."); 
    }
  }

  return (
    <Container>
      <form>
        <h1>Update your comment</h1>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
        />

        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Your new comment"
        />
        <Success>{success}</Success>
        <Error>{error}</Error>
        <hr />
        <span>
          <button onClick={update}>{status}</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </span>
      </form>
    </Container>
  );
}

export default UpdateForm;
