

import'../css/products.css';



function Products(props) {
  return (
    <div className="product-list2">
    <section id="services" class="services section-bg">
    <div class="container">

      <div class="section-title">
        <br />
        <h4><img src={props.image} alt="eqe" /></h4>
        <p>{props.text}</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div class="icon-box">
            <div class="icon"><i class="bx bxl-dribbble"></i></div>
           
            <p></p>
          </div>
        </div>

      

        
      </div>

    </div>
  </section>


  </div>


    


   
    
  )
}

export default Products
