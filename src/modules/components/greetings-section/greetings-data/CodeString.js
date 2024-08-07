import React from "react";
import './codeString.scss';

const GradientLine = ({ gradient, bracketLeft, bodyOfGradient, comma, gradientClass }) => (
    <div className={`linerGradient-line ${gradientClass}`}>
        <span className="gradient">{gradient}</span>
        <span className="brackets">{bracketLeft}</span>
        <span className="body-of-gradient">{bodyOfGradient}</span>
        <span>{comma}</span>
    </div>
);

const RgbLine = ({ rgb, bracketLeft, rgbNumbers, bracketRight, comma, lineClass }) => (
    <div className={`rgb-line ${lineClass}`}>
        {rgbNumbers.map((numbers, index) => (
            <div className="rgb-container" key={index}>
                <span className="rgb">{rgb}</span>
                <span className="brackets">{bracketLeft}</span>
                <span className="numbers">{numbers}</span>
                <span className="brackets">{bracketRight}</span>
                {comma && <span className="comma">{comma}</span>}
            </div>
        ))}
    </div>
);

const RenderBlock = ({ codeString, index }) => (
    <>
        <div className="bodyName-line" key={index}>
            <span className="body">{codeString.body}</span>
            <span className="bracers">{codeString.bracerLeft}</span>
        </div>
        <div className="background-line">
            <span className="background">{codeString.background}</span>
            <span className="colon">{codeString.colon}</span>
        </div>
        <GradientLine 
            gradient={codeString.linearGradient1}
            bracketLeft={codeString.bracketLeft}
            bodyOfGradient={codeString.bodyOfLinerGradient1}
            comma={codeString.comma}
            gradientClass="firstGradient"
        />
        <RgbLine 
            rgb={codeString.rgb}
            bracketLeft={codeString.bracketLeft}
            rgbNumbers={[codeString.rgbNumbers1, codeString.rgbNumbers2]}
            bracketRight={codeString.bracketRight}
            comma={codeString.comma}
            lineClass="firstRgbLine"
        />
        <GradientLine 
            gradient={codeString.linearGradient1}
            bracketLeft={codeString.bracketLeft}
            bodyOfGradient={codeString.bodyOfLinerGradient1}
            comma={codeString.comma}
            gradientClass="secondGradient"
        /> 
        <RgbLine 
            rgb={codeString.rgb}
            bracketLeft={codeString.bracketLeft}
            rgbNumbers={[codeString.rgbNumbers1, codeString.rgbNumbers2]}
            bracketRight={codeString.bracketRight}
            comma={codeString.comma}
            lineClass="secondRgbLine"
        />
        <GradientLine 
            gradient={codeString.linearGradient1}
            bracketLeft={codeString.bracketLeft}
            bodyOfGradient={codeString.bodyOfLinerGradient1}
            comma={codeString.comma}
            gradientClass="thirdGradient"
        />
        <RgbLine 
            rgb={codeString.rgb}
            bracketLeft={codeString.bracketLeft}
            rgbNumbers={[codeString.rgbNumbers4, codeString.rgbNumbers5]}
            bracketRight={codeString.bracketRight}
            comma={codeString.comma}
            lineClass="thirdRgbLine"
        />
        <span className="bracers">{codeString.bracerRight}</span>
    </>
);

export default function CodeString({ codeString, index }) {
    return (
        <div className="codeStringDiv">
            <div className="front-block">
                <RenderBlock codeString={codeString} index={index} />
            </div>
            <div className="rear-block">
                <RenderBlock codeString={codeString} index={index} />
            </div>
        </div>
    );
}
