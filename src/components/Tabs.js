import React from 'react'

const Tabs = ({tabsList, activeTab, onTabClick}) => {
  return (
    <ul className="tabs-container">
      {tabsList.map(tab => (
        <li
          key={tab.tabId} // Added unique key
          className={`tab-item ${activeTab === tab.tabId ? 'active-tab' : ''}`}
          onClick={() => onTabClick(tab.tabId)}
        >
          {tab.displayText}
        </li>
      ))}
    </ul>
  )
}

export default Tabs
