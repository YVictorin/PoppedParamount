import PropTypes from "prop-types";
import Button from "./common/Button";

const HeroSection = ({ heroContent, customClass = "", v1CustomClasses = [] }) => {
    const { title, subtitle, description, imageUrl, buttonText, buttonLink } = heroContent;

    return (
        <section className={customClass.heroImgSection || v1CustomClasses[0]}>
            <div className={customClass.heroSectionText || v1CustomClasses[1]}>
                <h2>{title}</h2>

                {/* only show the subtitle elem if there is a subtitle prop passed in */}
                {subtitle && <p>{subtitle}</p>}
                <p>{description}</p>
                
                {/* only if the button text and button link are props will the button component render */}
                {buttonText && buttonLink && <Button href={buttonLink} text={buttonText} />}
            </div>
            <img className={customClass.heroImgSection} src={imageUrl} alt="Hero section visual" />
        </section>
    );
};

HeroSection.propTypes = {
    heroContent: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        buttonText: PropTypes.string,
        buttonLink: PropTypes.string
    }),
    customClass: PropTypes.object,
    v1CustomClasses: PropTypes.array
};

export default HeroSection;
