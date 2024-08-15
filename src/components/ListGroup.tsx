import styled from "styled-components";
import { useState } from "react";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  border: 1px solid black;
  background-color: ${(props) => (props.active ? "mistyRose" : "none")};
  padding: 5px 0;
`;
interface Props {
  items: string[];
  onSelectItem: (item:string) => void;
}

const ListGroup = ({ items, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <List>
      {items.map((item, index) => (
        <ListItem
          active={index === selectedIndex}
          key={item}
          onClick={() => {
            setSelectedIndex(index);
            onSelectItem(item);
          }}
        >
          {item}
        </ListItem>
      ))}
    </List>
  );
};

export default ListGroup;
