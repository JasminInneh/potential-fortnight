const Nav = ( { url } ) => {
    return (
        <nav>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.614 11h-3.638c-.028-.758-.091-1.489-.182-2.194 1.848.563 3.199 1.36 3.82 2.194zm-5.636 0h-2.978v-2.977c.949.042 1.848.144 2.688.289.146.841.248 1.738.29 2.688zm-2.978-4.977v-3.638c.835.622 1.632 1.973 2.194 3.82-.705-.09-1.436-.153-2.194-.182zm-2-3.638v3.638c-.758.029-1.489.091-2.194.182.562-1.847 1.359-3.198 2.194-3.82zm0 5.638v2.977h-2.978c.042-.95.145-1.847.29-2.688.84-.145 1.739-.248 2.688-.289zm-4.977 2.977h-3.637c.621-.834 1.973-1.631 3.819-2.194-.091.705-.153 1.436-.182 2.194zm-3.637 2h3.638c.028.758.091 1.489.182 2.194-1.848-.563-3.199-1.36-3.82-2.194zm5.636 0h2.978v2.977c-.949-.042-1.848-.144-2.688-.289-.145-.841-.248-1.738-.29-2.688zm2.978 4.977v3.638c-.835-.622-1.632-1.973-2.194-3.82.705.09 1.436.153 2.194.182zm2 3.638v-3.638c.758-.029 1.489-.091 2.194-.182-.562 1.847-1.359 3.198-2.194 3.82zm0-5.638v-2.977h2.978c-.042.95-.144 1.847-.29 2.688-.84.145-1.739.248-2.688.289zm4.977-2.977h3.638c-.621.834-1.973 1.631-3.819 2.194.09-.705.152-1.436.181-2.194zm3.212-4.938c-1.036-.61-2.322-1.104-3.794-1.458-.353-1.471-.848-2.758-1.457-3.793 2.352 1.012 4.24 2.899 5.251 5.251zm-13.127-5.251c-.61 1.036-1.105 2.322-1.458 3.793-1.471.354-2.757.848-3.793 1.458 1.011-2.352 2.899-4.239 5.251-5.251zm-5.251 13.127c1.036.61 2.322 1.104 3.794 1.458.353 1.471.848 2.758 1.457 3.793-2.352-1.012-4.24-2.899-5.251-5.251zm13.127 5.251c.609-1.036 1.104-2.322 1.457-3.793 1.472-.354 2.758-.848 3.794-1.458-1.011 2.352-2.899 4.239-5.251 5.251z"/></svg>
            <a href={url}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
        </nav>
    )
  }
  
  export default Nav;