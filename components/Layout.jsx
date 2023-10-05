import TopBar from './TopBar';

export default function Layout({ children }) {
    return (
        <div className='main-center'>
            <TopBar />
            <main>{children}</main>
        </div>
    );
}