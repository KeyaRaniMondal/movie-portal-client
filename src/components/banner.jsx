import background from '../assets/background.jpg'
const Banner = () => {

    return (
        <div style={
            {
                backgroundImage: `url(${background})`
            }
        } className='bg-cover h-screen'>
            <div className='text-center pt-5 pb-2 font-bold text-[#534747]'>
            <h1 className="text-5xl">Movie-Mania</h1>
            <p className='pt-5 text-md'>The ultimate destination of your extreme enjoyment.Just chill and enjoy your Holidays !!</p>
            </div>

        </div>
    )
}
export default Banner