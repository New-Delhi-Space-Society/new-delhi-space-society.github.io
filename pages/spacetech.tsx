import styled from "styled-components";

const SpacetechPage = styled.main`
  minHeight: calc(100vh - 150px);
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1;
    margin-bottom: 0rem;
  }
`;

function Spacetech() {
  return (
    <SpacetechPage>
      <h1>SpaceTech</h1>
      <h4>SpaceTech is an event for space enthusiasts.</h4>
      <p>
        Progress in technology means pushing the boundaries of what is possible,
        not only on earth, but also the final frontier — space. Just as
        biological systems undergo evolution when subjected to strenuous
        conditions which threaten their survival, computer systems and
        technology too evolve and become more sophisticated if subjected to
        extraordinary circumstances. And what is a more strenuous, more
        demanding environment than space?
      </p>
      <p>
        With this in mind, Exun Clan collaborates with the New Delhi Chapter
        of the prestigious National Space Society (USA) to give students the
        opportunity to explore the realms of space and its concurrence with
        technology. The event typically has multiple challenging rounds,
        building up to a final presentation round — with a twist!
      </p>
    </SpacetechPage>
  );
}

export default Spacetech;
