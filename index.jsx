class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {class: 1};

        this.press = this.press.bind(this);    
        this.reset = this.reset.bind(this);     
    }

    press(){
        let number = this.state.class;
        this.setState({class: ++number});
    }

    reset(){
        this.setState({class: 1});
    }

    render(){
        return <div>
                <div>
                    <button type="button" class="btn btn-primary m-2" onClick={this.press}>Нажми</button>
                </div>
                <div>
                    <button class="btn btn-primary m-2" onClick={this.reset}>Сбросить</button>
                </div>              
                <p class="m-2">Счетчик: {this.state.class}</p>
               </div>        
    }
}

ReactDOM.render(<Test />, document.getElementById("root"))


