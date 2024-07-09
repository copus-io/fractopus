import styles from "./index.module.scss";
import icData from "../../../public/assets/img/ic-data.webp";

const Protocol = () => {
  const p1 = `Fractopus is an on-chain protocol enabling URIs to create interconnections through percentage allocations. Such interconnections are created when the owner of a URI addresses other URIs as its sources and allocates a share percentage for each of them. (For example, URIa shares 30% with URIb and 20% with URIc with the rest kept to itself.) Additionally, the protocol forms an internet-scale graph established by each URI owner interconnecting in a peer-to-peer way. `;
  const span1 = `The protocol's name.`;
  const p2 = `“p": "fractopus"`;

  const span2 = `URI of the webpage that the URI owner wants to include in the fractopus network.`;
  const p3 = `"uri": "URI"`;

  const span3 = `For example, to connect this page to the Fractopus network, format as such: `;
  const p4 = `"uri":"https://www.fractopus.net/"`;

  const span4 = `List of URIs that the owner addresses as the sources for the subject URI and a percentage allocation for each URI.`;
  const p5 = `"src":[{"uri":"URI","shr":"Percentage"}]`;

  const span5 = ``;
  const p6 = `"src":[{"uri":"https://www.xanadu.net/",
  "shr":"0.1"},
  {"uri":"https://www.activism.net/
  cypherpunk/manifesto.html","shr":"0.05"}]
        `;
  const url = `https://www.activism.net/cypherpunk
  /manifesto.html`;

  const p7 = ` Finally, a string which contains the same Web3 wallet address as in the transaction's "From" field must be placed visibly on the designated URI page. Fractopus crawlers will match the string with the on-chain data to validate the ownership of the URI. `;
  const style = {
    color: "#2191fb",
    marginLeft: "50px",
  };
  return (
    <div className={styles.protocol}>
      <h1>Protocol</h1>
      <div className={styles.desc}>
        <p>{p1}</p>
        <p style={{ marginTop: "20px" }}>
          The protocol consists of the following fields:
        </p>
        <div
          style={{
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          <p>
            <span>{span1}</span>
            <br />
            <span style={style}>{p2}</span>
          </p>
          <p style={{ marginTop: "20px" }}>
            <span>{span2}</span>
            <br />

            <span style={style}>{p3}</span>
          </p>
          <p style={{ marginTop: "20px" }}>
            <span>{span3}</span>
            <br />

            <span>{p4}</span>
          </p>
          <p style={{ marginTop: "20px" }}>
            <span>{span4}</span>
            <br />

            <span style={style}>{p5}</span>
          </p>
          <p style={{ marginTop: "20px" }}>
            <span>
              For example, to address{" "}
              <a
                style={{
                  textDecoration: "underline",
                  display: "inline-block",
                }}
                href="https://www.xanadu.net/"
                target="_blank"
              >
                https://www.xanadu.net/
              </a>{" "}
              as a source and share 10% with it, and address{" "}
              <a
                style={{
                  textDecoration: "underline",
                  display: "inline-block",
                }}
                target="_blank"
                href="https://www.activism.net/cypherpunk/manifesto.html"
              >
                {url}
              </a>
              as a source and share 5% with it.format as such:
            </span>
            <br />

            <span>{p6}</span>
          </p>
          <p style={{ marginTop: "20px" }}>
            The sum of all percentages should be no greater than 1 to be
            considered valid.
          </p>
        </div>
        <p style={{ marginTop: "20px" }}>{p7}</p>
        <div
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img className={styles.icData} src={icData.src} alt="ic-data" />
          <p>Data flow structure</p>
        </div>
      </div>
    </div>
  );
};

export default Protocol;
