const Header = ( { user } ) => {
    return (
        <header>
            <div className="info-container">
                <div className="user-info-container">
                    <h1>{user.username}</h1>
                    <p>handle <span className="threads-info">threads.net</span></p>
                </div>
                <div className="img-container">
                    <img src={user.img} alt="profile avatar"/>
                </div>
            </div>
            <p>bio</p>
            <div className="sub-info-container">
                <p className="sub-text">{user.followers.length}<a href="">link</a></p>
            </div>
            <button 
            className="primary"
            onClick={() => navigator.clipboard.writeText('blah')}>
                Share Profile
            </button>
            <div className="button-container">
                <button className="current">Threads</button>
                <button>Replies</button>

            </div>

        </header>
    )
  }
  
  export default Header;