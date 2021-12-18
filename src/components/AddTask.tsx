import {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';
import { amber } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    addContainer: {
        padding: '0px 10px 10px 10px',
        borderRadius: '20px',
        background: `${amber[200]}`,
        display: 'flex',
    },
    icon: {
        paddingTop: '20px',
        color: 'rgb(0 0 0 / 54%);'
    },

}));

interface AddTaskProps {
    addTaskToList: (text: string) => void;
}

export default function AddTask(props: AddTaskProps) {
    const classes = useStyles();
    const [newTaskText, setNewTaskText] = useState("");

    const handleAddingTask = (event: any) => {
        if(event.charCode === 13){ 
            props.addTaskToList(newTaskText); 
            setNewTaskText("") 
        }
    }

    const handleIconAdd = () => {
        if(newTaskText.length > 0){
            props.addTaskToList(newTaskText); 
            setNewTaskText("") 
        }
    }

    return (
        <div className={classes.addContainer}>     
            <AddIcon className={classes.icon} onClick={handleIconAdd}/>
            <TextField
                fullWidth
                onChange={e => setNewTaskText(e.target.value)} 
                value={newTaskText} 
                label={"What's on you mind today?"} 
                onKeyPress={handleAddingTask} 
            />
        </div>
    )
}