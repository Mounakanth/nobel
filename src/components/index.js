
import React from 'react'
import { Button } from 'react-bootstrap'

export default function Home() {
    
    return (
        <div>
            <h2 className="text-center mt-3">Welcome</h2><br/>
            <div className="text-center">
            <code className="h6">[Search a Nobel prize winner by name]</code><br/><br/>
            <Button color="primary" href="/search_name">Click here!</Button>
            </div><br/>
            <div className="text-center">
            <code className="h6">[Find out Nobel prize winner in a year input by him]</code><br/><br/>
            <Button color="primary" href="/year">Click here!</Button>
            </div><br/>
            <div className="text-center">
            <code className="h6">[Search Prize winner based on the year and category (Peace/Chemistry/Physics etc...)]
            </code><br/><br/>
            <Button color="primary" href="/year&category">Click here!</Button>
            </div><br/>
            <div className="text-center">
            <code className="h6">[Show a list of all Winners in Alphabetical order (With year and category against the name)]
            </code><br/><br/>
            <Button color="primary" href="/sortname">Click here!</Button>
            </div>
        </div>
    )
}
