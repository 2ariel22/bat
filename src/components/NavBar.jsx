import '../styles/NavBar.css'

export default function NavBar(){
    return(
        <nav>
        <ul className='navBar'>
            <li>
                <img className="logo" src="https://i.postimg.cc/NjmK4hcQ/logo.webp" alt="logo" />
            </li>
            <li>
                <a href="/Home">Home</a>
            </li>
            <li>
                <a href="/About">About</a>
            </li>
            <li>
                <a href="/Contact">Contact</a>
            </li>
            <li>
                <h1>BAT aplication</h1>
            </li>
        </ul>
        
        </nav>
        
    )
}