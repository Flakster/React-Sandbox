interface Props {
    items: string[];
}

const ListGroup = ({items}:Props) => {
  return (
    <ul>
        {items.map((item,index)=> (
            <li key={index}>{item}</li>
        ))}
    </ul>
  )
}

export default ListGroup
