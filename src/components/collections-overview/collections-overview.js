import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-overview.scss'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import CollectionPreview from '../preview-collection/preview-collection'

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, title, items }) => (
                <CollectionPreview key={id} title={title} items={items} />))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);