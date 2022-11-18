import pic  from '../images/bgImage.png';
import '../css/banner2.css'
function Banner2() {
  return (
    
      <div>
       <section id="hero" className="d-flex align-items-center">

<div className="container bannerimg ">
  <div className="row">
    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
      <h1>Elegant and creative solutions</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <div classNme="d-flex">
        <a href="#about" class="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img">
      <img src={pic} className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section>
    </div>
    
  )
}

export default Banner2
