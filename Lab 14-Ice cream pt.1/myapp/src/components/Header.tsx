import '../css/Header.css';

interface HeaderProperties{
    user:string
}

export function Header(props:HeaderProperties){
    return(
        <header><h2>Ice Cream Wars</h2>
        <h3>Welcome {props.user}</h3>
        </header>
    )
}

