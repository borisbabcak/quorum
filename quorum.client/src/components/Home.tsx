import '../assets/Common.css';

function Home() {
    return (
        <div className="button-container">
            <div className="button" onClick={() => window.location.href = '/Home.tsx'}>
                HOME
            </div>
        </div>
    );
}

export default Home;