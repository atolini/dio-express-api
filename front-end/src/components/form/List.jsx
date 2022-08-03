import ListItem from "./ListItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function List() {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    axios.get("http://localhost:5000/posts").then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (data.length === 0) {
    return <h1>opssss ... there's nothing around here</h1>;
  } else {
    const items = data.map((i) => (
      <ListItem
        key={i.id}
        email={i.email}
        title={i.title}
        comment={i.content}
        date={i.date}
        name={i.name}
        id={i.id}
      />
    ));

    return items.reverse();
  }
}

export default List;
