import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.css';
export const CarouselHome=()=>{
    return(
        <>
            <div style={{ display: 'block', width: '100%', padding:".3rem 0"}}>  
            <Carousel prevIcon={null} nextIcon={null} indicators={false}>
                <Carousel.Item interval={5000}>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img alt="img1" style={{display:"block",width:"100%",height:"35vh",borderRadius:"1rem"}}
                     src="https://ossimg.bdgadminbdg.com/IndiaBDG/banner/Banner_20240110083018keqf.png" />   
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img alt="img1" style={{display:"block",width:"100%",height:"35vh",borderRadius:"1rem"}}
                     src="https://ossimg.bdgadminbdg.com/IndiaBDG/banner/Banner_20240110082959xdnc.png" />
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img alt="img1" style={{display:"block",width:"100%",height:"35vh",borderRadius:"1rem"}}
                    src="https://ossimg.bdgadminbdg.com/IndiaBDG/banner/Banner_20231125140847kw1d.png" />
                   </Carousel.Item>

                <Carousel.Item interval={5000}>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img alt="img1" style={{display:"block",width:"100%",height:"35vh",borderRadius:"1rem"}}
                    src="https://ossimg.bdgadminbdg.com/IndiaBDG/banner/Banner_20231104194139qiih.png" />
                    </Carousel.Item>
                <Carousel.Item interval={5000}>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img alt="img1" style={{display:"block",width:"100%",height:"35vh",borderRadius:"1rem"}}
                    src="https://ossimg.bdgadminbdg.com/IndiaBDG/banner/Banner_202311251408377776.png" />
                    </Carousel.Item>
                <Carousel.Item interval={5000}>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img alt="img1" style={{display:"block",width:"100%",height:"35vh",borderRadius:"1rem"}}
                    src="https://ossimg.bdgadminbdg.com/IndiaBDG/banner/Banner_20231128182652ptr8.png" />
                   </Carousel.Item>
                <Carousel.Item interval={5000}>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img alt="img1" style={{display:"block",width:"100%",height:"35vh",borderRadius:"1rem"}}
                    src="https://ossimg.bdgadminbdg.com/IndiaBDG/banner/Banner_20240110083058enng.png" />
                   </Carousel.Item>
                <Carousel.Item interval={5000}>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img alt="img1" style={{display:"block",width:"100%",height:"35vh",borderRadius:"1rem"}}
                    src="https://ossimg.bdgadminbdg.com/IndiaBDG/banner/Banner_20231128182652ptr8.png" />
                    </Carousel.Item>
                
            </Carousel>
            </div>
        </>
    )
}