import Heading from './Heading.js';
import Section from './Section.js';
import ProfilePage from './Profile.js';
import './styles.css';

const props = {
  show:{
    page1:false,
    page2:false,
    page3:true,
    profile:true
  }
}


function Page1() {
  return (
    <Section>
      <Heading level={1}>Title 1</Heading>
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
     <Heading level={1}>Title 2</Heading>
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

function Page3() {
  return (
    <Section level={1}>
      <Heading>Title 3</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

export default function Page() {   

  return (
    <div>
      {props.show.page1 && <Page1/>}
      {props.show.page2 && <Page2/>}
      {props.show.page3 && <Page3/>}
      {props.show.profile && <ProfilePage/>}
    </div>
  );
};
