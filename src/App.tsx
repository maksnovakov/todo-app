import { makeStyles } from '@material-ui/core/styles';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';

const useStyles = makeStyles(() => ({
  app: {
    textAlign: 'center',
  },
}));

export default function App() {
  const classes = useStyles(); 
  const [userName, setUserName] = useState("Sofia"); 
  
  useEffect(()=> {
    const name = prompt("What's your name?"); 
    if (name !== null) { 
      setUserName(name);
    }
  }, []);

  return (
    <div className={classes.app}>
        <Header userName={userName}/> 
        <TaskContainer/>
    </div>
  );
}