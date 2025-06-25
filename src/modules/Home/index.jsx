import BannerWithForm from './components/BannerWithForm';
import SearchBar from './components/SearchBar';
import FeaturedInstitutions from './components/FeaturedInstitutions';
import FeaturedDestinations from './components/FeaturedDestinations';
import FeaturedCourses from './components/FeaturedCourses';
import ConnectSection from './components/ConnectSection';
export default function NewHome() {
    const bgImageUrl = 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750802183/feshia%20Images/6722f625c6344416c1d2d5cdb77f842a_dyvvfz.jpg';
    const leftImageUrl = 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750807026/feshia%20Images/a671366d5227cbc987fdfd9658695172_tmuhze.jpg';
    const rightImageUrl = 'https://res.cloudinary.com/greenmouse-tech/image/upload/v1750807084/feshia%20Images/6a044f99c07d20f2804a5eb062290b4a-removebg-preview_1_1_vrj3vy.png';
    return (
        <>
            <BannerWithForm />
            <SearchBar bgImageUrl={bgImageUrl} />
            <FeaturedInstitutions />
            <FeaturedDestinations />
            <ConnectSection leftImageUrl={leftImageUrl} rightImageUrl={rightImageUrl} />
            <FeaturedCourses />
        </>
    );
}
