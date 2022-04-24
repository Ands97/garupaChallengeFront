import "./login.css";
import Beers from "../../assets/beers.jpg";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

export const Login = () => {
    const auth = useContext(AuthContext);
    const api = useApi();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [messagePassword, setMessagePassword] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [messageEmail, setMessageEmail] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email && password) {
            setShowLoading(true);
            const res = await api.signin(email, password);
            await auth.signin(email, password);
            setShowLoading(false);
            if (res.status) {
                navigate("/home");
            } else {
                if (res.message === "Incorrect password") {
                    setMessagePassword(true);
                    setMessageEmail(false);
                } else if (res.message === "User not found") {
                    setMessageEmail(true);
                    setMessagePassword(false);
                }
            }
        }
    };

    return (
        <div className="loginArea">
            <div className="loginBox">
                <figure>
                    <img className="imgBeers" src={Beers} />
                    {showLoading ? (
                        <div className="loaderPosition">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        <>
                            <h1>Welcome!</h1>
                            <form onSubmit={handleLogin}>
                                <div className="input">
                                    <input
                                        type="text"
                                        required={true}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                    />
                                    <div className="icon">
                                        <AiOutlineUser />
                                    </div>
                                    <label>Email</label>
                                </div>
                                <div className="input">
                                    <input
                                        type="password"
                                        required={true}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        value={password}
                                    />
                                    <div className="icon">
                                        <RiLockPasswordLine />
                                    </div>

                                    <label>Password</label>
                                </div>
                                {messagePassword && (
                                    <span
                                        style={{
                                            color: "red",
                                            padding: "10px",
                                        }}
                                    >
                                        The password is incorrect
                                    </span>
                                )}
                                {messageEmail && (
                                    <span
                                        style={{
                                            color: "red",
                                            padding: "10px",
                                        }}
                                    >
                                        The email is incorrect
                                    </span>
                                )}
                                <button className="button">
                                    Sign in
                                    <FiLogIn />
                                </button>
                            </form>
                        </>
                    )}
                </figure>
            </div>
        </div>
    );
};
