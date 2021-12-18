import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingLeft: '20px',
    }  
}));

interface TaskProps {
    title: string;
    completed: boolean;
    id: number;
};

export default function Task(props: TaskProps) {
    const classes = useStyles();
    
    return (
       <div className={classes.container}>     
            <p key={props.id}> {props.title} </p>   
       </div>               
    )
}