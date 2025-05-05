
function Header({ logo }){
    const arrOfUsers = [
        {
            username: 'kenny',
            email: 'kenny@gmail.com',
            password: 'kenny'
        },
        {
            username: 'kennedy',
            email: 'kennedy@gmail.com',
            password: 'kennedy'
        },
        {
            username: 'kelvin',
            email: 'kelvin@gmail.com',
            password: 'kelvin'
        }
    ];

    return(
        <header>
            <div className="logo">{logo}</div>
            <ul>
                <li>
                    <a href="#">home</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li>
                <li>
                    <a href="#">about</a>
                </li>
            </ul>
            <div>
                user icon {arrOfUsers.length}
            </div>
        </header>
    );
}

export default Header;