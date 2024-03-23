import styles from './ContentText.module.css';


export default function ContentText(){
    return(
        <>
        {/* <div className="bigTxt mt-5 mb-5">             */}
        <div className={`${styles.bigTxt} my-4`}>  
        𝐘𝐎𝐔𝐑 𝐅𝐄𝐄𝐓 
        𝐃𝐄𝐒𝐄𝐑𝐕𝐄 <br />
        𝐓𝐇𝐄 𝐁𝐄𝐒𝐓 
        </div>
       
        


        {/* <div className="smallTxt my-4"> */}
        <div className={`${styles.smallTxt} my-4`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur sapiente maiores accusamus recusandae mollitia atque sunt aliquid impedit a saepe, distinctio explicabo rem tenetur, iure aperiam architecto animi cum sint molestiae placeat voluptatum. 
        </div>


        <div className='mt-4 mb-4'>
            <button className='btn btn-danger px-3 py-2 border-2 me-3'>Shop Now</button>
            <button className='btn btn-outline-secondary px-3 py-2 border-2 ms-3'>Category</button>
        </div>

        {/* <div className="smallTxt2 mt-4 mb-4"> */}
        <div className={`${styles.smallTxt2} my-4`}>
            Also Available On
        </div>
        



        <div>
          <img src="https://www.indianbodybuilding.co.in/products/wp-content/uploads/2015/08/Flipkart-Logo.png" alt="" />

          <img src="https://s3-symbol-logo.tradingview.com/amazon--600.png" alt="" />
        </div>
        
        
        </>
    )
}

