import { useState } from "react";
import Container, { Comment, Details } from "./ListItem.styles";
import Delete from "./Delete";
import UpdateForm from "./UpdateForm";

function List({ title, comment, name, email, date, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const dateFormated = new Intl.DateTimeFormat("pt-BR").format(date);

  const closeUpdateForm = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Container>
        <h1>{title}</h1>
        <Comment>"{comment}"</Comment>
        <hr />
        <Details>
          <span>
            <p>{name}</p>
            <p>- {email} -</p>
            <p>{dateFormated}</p>
          </span>
          <span>
            <Delete id={id} />
            <button onClick={() => setIsOpen(true)}>Update</button>
          </span>
        </Details>
      </Container>
      {isOpen ? (
        <UpdateForm
          cancelFunc={closeUpdateForm}
          title={title}
          id={id}
          comment={comment}
        />
      ) : null}
    </>
  );
}

export default List;
