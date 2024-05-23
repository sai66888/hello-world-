import { url } from "inspector";
import React from "react";

const Home = () => {
  return (
    <div
      className="backgroundImage"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: "-100" // Added to evenly space the columns
      }}
    >
      <div
        style={{
          flex: 1,
          alignSelf: "center",
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: "10px",
          height: "4000px"
        }}
      >
        Column 1
        <div
          style={{
            textAlign: "center",
            height: "100px",
            borderRadius: "20px",
            display: "flow",
            backgroundColor: "#0B2538",
            fontSize: "2rem",
            color: "gold",
            fontFamily: "Playfair Display",
            marginTop: "5cm"
          }}
        >
          $1 BUY = <br /> 20 SECONDS
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            height: "auto",
            borderRadius: "10%",
            display: "flow",
            backgroundColor: "#0B2538",
            fontSize: "2rem",
            color: "gold",
            fontFamily: "Apple Color Emoji",
            marginTop: "8cm"
          }}
        >
          The Story
          <div
            style={{
              textAlign: "center",
              display: "flow",
              fontSize: "25px",
              color: "white",
              fontFamily: "Playfair Display",
              marginTop: "cm",
              padding: "40px"
            }}
          >
            Eternal Flame of the Internet is a web3-crypto community experiment,
            lit in the spirit of the Paris Olympics. It is fueled by Eternal
            Flame Token - every Eternal Flame buyer and holder becomes a mighty
            Flame Guardian. Let's test our endurance here, on the Internet. How
            long can we keep the Flame burning?
          </div>
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            height: "250px",
            borderRadius: "10%",
            display: "flow",
            backgroundColor: "#0B2538",
            fontSize: "2rem",
            color: "gold",
            fontFamily: "Apple Color Emoji",
            marginTop: "5cm"
          }}
        >
          The Guardians
        </div>
      </div>

      <div
        style={{
          flex: 1,
          textAlign: "center",
          height: "0px",
          backgroundColor: "rgba(255,255,255,0.1)",
          color: "white",
          padding: "0px",
          top: 130,
          position: "sticky",
          alignSelf: "flex-start",
          fontSize: "45px",
          fontSmooth: "4",
          fontStretch: "",
          fontFamily: "Apple Color Emoji",
          margin: "2cm"
        }}
      >
        ETERNAL <br />
        FLAME OF THE INTERNET
        <div
          style={{
            flex: 1,
            height: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0B2538"
          }}
        >
          <img
            src={"/2-Logo.png"}
            alt="icon"
            style={{ width: "120px", height: "120px", marginTop: "-13cm" }}
          />
        </div>
        <div
          style={{
            flex: 1,
            position: "relative",
            textAlign: "center",
            zIndex: "0",
            height: "100px",
            borderRadius: "15%",
            display: "flow",
            backgroundColor: "#0B2538",
            fontSize: "2rem",
            fontWeight: "500",
            fontStyle: "oblique",
            fontFamily: "Apple Color Emoji,Times",
            marginTop: "1cm"
          }}
        >
          IGINITION IN:
          <br />
          00 00 00 00
        </div>
        <div
          style={{
            flex: 1,
            height: "0px",
            zIndex: "-50",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.3)",
            marginTop: "3.5cm"
          }}
        >
          <img
            src={"/1.png"}
            alt="icon"
            style={{ width: "100px", height: "300px", marginTop: "-6cm" }}
          />{" "}
          {}{" "}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          textAlign: "center",
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: "10px",
          height: "4000px"
        }}
      >
        Column 3
        <div
          style={{
            textAlign: "center",
            height: "100px",
            borderRadius: "10%",
            display: "flow",
            backgroundColor: "#0B2538",
            fontSize: "2rem",
            color: "gold",
            fontFamily: "Playfair Display",
            marginTop: "5cm"
          }}
        >
          KEEP THE FLAME <br />
          ALIVE
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            height: "680px",
            borderRadius: "10%",
            display: "flow",
            backgroundColor: "#0B2538",
            fontSize: "2rem",
            color: "gold",
            fontFamily: "Apple Color Emoji",
            marginTop: "15cm"
          }}
        >
          How It Works?
          <div
            style={{
              textAlign: "center",
              display: "flow",
              fontSize: "25px",
              color: "white",
              fontFamily: "Playfair Display",
              marginTop: "cm"
            }}
          >
            <br />
            Each buy order of at least
            <br /> $1 of Eternal Flame token
            <br />
            adds 20 seconds of burn
            <br /> time for the Flame and
            <br />
            makes you a Flame <br /> Guardiam. The Flame will
            <br /> burn as long as there are <br /> enough Guardians to
            <br /> support the Flame. Selling <br />
            the token does not reduce
            <br />
            the burning time - you
            <br />
            will not be punished by <br />
            leaving your post, but
            <br />
            honorable are those who
            <br />
            keep the watch.
          </div>
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            height: "650px",
            borderRadius: "10%",
            display: "flow",
            backgroundColor: "#0B2538",
            fontSize: "2rem",
            color: "gold",
            fontFamily: "Apple Color Emoji",
            marginTop: "25cm"
          }}
        >
          $FLAME Tokenomics
          <div
            style={{
              textAlign: "center",
              display: "flow",
              fontSize: "25px",
              color: "white",
              fontFamily: "Playfair Display",
              marginTop: "cm"
            }}
          >
            Tax:1%Sell&1%
            <br />
            Buy
            <br />
            Total Supply
            <br />
            100 000 000
            <br />
            FLAME
            <br />
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flow",
              fontSize: "15px",
              color: "white",
              fontFamily: "Playfair Display",
              marginTop: "cm"
            }}
          >
            ICO+Liquidity 86%
          </div>
          <div>
            <div
              style={{
                alignSelf: "center",
                padding: "0px",
                backgroundColor: "gold",
                height: "10px",
                width: "200px",
                marginTop: "3px",
                marginLeft: "40px",
                borderRadius: "1px",
                position: "relative",
                alignItems: "center"
              }}
            ></div>
            <div
              style={{
                alignSelf: "center",
                alignContent: "center",
                padding: "0px",
                backgroundColor: "grey",
                borderRadius: "1px",
                height: "15px",
                width: "120px",
                marginTop: "-12px",
                marginLeft: "40px",
                position: "relative",
                alignItems: "center"
              }}
            ></div>
            <div>Team 10%</div>
          </div>
          <div>
            <div
              style={{
                alignSelf: "center",
                padding: "0px",
                backgroundColor: "gold",
                height: "10px",
                width: "200px",
                marginTop: "3px",
                marginLeft: "40px",
                borderRadius: "1px",
                position: "relative",
                alignItems: "center"
              }}
            ></div>
            <div
              style={{
                alignSelf: "center",
                alignContent: "center",
                padding: "0px",
                backgroundColor: "grey",
                borderRadius: "1px",
                height: "15px",
                width: "120px",
                marginTop: "-12px",
                marginLeft: "40px",
                position: "relative",
                alignItems: "center"
              }}
            ></div>
          </div>
          <div>Marketing 4%</div>
          <div>
            <div
              style={{
                alignSelf: "center",
                padding: "0px",
                backgroundColor: "gold",
                height: "10px",
                width: "200px",
                marginTop: "3px",
                marginLeft: "40px",
                borderRadius: "1px",
                position: "relative",
                alignItems: "center"
              }}
            ></div>
            <div
              style={{
                alignSelf: "center",
                alignContent: "center",
                padding: "0px",
                backgroundColor: "grey",
                borderRadius: "1px",
                height: "15px",
                width: "120px",
                marginTop: "-12px",
                marginLeft: "40px",
                position: "relative",
                alignItems: "center"
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
