import React from 'react'

function Header() {
  return (
    <div className='header'>
      <img src="#" alt="logo" />
      <nav>
        {/* Simple Format , Modify according to you */}
        <ul>
            <select name="AIML" id="">
              <option value="">AIMl</option>
              <option value="">Discrete</option>
              <option value="">Stats</option>
              <option value="">DLD</option>
              <option value="">OOPs</option>
              <option value="">AI</option>
            </select>
            {/* Choose either above or below method  */}
            <li>CSDS</li>
            <li>CSBS</li>
            <li>Previous Year</li>
            {/* Add more options if possible */}
        </ul>
      </nav>
    </div>
  )
}

export default Header
