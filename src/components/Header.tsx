import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    greeting: {
        color: '#FFD08D',
        fontFamily: 'Roboto',
        fontSize: '64px',
        fontStyle: 'normal',
        letterSpacing: '0em',
        textAlign: 'center',
        marginTop: '201px'
    },
}));

interface HeaderProps {
    userName: string;
}

export default function Header(props: HeaderProps) {
    const classes = useStyles(); 

    return (
        <div className={classes.greeting}>
            Hey, {props.userName}
        </div>
    )
}