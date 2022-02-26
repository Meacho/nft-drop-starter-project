import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Content/Footer";
import CandyMachine from "./CandyMachine";
import marcafiLogo from "./assets/logo-large.png";

// Constants

const App = () => {
  //state
  const [walletAddress, setWalletAddress] = useState(null);

  /* Actions
   *  Declare function
   * When our component first mounts, let's check to see if we have a connected
   * Phantom Wallet */

  const checkIfWalletIsConnected = async () => {
    try {
      //check if wallet has injected solana in DOM window
      const { solana } = window;
      //check if the wallet is the Phantom wallet extension
      if (solana && solana.isPhantom) {
        console.log("Phantom wallet found!");

        /*
         * The solana object gives us a function that will allow us to connect
         * directly with the user's wallet!
         */

        const response = await solana.connect({ onlyIfTrusted: true });
        console.log(
          "Connected with Public Key:",
          response.publicKey.toString()
        );
        //Set users publickey to state for later use

        setWalletAddress(response.publicKey.toString());
      } else {
        alert("Solana object not found. Get phantom wallet");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //Define methods so code doesn't break

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log(
        "Connected from connect button logic with Public key:",
        response.publicKey.toString()
      );
      setWalletAddress(response.publicKey.toString());
    }
  };

  // render not connected container
  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  //useEffect called when component loaded and [] is empty so basically when page loads
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <img alt="Marcafi Logo" className="marcafi-logo" src={marcafiLogo} />
          <p className="header">Membership</p>
          <p className="sub-text">
            To get your complimentary Marcafi membership please connect your
            wallet and follows the on screen instructions.
          </p>
          {!walletAddress && renderNotConnectedContainer()}
        </div>

        {/* Check for walletAddress and then pass in walletAddress */}
        {walletAddress && <CandyMachine walletAddress={window.solana} />}
      </div>
      {Footer()}
    </div>
  );
};

export default App;
