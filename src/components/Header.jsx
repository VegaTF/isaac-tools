export function Header() {

    const logoUrl = `${import.meta.env.BASE_URL}isaac-tools.png`

    return (
        <header className="web-header">
            <img className="logo" src={logoUrl} alt="isaac-tools logo" />
            <div className="right-header">
                <h1 className="header-title">THE BINDING OF ISAAC</h1>
                <h2 className="header-subtitle">ALL ITEMS</h2>
            </div>
        </header>
    )
}