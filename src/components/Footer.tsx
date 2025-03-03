function Footer({ title, subtitle, toggleSidebar }: { title: string, subtitle: string, toggleSidebar: () => void  }) {
    return (
        <footer>
            <div className="background-gradient"></div>
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <button onClick={toggleSidebar}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    );
}

export default Footer;