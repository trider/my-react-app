import Heading from './Heading.js';
import Section from './Section.js';
import './styles.css';


function Page1() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Heading level={2}>Heading</Heading>
      <Heading level={3}>Sub-heading</Heading>
      <Heading level={4}>Sub-sub-heading</Heading>
      <Heading level={5}>Sub-sub-sub-heading</Heading>
      <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
    </Section>
  );
}

function Page2() {
 return (
   <Section>
     <Heading level={1}>Title</Heading>
     <Section>
       <Heading level={2}>Heading</Heading>
       <Heading level={2}>Heading</Heading>
       <Heading level={2}>Heading</Heading>
       <Section>
         <Heading level={3}>Sub-heading</Heading>
         <Heading level={3}>Sub-heading</Heading>
         <Heading level={3}>Sub-heading</Heading>
         <Section>
           <Heading level={4}>Sub-sub-heading</Heading>
           <Heading level={4}>Sub-sub-heading</Heading>
           <Heading level={4}>Sub-sub-heading</Heading>
         </Section>
       </Section>
     </Section>
   </Section>
 );
}
export default function Page() {   

  return (
    <div>
      <Page1 />
      <Page2 />
    </div>
  );
};
