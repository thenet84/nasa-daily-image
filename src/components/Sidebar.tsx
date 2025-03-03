function Sidebar({ title, explanation, toggleSidebar }: { title: string, explanation: string, toggleSidebar: () => void  }) {
    return (
        <aside onClick={toggleSidebar}>
            <div className="background-overlay"></div>
            <div className="sidebar">
                <h2>{title}</h2>
                <p>{explanation}</p> 
                <button onClick={toggleSidebar}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button> 
            </div>
            
        </aside>
        
    );
}

export default Sidebar;