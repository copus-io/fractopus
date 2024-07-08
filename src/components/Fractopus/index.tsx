import styles from "./index.module.scss";

interface FractopusProps {
  isMobile?: boolean;
}

const Fractopus = (props: FractopusProps) => {
  const span1 = `Today's internet is an ancient ocean teeming with single-cell content.
          These single cells float around, get discovered by content consumers,
          and gather nutrients (exposure & financial income) for their growth.
          They form colonies to more effectively collect nutrition. While these
          colonies can become large and influential, they remain merely
          quantitative accumulations of single cells instead of complex
          organisms. To evolve into complex organisms, the single cells must
          start establishing connections and sharing nutrients. Such a
          transformation will give rise to a new creature in the internet ocean
          — Fractopus.`;
  const span2 = `
        Fractopus is a unique type of octopus that expands in a fractal
          structure. Unlike traditional octopuses with eight tentacles, a
          fractopus can have varying numbers of tentacles. Each tentacle is
          itself a self-similar fractopus. The size and maturity of a fractopus
          are gauged by the number of its tentacles. A mature fractopus can have
          thousands of tentacles and thus be connected to countless other
          fractal-fractopuses. A fractal-fractopus can even outgrow its source,
          provided it adds more tentacles.
    `;
  const span3 = `The term "opus" in "Fractopus" signifies that it's a content creature.
          It grows new tentacles only when new single cells (content) attach to
          it. Rather than seizing the single cells, a fractopus lures them by
          providing exposure, enabling them to be more easily discovered by
          content consumers. In return, the single cell commits to channeling a
          portion of its future nutrients to the fractopus. The size of this
          portion can be set either by the single cell or predefined by the
          fractopus as a joining criterion. A larger portion typically equates
          to better exposure.`;
  const span4 = `A single cell can link to multiple fractopuses and negotiate distinct
          agreements with each. These agreements foster natural selection among
          fractopuses because single cells will only connect with content that
          can offer valuable exposure. This encourages fractopuses to become
          valuable content providers and actively promote themselves. In doing
          so, they attract more single cells to become their tentacles,
          benefiting from their nutrients and that of their tentacles.
       `;
  const span5 = `A fractopus can capture nutrients with any part of its body since each
          nerve-ending in its tentacles is also a fractopus. Upon acquiring
          nutrients, it automatically funnels it to all connected fractopuses,
          retaining the remainder for itself. Most often, a source-fractopus
          also has its own sources and agreements. The nutrients are thus
          distributed according to these agreements, branching out until they
          flow through every fractopus directly or indirectly linked to the
          original capture.`;
  const span6 = `To ensure optimal efficiency, the nutrient flow should be as
          frictionless as possible. Likewise, content and agreements should be
          safeguarded from abuse and manipulation to maintain the health of the
          fractopus. Blockchain technology emerges as the best candidate to
          serve as the fractopus' nervous and immune systems, as well as its
          guarantee of freedom. A faster, more frictionless nervous system
          enables better movement, attracting more single cells. Additionally, a
          robust immune system is crucial for the secure storage of content and
          agreements. Also, a fractopus is not meant to be confined to an
          aquarium; it should enjoy freedom in a decentralized internet ocean.
      `;
  const span7 = `We can expect to see various fractopuses evolving in different areas
          of the internet ocean. As content creatures, they might focus on
          different themes, occasionally finding synergies. This allows for a
          "tentacle-shake," akin to a handshake but more complex. A
          tentacle-shake can connect multiple tentacles, merging fractopuses
          into a unified organism. Although this strengthens them by combining
          their nutritional, nervous, and immune systems, it also exposes them
          to each other's vulnerabilities. To mitigate this, a fractopus can
          sever its tentacles if they become redundant or compromised.`;

  const span8 = `Currently, the general internet experience revolves around searching and ingesting feeds, granting significant power to search engines and platforms to control the open ocean. As more single cells evolve into fractopuses, the power to create, connect, and curate content will be democratized. 
A novel internet experience is on the horizon.`;

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
