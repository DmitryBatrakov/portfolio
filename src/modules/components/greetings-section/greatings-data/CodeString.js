// import React from "react";
// import './codeString.scss';

// export default function CodeString({ codeString, index }) {
//     return (
//         <div className="codeStringDiv">
//             <div className="front-block">
//                 <div className="bodyName-line" key={index}>
//                     <span>{codeString.body}</span>
//                     <span>{codeString.bracerLeft}</span>
//                 </div>
//                 <div className="background-line">
//                     <span>{codeString.background}</span>
//                     <span>{codeString.colon}</span>
//                 </div>
//                 <div className="linerGradient-line">
//                     <span>{codeString.linearGradient1}</span>
//                     <span>{codeString.bracketLeft}</span>
//                     <span>{codeString.bodyOfLinerGradient1}</span>
//                     <span>{codeString.comma}</span>
//                 </div>
//                 <div className="rgb-line">
//                     <div className="firstRgb">
//                         <span>{codeString.rgb}</span>
//                         <span>{codeString.bracketLeft}</span>
//                         <span>{codeString.rgbNumbers1}</span>
//                         <span>{codeString.bracketRight}</span>
//                         <span>{codeString.comma}</span>
//                     </div>
//                     <div className="secondRgb">
//                         <span>{codeString.rgb}</span>
//                         <span>{codeString.bracketLeft}</span>
//                         <span>{codeString.rgbNumbers2}</span>
//                         <span>{codeString.bracketRight}</span>
//                         <span>{codeString.comma}</span>
//                     </div>
//                 </div>
//                 <div className="linerGradient-line">
//                     <span>{codeString.linearGradient1}</span>
//                     <span>{codeString.bracketLeft}</span>
//                     <span>{codeString.bodyOfLinerGradient1}</span>
//                     <span>{codeString.comma}</span>
//                 </div>
//                 <div className="rgb-line">
//                     <div className="firstRgb">
//                         <span>{codeString.rgb}</span>
//                         <span>{codeString.bracketLeft}</span>
//                         <span>{codeString.rgbNumbers1}</span>
//                         <span>{codeString.bracketRight}</span>
//                         <span>{codeString.comma}</span>
//                     </div>
//                     <div className="secondRgb">
//                         <span>{codeString.rgb}</span>
//                         <span>{codeString.bracketLeft}</span>
//                         <span>{codeString.rgbNumbers2}</span>
//                         <span>{codeString.bracketRight}</span>
//                         <span>{codeString.comma}</span>
//                     </div>
//                 </div>
//                 <div className="linerGradient-line">
//                     <span>{codeString.linearGradient3}</span>
//                     <span>{codeString.bracketLeft}</span>
//                     <span>{codeString.bodyOfLinerGradient1}</span>
//                     <span>{codeString.comma}</span>
//                 </div>
//                 <div className="rgb-line">
//                     <div className="firstRgb">
//                         <span>{codeString.rgb}</span>
//                         <span>{codeString.bracketLeft}</span>
//                         <span>{codeString.rgbNumbers4}</span>
//                         <span>{codeString.bracketRight}</span>
//                         <span>{codeString.comma}</span>
//                     </div>
//                     <div className="secondRgb">
//                         <span>{codeString.rgb}</span>
//                         <span>{codeString.bracketLeft}</span>
//                         <span>{codeString.rgbNumbers5}</span>
//                         <span>{codeString.bracketRight}</span>
//                         <span>{codeString.comma}</span>
//                     </div>
//                 </div>
//                 <span>{codeString.bracerRight}</span>

//             </div>
//             <div className="rear-block">
//                 <div className="bodyName-line" key={index}>
//                     <span>{codeString.body}</span>
//                     <span>{codeString.bracerLeft}</span>
//                 </div>
//                 <div className="background-line">
//                     <span>{codeString.background}</span>
//                     <span>{codeString.colon}</span>
//                 </div>
//                 <div className="linerGradient-line">
//                     <span>{codeString.linearGradient1}</span>
//                     <span>{codeString.bracketLeft}</span>
//                     <span>{codeString.bodyOfLinerGradient1}</span>
//                     <span>{codeString.comma}</span>
//                 </div>
//                 <div className="rgb-line">
//                     <div className="firstRgb">
//                         <span>{codeString.rgb}</span>
//                         <span>{codeString.bracketLeft}</span>
//                         <span>{codeString.rgbNumbers1}</span>
//                         <span>{codeString.bracketRight}</span>
//                         <span>{codeString.comma}</span>
//                     </div>
//                     <div className="secondRgb">
//                         <span>{codeString.rgb}</span>
//                         <span>{codeString.bracketLeft}</span>
//                         <span>{codeString.rgbNumbers2}</span>
//                         <span>{codeString.bracketRight}</span>
//                         <span>{codeString.comma}</span>
//                     </div>
//                 </div>
//                 <div className="linerGradient-line">
//                     <span>{codeString.linearGradient1}</span>
//                     <span>{codeString.bracketLeft}</span>
//                     <span>{codeString.bodyOfLinerGradient1}</span>
//                     <span>{codeString.comma}</span>
//                 </div>
//                 <div className="rgb-line">
//                     <div className="firstRgb">
//                         <span>{codeString.rgb}</span>
//                         <span>{codeString.bracketLeft}</span>
//                         <span>{codeString.rgbNumbers1}</span>
//                         <span>{codeString.bracketRight}</span>
//                         <span>{codeString.comma}</span>
//                     </div>
//                     <div className="secondRgb">
//                         <span>{codeString.rgb}</span>
//                         <span>{codeString.bracketLeft}</span>
//                         <span>{codeString.rgbNumbers2}</span>
//                         <span>{codeString.bracketRight}</span>
//                         <span>{codeString.comma}</span>
//                     </div>
//                 </div>
//                 <div className="linerGradient-line">
//                     <span>{codeString.linearGradient3}</span>
//                     <span>{codeString.bracketLeft}</span>
//                     <span>{codeString.bodyOfLinerGradient1}</span>
//                     <span>{codeString.comma}</span>
//                 </div>
//                 <div className="rgb-line">
//                     <div className="firstRgb">
//                         <span>{codeString.rgb}</span>
//                         <span>{codeString.bracketLeft}</span>
//                         <span>{codeString.rgbNumbers4}</span>
//                         <span>{codeString.bracketRight}</span>
//                         <span>{codeString.comma}</span>
//                     </div>
//                     <div className="secondRgb">
//                         <span>{codeString.rgb}</span>
//                         <span>{codeString.bracketLeft}</span>
//                         <span>{codeString.rgbNumbers5}</span>
//                         <span>{codeString.bracketRight}</span>
//                         <span>{codeString.comma}</span>
//                     </div>
//                 </div>
//                 <span>{codeString.bracerRight}</span>

//             </div>
//         </div>
//     )
// }

// import React from "react";
// import './codeString.scss';

// // Компонент для строки градиента
// const GradientLine = ({ gradient, bracketLeft, bodyOfGradient, comma }) => (
//     <div className="linerGradient-line">
//         <span className="gradient">{gradient}</span>
//         <span className="brackets">{bracketLeft}</span>
//         <span>{bodyOfGradient}</span>
//         <span>{comma}</span>
//     </div>
// );

// // Компонент для RGB строк
// const RgbLine = ({ rgb, bracketLeft, rgbNumbers, bracketRight, comma }) => (
//     <div className="rgb-line">
//         {rgbNumbers.map((numbers, index) => (
//             <div className="rgb-container" key={index}>
//                 <span className="rgb">{rgb}</span>
//                 <span className="brackets">{bracketLeft}</span>
//                 <span className="numbers">{numbers}</span>
//                 <span className="brackets">{bracketRight}</span>
//                 {comma && <span className="comma">{comma}</span>}
//             </div>
//         ))}
//     </div>
// );

// const RenderBlock = ({ codeString, index }) => (
//     <>
//         <div className="bodyName-line" key={index}>
//             <span className="body">{codeString.body}</span>
//             <span className="bracers">{codeString.bracerLeft}</span>
//         </div>
//         <div className="background-line">
//             <span className="background">{codeString.background}</span>
//             <span className="colon">{codeString.colon}</span>
//         </div>
//         <GradientLine 
//             gradient={codeString.linearGradient1}
//             bracketLeft={codeString.bracketLeft}
//             bodyOfGradient={codeString.bodyOfLinerGradient1}
//             comma={codeString.comma}
//         />
//         <RgbLine 
//             rgb={codeString.rgb}
//             bracketLeft={codeString.bracketLeft}
//             rgbNumbers={[codeString.rgbNumbers1, codeString.rgbNumbers2]}
//             bracketRight={codeString.bracketRight}
//             comma={codeString.comma}
//         />
//         <GradientLine 
//             gradient={codeString.linearGradient1}
//             bracketLeft={codeString.bracketLeft}
//             bodyOfGradient={codeString.bodyOfLinerGradient1}
//             comma={codeString.comma}
//         />
//         <RgbLine 
//             rgb={codeString.rgb}
//             bracketLeft={codeString.bracketLeft}
//             rgbNumbers={[codeString.rgbNumbers1, codeString.rgbNumbers2]}
//             bracketRight={codeString.bracketRight}
//             comma={codeString.comma}
//         />
//         <GradientLine 
//             gradient={codeString.linearGradient3}
//             bracketLeft={codeString.bracketLeft}
//             bodyOfGradient={codeString.bodyOfLinerGradient1}
//             comma={codeString.comma}
//         />
//         <RgbLine 
//             rgb={codeString.rgb}
//             bracketLeft={codeString.bracketLeft}
//             rgbNumbers={[codeString.rgbNumbers4, codeString.rgbNumbers5]}
//             bracketRight={codeString.bracketRight}
//             comma={codeString.comma}
//         />
//         <span className="bracers">{codeString.bracerRight}</span>
//     </>
// );

// export default function CodeString({ codeString, index }) {
//     return (
//         <div className="codeStringDiv">
//             <div className="front-block">
//                 <RenderBlock codeString={codeString} index={index} />
//             </div>
//             <div className="rear-block">
//                 <RenderBlock codeString={codeString} index={index} />
//             </div>
//         </div>
//     )
// }

import React from "react";
import './codeString.scss';

// Компонент для строки градиента
const GradientLine = ({ gradient, bracketLeft, bodyOfGradient, comma, gradientClass }) => (
    <div className={`linerGradient-line ${gradientClass}`}>
        <span className="gradient">{gradient}</span>
        <span className="brackets">{bracketLeft}</span>
        <span className="body-of-gradient">{bodyOfGradient}</span>
        <span>{comma}</span>
    </div>
);

// Компонент для RGB строк
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
