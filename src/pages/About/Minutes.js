import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './About.scss';

class Minutes extends Component {
  render() {
    return (
      <div className='container'>
        <div className='section'>
          <h1>Minutes</h1>

          <Tabs>
            <TabList>
              <Tab>03/18</Tab>
              <Tab>04/18</Tab>
              <Tab>05/18</Tab>
            </TabList>

            <TabPanel>
              <h3>Decisions</h3>
              <ul>
                <li>Tentative Date - first week of April 2019</li>
                <li>Estimated attendees: 1-300</li>
                <li>Board group will form an LLC</li>
              </ul>
              <h3>Action Items</h3>
              <ul>
                <li>Decide about whether or not you want to be a board member</li>
                <li>If so, decide if you prefer Bsides or our own CON</li>
              </ul>
              <h3>Future Discussion Items</h3>
              <ul>
                <li>CON Name - possibility Steak Sec</li>
                <li>CTF</li>
                <li>Venu</li>
              </ul>
              <h3>Next Meeting</h3>
              <ul>
                <li>April 10th at 5pm</li>
              </ul>
            </TabPanel>
            <TabPanel>
              <h3>Meeting Discussion</h3>
              <ul>
                <li>1700 Mtg begin</li>
                <li>1715 4 groups of areas: Logistics and Treasury, CTF, Marketing and Artwork, Outreach and Organization</li>
                <li>1720 Board members: Adam Schaal, Jason Lehr, Trent Williams, Aaron Gunning, Tim Vidas</li>
                <li>1723 interested in particular areas?</li>
                <li>1724 Discuss dates with the hotel coordinator to avoid rookie mistakes (Berkshire hathaway, college world series, etc)
                  <ul>
                    <li>still want the first week of April</li>
                    <li>Should be able to make 300 attendees (especially if we offer CPEs)</li>
                  </ul>
                </li>
                <li>1728 Logistic questions:
                  <ul>
                    <li>Is the meeting before the DC402 meetup acceptable?</li>
                    <li>Is a slack the best option for communications?</li>
                    <li>Get a GSuite group for documents/email warehousing</li>
                  </ul>
                </li>
                <li>1731 President and Treasurer must be named (and separate!) to sign financial documents (checks, etc).
                  <ul>
                    <li>Make simple bylaws (majority vote, the rules for voting should be decided in advance)</li>
                    <li>The LLC needs to set up the conference board</li>
                  </ul>
                </li>
                <li>1743 Discussion regarding the name of the conference (corncon, steaksec, etc)</li>
                <li>1735 We also need a code of conduct. Probably use the DC402 CoC</li>
                <li>1737 ISACA board: Pres, VP/Treasurer, Communications/Marketing Chair, Academics Chair, Website and Mobile App chair</li>
                <li>1739 Come to the next meeting with ideas, ready to split into groups to start working towards goals. We will have a 
                conference name at the end of the next meeting. </li>
                <li>1743 Added 'badges' to the Marketing and Artwork section</li>
                <li>1750 Mtg concluded</li>
              </ul>

              <h3>Addendum</h3>
                <b>Marketing and Artwork</b>
                <ul>
                  <li>Creating Website</li>
                  <li>Creating Logos</li>
                  <li>Swag</li>
                  <li>Lining up sponsors</li>
                  <li>Responsible for the entire conference feel</li>
                  <li>After party/mixer</li>
                  <li>Badges</li>
                </ul>

                <b>CTF</b>
                <ul>
                  <li>Choosing categories</li>
                  <li>Choosing level of difficulty</li>
                  <li>Curating and making challenges</li>
                  <li>Charge of running the CTF during the con</li>
                  <li>Hosting CTF and challs securely</li>
                </ul>

                <b>Logistics and Treasury</b>
                <ul>
                  <li>Choosing Venues</li>
                  <li>Choosing food (if any)</li>
                  <li>Working with hotel for room rate (if any)</li>
                  <li>Taking payments</li>
                  <li>Setting up rooms with AV</li>
                  <li>Setting up LLC</li>
                </ul>

                <b>Outreach</b>
                <ul>
                  <li>Lining up speakers</li>
                  <li>Lining up villages</li>
                  <li>Planning event - rooms, speakers, etc </li>
                  <li>Reaching out to local groups, local colleges</li>
                  <li>Reaching out on Twitter to large presences</li>
                </ul>
            </TabPanel>
            <TabPanel>
              <h2></h2>
            </TabPanel>
          </Tabs>



        </div>
      </div>
    );
  }
}

export default Minutes;