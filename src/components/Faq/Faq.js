import React, {Fragment} from 'react';
import { FaqComponent } from "../../components";

 const Faq = () => {
  return (
<Fragment>
<div className='px-10 lg:px-20 xl:px-32'>
<div className='text-4xl font-bold py-20'>FAQ on web design services</div>


<FaqComponent
faqtitle={'How does your web design firm process look like?'}
faqcontent={<div>
  <div>Our main web design process is divided into the following steps:</div>
  <div className='py-5'>
    <div className='font-bold'>1.Discovery</div>
    <div>Collecting Requirements: user personas, key use cases, competitive analysis, pain points, business goals, and industry best practices.</div>
  </div>

  <div className='py-5'>
    <div className='font-bold'>2.Audit</div>
    <div>Equity analysis, areas of opportunity, takeaway synthesis, WCAG 2.0 accessibility check.</div>
  </div>

  <div className='py-5'>
    <div className='font-bold'>3.Website structure  </div>
    <div>Information architecture, website map, a writing copy based on verbal identity. The latter can be produced from the existing brand personality or through a bigger brand strategy exercise.</div>
  </div>

  <div className='py-5'>
    <div className='font-bold'>4. Design concept and layout design  </div>
    <div>Visual positioning, mood-boards, 2-3 concepts of the key web pages, high-fidelity wireframes, interactive prototype.</div>
  </div>

  <div className='py-5'>
    <div className='font-bold'>5. Visual design  </div>
    <div>Web page visual design application.</div>
  </div>

  <div className='py-5'>
    <div className='font-bold'>6. Web structure & development</div>
    <div>Implementing all pages and content in CMS. Developing web pages and components.</div>
  </div>

  <div className='py-5'>
    <div className='font-bold'>7. Visual content  </div>
    <div>Iconography, illustrations, photography style.</div>
  </div>

  <div className='py-5'>
    <div className='font-bold'>8. Integrations  </div>
    <div>Third-party integrations: Google Tag, a/b testing tools, CRM, etc.</div>
  </div>


</div>}/>

<FaqComponent
faqtitle={'How much does it cost to hire your website design company?'}
faqcontent={<div>
  <div className='py-4'>Our pricing depends on the scope of work, team structure, and a rate card. Commonly, the hourly rates start from $100/per hour for a web designer and go up depending on the level of expertise. Generally, a 10-15 page marketing website of a tech startup starts from $50,000 and onwards.</div>
  <div className='py-4'>Our SMB and Enterprise clients typically hire us on Time & Materials models when our experts extend their in-house teams with our design and development capabilities. This approach allows us to be flexible with any changes and start fast.</div>
  <div className='py-4'>All our proposals and offers are based on our hourly rates, even though we work with a fixed budget most of the time.</div>
</div>}/>
<FaqComponent
faqtitle={'Who are your website design agency target customers?'}
faqcontent={<div>
  <div className='py-4'>We work with fast-growing tech companies and businesses that have a strong foundation in technology. We are an award-winning web design agency located in three major cities: New York, San Francisco, and Los Angeles. From day one, we were remote team members.</div>
  <div className='py-4'>Therefore our website agency is open to helping companies from any location.</div>
</div>}/>

<FaqComponent 
faqtitle={"How long does it take for your web designers to design a website?"}
faqcontent={<div>
   <div className='py-4'>The release of a website is just the beginning. We highly recommend hiring us for maintenance work so that we can have the opportunity to support constant iterative improvements. We have a retainer for maintenance work.</div>
   <div className='py-4'>Thus, any number of hours it takes for a developer to close new bug tasks, design fixes, and provide a seamless handoff between our teams will be covered. We support our clients' projects as long as it seems necessary.</div>
</div>}/>

<FaqComponent
faqtitle={'How is your web design agency different from the competitors?'}
faqcontent={<div>
   <div className='py-4'>Our team is intentionally small and slim. For more than ten years, we have worked with tech companies with unique technology leverage</div>
   <div className='py-4'>In addition to designing and developing websites, we act as a UI/UX design company, branding agency, app designers, web app development agency, and design systems studio. It allows us to provide much more valuable and complete results.</div>
</div>}/>
</div>
</Fragment>

  )
}

export default Faq;
