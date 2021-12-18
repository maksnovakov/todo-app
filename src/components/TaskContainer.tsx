import {useState} from 'react';
import Task from './Task';
import AddTask from './AddTask';
import { INITIAL_TASKS } from '../utility/data/initialTasks';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    container: {
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    taskList : {
        backgroundColor: 'rgb(0 0 0 / 62%)',
        color: 'white', 
    }
}));

export default function TaskContainer() {
    const classes = useStyles();
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    
    const addTaskToList = (title:string) => {
        const addTask = { title: title, completed: false};
        setTasks([...tasks, addTask]);
    };

    return (
        <Grid container className={classes.container}> 
            <Grid item xs={12} sm={8}>
                <AddTask addTaskToList={addTaskToList}/>   
            </Grid>
            <Grid item xs={11.8} sm={7.8} className={classes.taskList}>
                {tasks.map( (task, i) => (
                    <Task title= {task.title} id={i} completed={task.completed}/>                  
                ))}
            </Grid>
        </Grid>
    )
}