import React from 'react';

export default function Debug({debugMe}) {
  console.log('My debug Value: ' + debugMe);
  return <div>{debugMe}</div>;
}