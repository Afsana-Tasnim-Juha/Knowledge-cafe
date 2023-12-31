import profile from '../../assets/images/profile.png'

const Header = () => {
    return (

        <header className='flex justify-between items-center p-4  border-b-2 max-w-7xl mx-auto'>

            <h1 className='text-4xl font-bold'>React and ES6 Demystified: A Knowledge Cafe Experience</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;