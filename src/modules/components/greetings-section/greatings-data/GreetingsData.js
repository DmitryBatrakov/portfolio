import React from "react";
import CodeString from "./CodeString";
import Greetings from "../Greetings";

const data = [1, 2, 3];

export const codeString =
{
    body: 'body',
    background: 'background',
    linearGradient1: 'linear-gradient',
    rgb: 'rgb',
    bodyOfLinerGradient1: '127deg',
    rgbNumbers1: '2, 255, 238',
    rgbNumbers2: '154, 24, 253, 85.71%',
    bodyOfLinerGradient2: '90deg',
    rgbNumbers3: '4, 247, 113',
    rgbNumbers4: '4, 247, 113, 20.71%',
    bodyOfLinerGradient3: '335deg',
    rgbNumbers5: '0, 255, 102',
    rgdNumbers6: '2, 255, 238, 85.71%',
    bracketLeft: '(',
    bracketRight: ')',
    bracerRight: '}',
    bracerLeft: '{',
    comma: ',',
    colon: ':',
}

const GreetingsData = () => {

    return (
        <section>
            {data.map((_, index) => {

                return (
                    <CodeString
                        key={index}
                        codeString={codeString}
                    />
                )
            })};

        </section>
    )
}

export default GreetingsData;