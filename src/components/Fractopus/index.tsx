import styles from "./index.module.scss";

interface FractopusProps {
  isMobile?: boolean;
}

const Fractopus = (props: FractopusProps) => {
  const span1 = `Consider the ancient, single-celled organism. Floating through the primordial ocean, bouncing off billions of other single cells spawning from the same lineage, the organisms form colonies around sources of nutrition. Clumping together, these colonies grow massive, but not connected. They are merely accumulations of single cells - not a complex organism. Like this, the modern internet teems with billions of single-celled pieces of content hunting for nutrients: exposure and financial income. So they stack into towers; touching but not connected, related but each with a hidden ancestry.  However, evolution cannot be stopped. In the internet ocean, a complex organism has arrived: The Fractopus.`;
  const span2 = `Expanding into a fractal structure, each of the Fractopi’s tentacles is a self-similar Fractopus. The size and maturity of the Fractopus are gauged by the number of tentacles. A mature Fractopus can have thousands of tentacles, connecting to countless other fractal networks. Since a fractal-Fractopus may even outgrow its sources, the network size is truly boundless.`;
  const span3 = `To grow the network of tentacles, the Fractopus, “opus” meaning content, can join with new single cells. Connections provide exposure to content and more connections illuminate paths for consumers to discover. Like all organisms, the Fractopus needs nutrients. A portion of new connections’ resources are channeled - but the portion of the revenue can be set on a link by link basis. The links are a symbiosis. More shared nutrients equates to more exposure.`;
  const span4 = `Natural selection prevails. Agreements between new single cells and existing Fractopi will self-select; networks will seamlessly arrange and rearrange as connections offering increased exposure will incentivize constant evolution. Fractopi competing against each other ensures the most attractive Fractopus remains in sight of new single cells. So, after countless connections are linked, the agreed-upon nutrient share will flow from all nerve endings to throughout the network. As the network grows with sub-Fractopi joining endlessly, the nutrients branch throughout automatically.`;
  const span5 = `An evolutionary advantage of the Fractopus is the frictionless, secure nutrient flow throughout the network. The organism has a strong immune system - outside manipulation and abuse are resisted. Blockchain technology, serving as secure storage and robust communication, serve as the backbone protecting the Fractopus - the blockchain ensures better movement and a guarantee of freedom for the organism. The Fractopus cannot be confined to an aquarium; it enjoys freedom in a decentralized internet ocean.`;
  const span6 = `As Fractopi spread throughout the vast decentralized ocean, each may find niches the organism flourishes in. These theme-niches are not exclusive to one Fractopus - synergies arise in the form of a “tentacle-shake,” akin to a complex handshake. The tentacle-shake can multiply, merging Fractopi into a unified organism. Although this most often strengthens the entire Fractopus network, if certain tentacle connections are not desired, Fractopi can be severed in an ever-changing nature.`;
  const span7 = `Currently, the Internet is not interconnected. The individual cells exist as lone entities, floating without relation in an information ocean. The general internet experience revolves around searching and ingesting feeds, granting significant power to search engines and platforms to control the open ocean.`;
  const span8 = `As more single cells evolve into Fractopi, the power to create, connect, and curate content will be democratized. Disconnected information will become collective knowledge. A novel internet experience is on the horizon.`;

  return (
    <div className={styles.content1}>
      <h1>Fractopus</h1>
      <p>A Complex Organism Evolving from the Single Cells of the Internet</p>
      <div className={styles.text}>
        <span>{span1}</span>
        <span>{span2}</span>
        <span>{span3}</span>
        <span>{span4}</span>
        <span>{span5}</span>
        <span>{span6}</span>
        <span>{span7}</span>
        <span>{span8}</span>
      </div>
    </div>
  );
};

export default Fractopus;
