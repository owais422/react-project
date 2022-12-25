import Item from "../item/Item";

function List({data}: {data: string[]}) {
  const items = data.map(item => <Item data={item}/>)
  return (
    <div>
     {/* {items} */}
    </div>
  );
}

export default List;
