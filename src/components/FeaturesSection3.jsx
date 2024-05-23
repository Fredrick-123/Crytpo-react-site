import Image3 from "../assets/img/feature-3-img.png";

const FeaturesSection3 = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
    <div className="flex flex-col lg:flex-row">
      {/* text */}
      <div className="max-w-[454px] mb-6 lg:mt-10" data-aos='fade-right'  data-aos-offset="400">
        <h3 className="h3 mb-6">Grow your profit and track your investments  </h3>
        <p className="text-gray mb-8 max-w-[408px]">
           Use advanced analytical tools. Clear Trading View charts let you track current  and hstorical profit investments
        </p>
        <button className="btn px-8">Learn More</button>
      </div>
      {/* image */}
      <div className="flex flex-1 justify-end" data-aos='fade-left'  data-aos-offset="450">
        <img src={Image3} alt="img" />
      </div>
    </div>
  </section>
  )
};

export default FeaturesSection3;
