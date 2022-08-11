import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Products = ({datas}) => {
    return (
        <div className={styles.main}>
            {/* <h1>This is products</h1> */}
            {
                datas?.subCategories?.length === 0 ?
                datas.products.map(item => <li key={item._id}>{item.name}</li> ) :
                datas.subCategories.map(item => <li key={item._id}>{item.subCategoryName}</li> )
            }
            <Link href='/' passHref><button>Go Back</button></Link>
        </div>
    );
};

export default Products;

  export async function getServerSideProps(context) {
    const {id} = context.query;
    const res = await fetch(`https://ecommerce.devoretapi.co.uk/website/findCategoryAndProducts?isActive=true&storeId=1-2021&categoryId=${id}`);
    const datas = await res.json();
    return {
      props: {  datas }, // will be passed to the page component as props
    }
  }