import './Header.css'
export default function Header(){
    return(
        <header>
            <nav>
                <h1 className="titulo">Home Page</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Contato">Contato</a></li>
                    <li><a href="/Sobre">Sobre</a></li>
                </ul>
            </nav>
        </header>
    )
}