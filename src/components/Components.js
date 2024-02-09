function Component(){
    return(
        <div>
<Header />
<Navigation />
<h3>Hello World</h3>
<p>Hello This is a Paragraph</p>
<Footer />
</div>
    );
}

export default Component;

function Header(){
    return <header>This is a Header</header>
}

function Navigation(){
    return <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
}
function Footer() {
    return <footer>&copy; 2024 MyWebsite</footer>;
  }
  
  