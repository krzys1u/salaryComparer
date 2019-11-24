import React from 'react';

const RIBBON_SRC = 'https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149';

export const GitHubRibbon = (props) => {
  return (
    <a href={props.repository} style={{float: 'right', position: 'absolute', right:0, top:0}}>
      <img src={RIBBON_SRC} width="149" height="149" data-recalc-dims="1" alt="Fork me on GitHub"/>
    </a>
  )
}