import React, {useState} from "react";
import {Button} from "antd";

function CoreFeatureContainer() {
    const [, forceRender] = useState(null);

    function setValueToSessionStorage () {
        const value = Math.random().toString();
        sessionStorage.setItem('key', value);
        forceRender(value);
    }

    return (
        <>
            This is a core feature <br/>
            <Button onClick={setValueToSessionStorage}>Set value</Button>
            {sessionStorage.getItem('key')}
        </>
    )

}

export default CoreFeatureContainer;