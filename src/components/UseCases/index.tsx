import styles from "./index.module.scss";
const UseCases = () => {
  return (
    <div className={styles.UseCases}>
      <h2>Use Cases</h2>
      <p><a href="https://copus.io" target="_blank">
        <span style={{ color: "#f23a00", fontSize: "20px" }}>Copus</span> </a>
      </p>
      <p style={{ marginTop: "20px" }}>
      Copus applies fractopus for revenue-sharing in a creative content network. Creative works often inspire one another as content creators often wish for a larger audience. Copus enables content creators to establish revenue-sharing / exposure exchanges between creative works. In this way, the inspired works (branches) receive exposure from the inspiring works (sources) by sharing a percentage of their future revenue. Each source can deliberately curate its branches by featuring, ranking, and removing them in a front-end sense, therefore, giving more or less exposure to the branches. Branches can also optimize their strategy by connecting to different sources and adjusting the percentage allocations for each source.
      </p>
    </div>
  );
};

export default UseCases;
