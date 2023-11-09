import React from 'react'
import './CardTabs.css'

const CardTabs = ({ 
        name, 
        pricePerMonth, 
        for1Year,
        storage, 
        bandwidth, 
        SSLCertificate,
        CPU,
        RAM,
        vCPUs,
        websiteLimit,
        emailAccounts,
        storagePerAccount,
        customDomain,
        spamProtection,
        monthlyVisits,
    }) => {
  return (
    <div className='CardTabs'>
        <div className="domain">
            {name} 
        </div>

        {storage ? <p className='storage'>Storage {storage}</p> : ""}
        {bandwidth ? <p className='storage'>Bandwidth {bandwidth}</p> : ""}
        {CPU ? <p className='storage'>CPU : {CPU}</p> : ""}
        {RAM ? <p className='storage'>RAM : {RAM}</p> : ""}
        {vCPUs ? <p className='storage'>vCPUs : {vCPUs}</p> : ""}
        {websiteLimit ? <p className='storage'>Website Limit : {websiteLimit}</p> : ""}
        {emailAccounts ? <p className='storage'>Email Accounts : {emailAccounts}</p> : ""}
        {storagePerAccount ? <p className='storage'>Storage per account : {storagePerAccount}</p> : ""}
        {monthlyVisits ? <p className='storage'>Monthly Visits : {monthlyVisits}</p> : ""}

        {SSLCertificate ? <p className='storage ssl'>SSL Certificate : {SSLCertificate ? "YES" : ""}</p> : ""}
        {customDomain ? <p className='storage ssl'>Custom Domain : {customDomain ? "YES" : ""}</p> : ""}
        {spamProtection ? <p className='storage ssl'>Span Protection : {spamProtection ? "YES" : ""}</p> : ""}


        <div className='marginTop'>
            <div className='allPrice'>
                <strong className='price'>${pricePerMonth}/yr</strong>
                <p className="for1Year">
                    Instead of ${for1Year}/yr
                </p>
            </div>

            <button className="buyNow">
                Buy Now
            </button>
        </div>

    </div>
  )
}

export default CardTabs