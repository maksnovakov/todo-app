interface TaskProps {
    title: string;
    completed: boolean;
    id: number;
};

export default function Task(props: TaskProps) {
    return (
        <p key={props.id}> {props.title} </p>                  
    )
}