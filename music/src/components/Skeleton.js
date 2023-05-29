import ClassNames from 'classnames';

function Skeleton ({ times }) {
  const renderedBoxes = Array(times).fill(0).map((_, i) => {
    return <div key={i} />
  });
}

export default Skeleton;