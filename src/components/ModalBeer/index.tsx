import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/Modal/ModalContext";
import { useApi } from "../../hooks/useApi";
import { Beers } from "../../types/Beers";
import "./modalBeer.css";
import { AiOutlineClose } from "react-icons/ai";

export const ModalBeer = (props: any) => {
    const punkApi = useApi();
    const modal = useContext(ModalContext);

    const [idBeer, setIdBeer] = useState(props.id);
    const [beer, setBeer] = useState<Beers[]>([]);
    const [showLoading, setShowLoading] = useState(false);

    const beerById = async () => {
        setShowLoading(true);
        const res = await punkApi.getBeerId(idBeer);
        setBeer(res);
        setShowLoading(false);
    };

    const closeModal = () => {
        modal.setShowModal(false);
    };
    useEffect(() => {
        beerById();
    }, []);

    return (
        <div className="modalBeer" >
            <div className="modalBox">
                <div className="closeIcon" onClick={closeModal}>
                    <AiOutlineClose />
                </div>
                {showLoading ? (
                    <div className="loaderPosition">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <>
                        {beer.map((item, index: number) => (
                            <div className="beerModalItem" key={index}>
                                <div className="beerImage">
                                    <img
                                        className="imgBeers"
                                        src={item.image_url}
                                    />
                                </div>
                                
                                <div className="beerInfoArea">
                                    <div className="beerInfo">
                                    <span className="beerName">
                                        {item.name}
                                    </span>
                                    <p>{item.description}</p>
                                    <span>
                                        <strong>Brewed in:</strong>{" "}
                                        {item.first_brewed}
                                    </span> 
                                    <strong><p>Ingredients:</p></strong>
                                    <ul>
                                        <strong>Malt</strong>:{" "}
                                        {item.ingredients.malt.map(
                                            (malt, i) => (
                                                <li>
                                                    {malt.name} -{" "}
                                                    {malt.amount.value} kg
                                                </li>
                                            )
                                        )}
                                        <strong>Hops</strong>:{" "}
                                        {item.ingredients.hops.map(
                                            (hops, i) => (
                                                <li>
                                                    {hops.name} -{" "}
                                                    {hops.amount.value} g
                                                </li>
                                            )
                                        )}
                                        <strong>Yeast</strong>:{" "}
                                        <li>{item.ingredients.yeast}</li>
                                    </ul>

                                    <span>
                                        <strong>Food pairing: </strong>
                                        {item.food_pairing.map((food) => (
                                            <p> - {food};</p>
                                        ))}
                                    </span>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};
