const Button = (props) =>{
    return(<button onClick={props.onclick} type="button" title={props.title} class={props.class}>{props.name}</button>)
}

export default Button;