import { makeStyles } from '@material-ui/core/styles';
import {useState, useEffect} from 'react';
import Header from './components/Header';

const useStyles = makeStyles(() => ({
  app: {
    textAlign: 'center',
  },
}));

export default function App() {
  const classes = useStyles(); 
  const [userName, setUserName] = useState("Sofia"); //default userName is "Sofia" which can be updated by calling setUserName
  
  useEffect(()=> {
    const name = prompt("What's your name?"); //Ask user for their name (will ask only once as we are passing empty array on line 20)
    if (name !== null) { //if they type in a name then we can remember it in the userName variable and pass it via props to Header
      setUserName(name);
    }
  }, []);

  return (
    <div className={classes.app}>
        <Header userName={userName}/> 
    </div>
  );
}