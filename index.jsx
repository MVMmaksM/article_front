const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Routes = ReactRouterDOM.Routes;

function TestHookClick(){
    const [user, setUser] = React.useState({name: "Test", age: 0});

    React.useEffect(()=>{
        document.title = user.name;
    });

    return <div>
                <button onClick={()=>{setUser({name: user.name + user.age, age: user.age + 1})}} class="btn btn-primary m-2">Press</button>
                <button onClick={()=>{setUser({name: "Test", age: 0})}} class="btn btn-primary m-2">Reset</button>
                <p>age: {user.age}</p>
                <p>age: {user.name}</p>
           </div>
}

function About(){
    return <h1>About</h1>
}

ReactDOM.render(<Router>
                    <div>
                        <Routes>
                            <Route path="/" element={<TestHookClick/>}/>
                            <Route path="/about" element={<About/>}/>
                        </Routes>
                    </div>
                </Router>, document.getElementById("root"))

//ReactDOM.render(<TestHookClick />, document.getElementById("root"))


