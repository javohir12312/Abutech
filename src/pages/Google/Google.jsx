import React from 'react';

const Google = () => {
    return (
        <div>
            <ul className="nav nav-pills">
                <li><a target='_blank' href="https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.co.uk/%3Fgws_rd%3Dssl" className="colorfix"><button className="btn" role="button">Sign in</button></a></li>
                <li>
                    <a target='_blank' title="Google apps" className="firstsbuttons" href="https://www.google.co.uk/intl/en/options/"><img className="quad" src="http://www.englewoodschools.net/cms/lib8/CO01900647/Centricity/Domain/1009/GoogleAppsIcon.png" height="22" width="22" alt="Google Apps Icon" /></a>
                </li>
                <li><a target='_blank' className="firstsbuttons" href="https://www.google.co.uk/imghp?hl=en&tab=wi&ei=7sfqVtCHG6TgyQOjo7d4&ved=0EKouCBUoAQ">Images</a></li>
                <li><a target='_blank' className="firstsbuttons" href="https://mail.google.com/mail/?tab=wm">Gmail</a></li>
            </ul>
            <div className="page">
                <img className="logo" src="https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" />
                <br /><input id="searchme" className="search" title="Search" type="text" /><br />
                <div className="Bcontainer">
                    <div className="button left">Google Search</div>
                    <div className="button right">I'm Feeling Lucky</div>
                </div>
            </div>
            <footer className="nav nav-tabs">
                <ul className="bottomone rightone">
                    <li><a target="_blank" href="https://www.google.co.uk/preferences?hl=en">Settings</a></li>
                    <li><a target="_blank" href="https://www.google.co.uk/intl/en/policies/terms/?fg=1">Terms</a></li>
                    <li><a target="_blank" href="https://www.google.co.uk/intl/en/policies/privacy/?fg=1">Privacy</a></li>
                </ul>
                <ul className="leftone bottomone">
                    <li><a target="_blank" href="https://www.google.co.uk/intl/en/about.html?fg=1">About</a></li>
                    <li><a target="_blank" href="https://www.google.co.uk/services/?fg=1">Business</a></li>
                    <li><a target="_blank" href="https://www.google.co.uk/intl/en/ads/?fg=1">Advertising</a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Google;
