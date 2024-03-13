import profile from '../images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center mx-4 border-b-2'>
            <h2 className='text-4xl font-bold m-8'>Knowledge Cafe</h2>
            <img className='w-16 h-16' src={profile} alt="" />
        </div>
    );
};


export default Header;