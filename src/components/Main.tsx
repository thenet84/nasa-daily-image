function Main({imageUrl}: {imageUrl: string}) {
    return (
        <main>
            <img src={imageUrl} className="main-image" />
        </main>
    );
}

export default Main;