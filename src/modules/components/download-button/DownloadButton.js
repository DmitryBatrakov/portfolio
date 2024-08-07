import { BsDownload } from "react-icons/bs";
import { MdSimCardDownload } from "react-icons/md";
import { IoIosDownload } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import './downloadButton.scss';
import './downloadButton-media.scss';

export default function DownloadButton() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/files/Dmitry Batrakov CV English.pdf';
        link.download = 'Dmitry Batrakov CV English.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="download-button-section">
            <button onClick={handleDownload} className="download-button">
                <HiDownload />
            </button>
            {/* <a href={process.env.PUBLIC_URL + "/files/Dmitry Batrakov CV English.pdf"} download='cv.pdf' className="download-button">
                <HiDownload />
                
            </a> */}
            <span className="shadow"></span>
            <span className="cv">CV</span>
        </div>
    )
}