import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Link, useParams, Prompt} from "react-router-dom";

function App(props) {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products factory={props.bookFactory} />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/add-book">
            <AddBook factory={props.bookFactory}/>
          </Route>
          <Route path="/products/:id">
            <Book/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const Header = () => {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/add-book">
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/company">
          Company
        </NavLink>
      </li>
    </ul>
  );
};
const Home = () => <div>Home</div>;
//const Products = ({factory}) => <div>Products: {factory.getBooks().length}</div>;
const Company = () => <div>Company</div>;
const NoMatch = () => <div>Page not found</div>

function Products(props) {
  const {factory} = props;
  const books = factory.getBooks();

  return (
    <div>
      <h1>Books</h1>
      <table>
        <thead><tr><th>Id</th><th>title</th><th>Info</th></tr></thead>
        <tbody>
          {books.map(b => <tr key={b.id}><td><Link to={`products/${b.id}`}>{b.id}</Link></td><td>{b.title}</td><td>{b.info}</td></tr> )}
        </tbody>
      </table>
    </div>
  )
}


function AddBook(props) {
  const {factory} = props;
  const emptyBook = {"title": "", "info": ""};
  const [book, setBook] = useState(emptyBook);
  const [isBlocking, setIsBlocking] = useState(false);

  const change = (event) => {
    const val = event.target.value;
    const ch = event.target.id;

    book[ch] = val;
    setBook({...book});
  }

  const submit = () => {
    book.title = document.getElementById("title").value;
    book.info = document.getElementById("info").value;
    setBook({...book});
    factory.addBook(book);
  }

  return (
    <div>
    <h1>Add book</h1>
    <form onSubmit={e => {
            e.preventDefault(); 
            submit(); 
            e.target.reset(); 
            setIsBlocking(false)
        }}>
      <Prompt 
        when={isBlocking}
        message={"Are you sure?"}
      />
      <input id="title" type="text" placeholder="Add title" onChange={(e) => {change(e); setIsBlocking(e.target.value.length > 0)}}></input><br/>
      <input id="info" type="text" placeholder="Add info" onChange={(e) => {change(e); setIsBlocking(e.target.value.length > 0)}}></input><br/>
      <p>
        Blocking?
        {isBlocking ? " Yes, click a link or the back button" : " Nope"}
      </p>
      <p>
        <button>Submit</button>
      </p>
    </form>
    </div>
  )
}

function Book() {
  let { id } = useParams();

  return(
    <h1>Book: {id}</h1>
  )
}


