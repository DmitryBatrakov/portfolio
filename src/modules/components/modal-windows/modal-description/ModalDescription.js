import React from 'react';
import { CgCloseO } from "react-icons/cg";
import './modalDescription.scss';

const ModalDescription = ({ work, isDescriptionOpen, handleDescriptionClose }) => {
    
    if (!isDescriptionOpen) return null;

    return (
        
            <div className="new-modal-overlay" >
                <div className="new-modal-content" onClick={(e) => e.stopPropagation()} id="element">
                    <div className="text-section">
                        <button
                            className="btn-close"
                            onClick={handleDescriptionClose}
                        >
                            <CgCloseO />
                        </button>
                        <p>Тут можно разместить дополнительную информацию.</p>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dolor adipisci omnis, magni qui numquam iusto facilis officiis delectus rem. Adipisci quisquam aperiam optio eaque incidunt enim illum voluptate iure?
                        Ipsam reiciendis similique corporis, explicabo aperiam vero commodi ut in accusantium pariatur. Modi nobis hic magnam soluta! Ipsa ratione atque voluptate vero temporibus consequatur totam alias, hic a similique optio.
                        Dignissimos, ut! Facilis iste recusandae cum nesciunt dolorum impedit optio, quidem nostrum nisi, repudiandae eius dolorem, incidunt repellat. Reprehenderit repudiandae voluptates inventore explicabo dignissimos quidem aspernatur sit maiores esse repellendus.
                        Omnis vel veniam exercitationem natus, accusantium porro ipsum molestiae quasi cum necessitatibus quod qui consequatur ullam maxime consequuntur dolorum est sint incidunt quam possimus nam libero? Numquam facilis corrupti veritatis!
                        Voluptatum enim, ad voluptatibus pariatur mollitia itaque velit suscipit omnis sunt quo maxime fugiat harum nostrum, porro facilis nemo. Ex ratione id velit perferendis voluptatibus sed sint reprehenderit aspernatur aliquid?
                        Debitis voluptatibus porro voluptates cumque corrupti quibusdam consectetur natus itaque. Quae possimus dolorum tempore accusantium in dolores quia, minus quod culpa nostrum unde corporis dolore magni eius mollitia provident assumenda.
                        Distinctio incidunt fugiat reprehenderit! Voluptatum numquam autem et maiores quam vitae ea reprehenderit reiciendis harum, voluptates a ut error, accusamus, minima optio maxime iure eveniet voluptatibus asperiores doloremque deleniti aspernatur?
                        Maiores odit architecto qui sint inventore officiis quisquam ipsam deleniti consequuntur, eveniet obcaecati eum voluptatibus alias nam distinctio repellat nihil amet? At culpa doloremque accusantium officia dignissimos quidem minus eaque.
                        Excepturi placeat, a voluptatibus et maiores ea nobis nostrum possimus ullam reiciendis odio illum dignissimos exercitationem, quos rerum odit consectetur porro nisi. Culpa, eum est! Harum distinctio minima eum illum.
                        Exercitationem ipsa soluta asperiores rem distinctio qui odit quia fuga deserunt aspernatur labore necessitatibus assumenda est laboriosam tenetur numquam, quod a? Ipsum enim eos quibusdam. Necessitatibus cum quibusdam optio. Velit.</span>
                    </div>
                </div>
            </div>
           
    );
};

export default ModalDescription;
