import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
const NotFoundScreen = () => {
    return (
        <div className="text-center not-found">
            <h2 className="text-bold">404</h2>
            <LinkContainer to="/">
                <h4>Go to home &rarr;</h4>
            </LinkContainer>
        </div>
    )
}

export default NotFoundScreen
