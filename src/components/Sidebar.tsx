import twitterLogo from '../assets/twitter-logo.svg'
import './Sidebar.css'
import { House, Hash, Envelope, DotsThreeCircle, Bell, BookmarkSimple, FileText, User, Sparkle } from 'phosphor-react'

function Sidebar() {
    return (
        <aside className='sidebar'>
            <img className='logo' src={twitterLogo} alt="Logo" />
            <nav className='main-navigation'>
                <a href="http://" className='active'> <House weight='fill' />Home</a>
                <a href="http://">
                    <Hash />
                    Explore
                </a>
                <a href="http://">
                    <Bell />
                    Notifications
                </a>
                <a href="http://">
                    <Envelope />
                    Messages
                </a>
                <a href="http://">
                    <BookmarkSimple />
                    Bookmarks
                </a>
                <a href="http://">
                    <FileText />
                    Lists
                </a>
                <a href="http://">
                    <User />
                    Profile
                </a>
                <a href="http://">
                    <DotsThreeCircle />
                    More
                </a>

            </nav>
            <button className='new-tweet' type='button'>
                Tweet
            </button>
        </aside>
    )
}
export default Sidebar