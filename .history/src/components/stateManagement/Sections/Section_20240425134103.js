// import { LevelContext } from './LevelContext.js';

// export default function Section({ level, children }) {
//   return (
//     <section className="section">
//       <LevelContext.Provider value={level}>
//         {children}
//       </LevelContext.Provider>
//     </section>
//   );
// }

import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section className={
      'section ' +
      (isFancy ? 'fancy' : '')
    }>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
// Compare this snippet from src/components/stateManagement/Sections/Section.js: