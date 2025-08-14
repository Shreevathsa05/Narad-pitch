import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/workflow">Workflow</Link> |
                <Link to="/report">Report</Link>
            </nav>
        </div>
    )
}

export default Header
