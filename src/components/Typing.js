import React from 'react'
import Typist from 'react-typist';

const Typing = (props) => (
  <div className="TypistExample">
        <Typist
          className="TypistExample-header"
          avgTypingSpeed={40}
          startDelay={1000}
        >
          <a href="">{props.onTextChange}</a>
        </Typist>
      </div>
)
export default Typing
