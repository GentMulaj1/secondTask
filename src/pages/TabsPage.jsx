import React from 'react'
import './TabsPage.css'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CardTabs from '../components/CardTabs';

import { domains, 
  webHostingPlans, 
  dedicatedServerPlans, 
  virtualCloudServerPlans,
  wordpressHostingPlans,
  emailHostingPlans,
  vpsHostingPlans,
  freeVPSHostingPlans } from './data'

const TabsPage = () => {
  return (
    <div>
      <Tabs>
        <TabList className="randomtest">
          <Tab >Domains</Tab>
          <Tab>Web Hosting</Tab>
          <Tab>Dedicated Servers</Tab>
          <Tab>Virtual Cloud Servers</Tab>
          <Tab>WordPress Hosting</Tab>
          <Tab>Email Hosting</Tab>
          <Tab>VPS Hosting Servers</Tab>
          <Tab>Free Hosting</Tab>
        </TabList>


        <TabPanel>
          <div className='CardsTabs'>
            {domains.map((domain) => (
              <CardTabs 
                name={domain.name}
                pricePerMonth={domain.pricePerMonth}
                for1Year={domain.for1Year}
              />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='CardsTabs'>
            {webHostingPlans.map((webHosting) => (
              <CardTabs 
                name={webHosting.name}
                pricePerMonth={webHosting.pricePerMonth}
                for1Year={webHosting.for1Year}
                storage={webHosting.storage}
                bandwidth={webHosting.bandwidth}
                domains={webHosting.domains}
                SSLCertificate={webHosting.SSLCertificate}
              />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="CardsTabs">
            {dedicatedServerPlans.map((serverPlan) => (
              <CardTabs 
                name={serverPlan.name}
                pricePerMonth={serverPlan.pricePerMonth}
                for1Year={serverPlan.for1Year}
                CPU={serverPlan.CPU}
                RAM={serverPlan.RAM}
                storage={serverPlan.storage}
                SSLCertificate={serverPlan.SSLCertificate}
              />
            ))}
          </div>
        </TabPanel>


        <TabPanel>
          <div className="CardsTabs">
            {virtualCloudServerPlans.map((virtualCloudServerPlan) => (
              <CardTabs 
                name={virtualCloudServerPlan.name}
                pricePerMonth={virtualCloudServerPlan.pricePerMonth}
                for1Year={virtualCloudServerPlan.for1Year}
                storage={virtualCloudServerPlan.storage}
                bandwidth={virtualCloudServerPlan.bandwidth}
                vCPUs={virtualCloudServerPlan.vCPUs}
              />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="CardsTabs">
            {wordpressHostingPlans.map((wordpressHostingPlan) => (
              <CardTabs 
                name={wordpressHostingPlan.name}
                pricePerMonth={wordpressHostingPlan.pricePerMonth}
                for1Year={wordpressHostingPlan.for1Year}
                storage={wordpressHostingPlan.storage}
                bandwidth={wordpressHostingPlan.bandwidth}
                websiteLimit={wordpressHostingPlan.websiteLimit}
                SSLCertificate={wordpressHostingPlan.SSLCertificate}
              />
            ))}
          </div>
        </TabPanel>


        <TabPanel>
          <div className="CardsTabs">
            {emailHostingPlans.map((emailHostingPlan) => (
              <CardTabs 
                name={emailHostingPlan.name}
                pricePerMonth={emailHostingPlan.pricePerMonth}
                for1Year={emailHostingPlan.for1Year}
                storagePerAccount={emailHostingPlan.storagePerAccount}
                emailAccounts={emailHostingPlan.emailAccounts}
                customDomain={emailHostingPlan.customDomain}
                spamProtection={emailHostingPlan.spamProtection}
              />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="CardsTabs">
            {vpsHostingPlans.map((vpsHostingPlan) => (
              <CardTabs 
                name={vpsHostingPlan.name}
                pricePerMonth={vpsHostingPlan.pricePerMonth}
                for1Year={vpsHostingPlan.for1Year}
                vCPUs={vpsHostingPlan.vCPUs}
                RAM={vpsHostingPlan.RAM}
                storage={vpsHostingPlan.storage}
                bandwidth={vpsHostingPlan.bandwidth}
              />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="CardsTabs">
            {freeVPSHostingPlans.map((freeVPSHostingPlan) => (
              <CardTabs 
                name={freeVPSHostingPlan.name}
                pricePerMonth={"Free"}
                for1Year={freeVPSHostingPlan.for1Year}
                vCPUs={freeVPSHostingPlan.vCPUs}
                RAM={freeVPSHostingPlan.RAM}
                storage={freeVPSHostingPlan.storage}
                bandwidth={freeVPSHostingPlan.bandwidth}
                monthlyVisits={freeVPSHostingPlan.monthlyVisits}
                SSLCertificate={freeVPSHostingPlan.SSLCertificate}
              />
            ))}
          </div>
        </TabPanel>
      </Tabs>

    </div>
  )
}

export default TabsPage