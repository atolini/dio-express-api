import axios from "axios";
import { useState } from "react";
import Container from "./Delete.styles";
import { useQueryClient } from "@tanstack/react-query";

function Delete({ id }) {
  const [status, setStatus] = useState("Delete");
  const queryClient = useQueryClient();

  const del = async (e) => {
    e.preventDefault();
    setStatus("Deleting ...");
    const res = await axios
      .delete(`http://localhost:5000/post/${id}`)
      .then((res) => res.status);

    if (res === 204) {
      queryClient.refetchQueries(["posts"], { type: "active" });
    } else { 
      setStatus("Error!");
    }
  };

  return <Container onClick={del}>{status}</Container>;
}

export default Delete;
