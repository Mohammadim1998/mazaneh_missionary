
const Loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center p-12">
            <div className="typing-indicator">
                <div className="typing-circle"></div>
                <div className="typing-circle"></div>
                <div className="typing-circle"></div>
                <div className="typing-shadow"></div>
                <div className="typing-shadow"></div>
                <div className="typing-shadow"></div>
            </div>
        </div>
    );
}

export default Loading;