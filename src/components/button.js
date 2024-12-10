const Button = (props)=>{
    const {name_button, class_button, on_click} = props;   
    return (<button onClick={on_click} class={class_button}>{name_button}</button>);
}

export default Button;