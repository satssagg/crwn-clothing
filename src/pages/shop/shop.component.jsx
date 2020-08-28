import React from 'react';
import shopData from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
class ShopPage extends React.Component {

    constructor() {
        super();
        this.state = {
            collections: shopData
        }
    }
    render() {
        const { collections } = this.state;
        return (

            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollection }) => (
                        <CollectionPreview key={id} {...otherCollection} />
                    ))
                }

            </div>
        )
    }
}

export default ShopPage;


