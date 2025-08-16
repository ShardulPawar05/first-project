import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='background'>
      {/* header section  */}

       <div className='header'>
      <div>
        <img src="https://3extent.vercel.app/Assets/3extent.png" width="60"/>
      </div>
      <div>
        <a href="" className='headerlink'>Partenerwithus</a>
        <a href="" className='headerlink'>About us</a>
        <a href="" className='headerlink'>Contact us</a>
      </div>
      </div>
      {/* image section after headersection */}
      <div className='arrrangingimgsectionafterheader'>
        {/* <img src="https://3extent.vercel.app/Assets/home1.jpg" width="100% " height="600"/> */}
        <div className='imagetext'> Certified second hand Mobile<br/>
        Fully tested,graded and ready for sale</div>
      </div>
      {/* information section start from here */}

      <div>At 3_EXTENT Pvt. Ltd., we specialize in the bulk supply of high-quality, 
        pre-owned smartphones to resellers, retailers, and businesses across India. With a strong focus on quality
        , affordability, and trust, we help you grow your business by giving you access to the best devices at compe
        titive wholesale prices.</div>
      {/* aargened section using display flex property */}
      <div className='textandimgesection'>
        <div className='textofimage'>
          We specialize in B2B wholesale trading of high-quality second-hand and refurbished mobile phones. Since our inception, we've been committed to delivering reliable, affordable, and premium-grade 
          devices to retailers, resellers, and bulk buyers across India.
        </div>
        <div >
          <img src="https://3extent.vercel.app/Assets/home2.webp" width="100%" className='imageoftext'/>
        </div>
        
      </div>
      <div className='textandimgesection'>
        <div>
          <img src="https://3extent.vercel.app/Assets/home3.webp" width="100%" className='imageoftext'/>
        </div>
        <div  className='textofimage'>
          With a deep understanding of the mobile market and strong supplier networks, we ensure that every 
          device we sell is thoroughly tested, quality-checked, and competitively priced. Our goal is to help our 
          clients maximize their margins while giving customers access to the latest smartphones at the best value
        </div>
      </div>
      <div  className='textandimgesection'>
        <div className='textofimagelast' >
          In just a short span, we've built a reputation for trust, transparency, and timely delivery, selling 
          thousands of units and serving a growing network of satisfied partners. Whether you are a local shop owner or a
           large-scale distributor, we provide the products and service you can depend on.

        </div>
        <div >
          <img src="https://3extent.vercel.app/Assets/home4.webp" width="100%"  className='imageoftext'/>
        </div>
      </div>
      <div className='fullbodypartnerwithus'>
        <h2 className='headpartnerus'>Partner With US</h2>
        <div className='descriptiontextyofpartnerus'>Looking to stock up on reliable smartphones for resale? Partner with<strong> 3_EXTENT Pvt. Ltd.</strong> and get access 
          to a consistent, profitable, and growing supply chain.</div>
      </div>
      {/* three photo section start  */}
      <div className='informationaboutfounder'>
        {/* first photo and information */}
        <div className='photoandinforamtion'>
          <div className='aboutus'>About Us</div>
          <div className='arrangeimages'>
          <div className='photonimage'>
          <img src="https://3extent.vercel.app/Assets/CEO.jpeg" className='imgaesoffounder'/>
          <div className='imgdescription'>FOUNDER, Chief Executive Officer </div>
          <div className='imgdescription'>(CEO)</div>
          <div className='imgdescription'>Hrushikesh Tangadkar</div>
          </div>
        
      
       <div className='photonimage'>
          <img src="https://3extent.vercel.app/Assets/CTO.jpg" className='imgaesoffounder'/>
          <div className='imgdescription'>FOUNDER, Chief Technology Officer</div>
          <div className='imgdescription'>(CTO)</div>
          <div className='imgdescription'>Dipak Dhawade</div>
          </div>
        <div className='photonimage'>
          <img src="https://3extent.vercel.app/Assets/CGO.jpeg" className='imgaesoffounder'/>
          <div className='imgdescription'>FOUNDER, Chief Growth Officer</div>
          <div className='imgdescription'>(CGO)</div>
          <div className='imgdescription'>Vinod Gade</div>
        </div>
        </div>
        </div>
    </div>
    

      <div className='seconddescriptiontext'>
          <div className='ourvaluses'>Our Mission</div>
          <div className='ourmissiondescription'>To become India’s most trusted wholesale partner for second-hand an
            d refurbished mobiles by consistently delivering quality, value, and customer satisfaction.</div>
          <div className='ourvaluses'>Our Values</div>
          <div className='ourvalesdescription'>
          <div><strong>Quality First –</strong> Every device is tested for performance and reliability.</div>
          <div><strong>Integrity in Business –</strong> We believe in honest pricing and transparent deals.</div>
          <div><strong>Partnership Focused –</strong> Your success is our success.</div>
          </div>

      </div>
      {/* last description box */}
      <div className='lastfootersection'>
        <div className='ourvaluses'>Contact US</div>
        <div>We’re here to help you with bulk orders, partnership inquiries, or any questions about our products and 
          services. Get in touch with us through the details below — our team will respond promptly.</div>
          {/* three boxexs in last descriptions box starts */}
          <div className='threeboxinlastbox'>
            <div className='thres_box'>
            <div className='lastboxthreeboxhead'>Office Address  </div>
            <div>Shop No. 310, Deluxe Mall,</div>
            <div>Pimpri, Pune – 411017,</div>
            <div>Maharashtra, India</div>
           </div>
          
          <div className='thres_box'>
            <div className='lastboxthreeboxhead'>Contact Us</div>
            <div>+91 9665856368</div>
            <div>dipak.dhawade@3extent.com</div>
            
          </div>
          <div className='thres_box'>
            <div className='lastboxthreeboxhead'>Business Hours</div>
            <div>Monday – Saturday: 10:00 AM – 7:00 PM</div>
            <div>Sunday: Closed</div>
          </div>
          </div>
      </div>
      <div className='lastbackground'>

      </div>
    
    
    
    
    
    
    
    
    </div>

  



  );
}

export default App;
