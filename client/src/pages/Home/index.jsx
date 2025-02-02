import HeroSection from "../../components/HeroSection"
import StackingCards from "./StackingCards"
import SupportBot from "./SupportBot"

export default function Home() {
    return (
        <>
            <HeroSection
                title="Gourmet Popcorn Flavors"
                subtitle="Looking for a delicious snack?"
                description={<>Our gourmet popcorn selection offers a variety of<br/>unique and bold flavors, like sweet, savory, or spicy,<br/>we have the flavor to satisfy your craving.</>}
                imageUrl="images/home-hero.png"
                v1CustomClasses={["hero-img", "hero-text-container"]}
                buttonText="INDULGE NOW"
                buttonLink="/products"
            />
            <StackingCards/>     
            <SupportBot/>       
        </>
    )
}