import '../components/header.css'

export default function Header() {
    return (
        <header className="header">
            <img className="profile-img" src="src/assets/img/profile-img.png" alt="Laura Smith Profile Image" />
            <div className='header-text'>
                <h1 id='name'>Laura Smith</h1>
                <h2 id='role-title'>Frontend Developer</h2>
                <span id='url'>laurasmith.website</span>
            </div>
        </header>
    )
}