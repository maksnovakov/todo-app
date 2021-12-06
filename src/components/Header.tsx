interface HeaderProps {
    userName: string;
}

export default function Header(props: HeaderProps) {
    return (
        <h1>Hey, {props.userName}</h1>
    )
}