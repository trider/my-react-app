import './fancy.css';

import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './CopyRight';

export default function MyFancy () {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}