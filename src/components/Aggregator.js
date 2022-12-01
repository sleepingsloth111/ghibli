
export default function MovieItem(props) {
    return (
        <div>
            {props.cart.map(item => (
                <div id="item2">
                {item.id}
                </div>
            ))}
            <hr></hr>
            <div>
                Average Runtime: {props.cart.length === 0 ? 0 : props.total / props.cart.length}
            </div>
        </div>
    );
  }