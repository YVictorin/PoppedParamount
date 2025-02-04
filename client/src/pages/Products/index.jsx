import ProductGrid from "./ProductGrid";
import HeroSection from "../../components/HeroSection";
import styles from "./Products.module.css"

const Products = () => {      
    return (
        <>
       <HeroSection 
            heroContent={{
                title: "Gourmet Popcorn Flavors",
                subtitle: "Experience popcorn like never before!",

                // using fragments to allow line breaks via <br/> tag
                description: (
                    <>
                        From classic caramel to peppermint hot chocolate, we have a flavor for every taste. Explore our array of <br />
                        both classic and innovative popcorn flavors.
                    </>
                ),
                imageUrl: "images/products-hero.png",
            }}
            customClass={styles}/>

          <ProductGrid/>
        </>
    );
}

export default Products;
