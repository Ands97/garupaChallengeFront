import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./home.css";
import { FcNext, FcPrevious } from "react-icons/fc";
import { ModalBeer } from "../../components/ModalBeer";
import { ModalContext } from "../../contexts/Modal/ModalContext";
import { useBeer } from "../../hooks/useBeer";
import { usePagination } from "../../hooks/usePagination";

export const Home = () => {
    const modal = useContext(ModalContext);
    const { beers, fetchBeer } = useBeer(15);
    const { currentPage, setCurrentPage } = usePagination();

    const [id, setId] = useState("");
    const [showLoading, setShowLoading] = useState(false);

    const setScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    const firstPage = () => {
        setCurrentPage(1);
        setScroll();
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
        setScroll();
    };
    const previousPage = () => {
        if (currentPage <= 1) {
            setCurrentPage(1);
            setScroll();
        } else {
            setCurrentPage(currentPage - 1);
            setScroll();
        }
    };

    const handleModal = (id: string) => {
        modal.setShowModal(true);
        setId(id);
    };

    useEffect(() => {
        fetchBeer(currentPage);
    }, [currentPage]);

    return (
        <>
            <Header />
            <section className="section">
                <h1>Catalog:</h1>
                <div className="beersArea">
                    {showLoading ? (
                        <div className="loaderPosition">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        <>
                            {beers.map((item, index) => (
                                <div className="beer" key={index}>
                                    <div className="beerImgHome">
                                        <img
                                            className="imgBeers"
                                            src={item.image_url}
                                        />
                                    </div>
                                    
                                    <div className="beerInfo">
                                        <span className="beerName">
                                            {item.name}
                                        </span>
                                        <span>{item.tagline}</span>
                                        <div
                                            className="moreIformation"
                                            onClick={() => handleModal(item.id)}
                                        >
                                            More information
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                    <div className="paginationArea">
                        <span className="firstPage" onClick={firstPage}>
                            First Page
                        </span>
                        <div className="iconAreaPagination">
                            <div
                                className="previousPage"
                                onClick={previousPage}
                            >
                                <FcPrevious />
                            </div>
                            <span className="currentPage">{currentPage}</span>
                            <div className="nextPage" onClick={nextPage}>
                                <FcNext />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {modal.showModal && <ModalBeer id={id} />}
        </>
    );
};
