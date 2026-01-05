import Globe from "/src/assets/Globe.png";
export default function Header() {
    return (
        <header className="header-container">
            <img className="header-img-detail" src={Globe} alt="Globe"/>
            <h1 className="header-title">my travel journal.</h1>
        </header>
    )
}