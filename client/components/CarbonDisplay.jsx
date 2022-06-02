import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch.jsx';

async function grabSomeOfTheirStuff(setter) {
  try {
    const response = await fetch('https://www.theworldcounts.com/embed/challenges/23');
    const rawText = await response.text();

    console.log({ rawText });

    const counterParser = /<script>\s*number_interval\((\d+(?:\.\d+)?),/;
    const matchResults = counterParser.exec(rawText);
    if (!matchResults) {
      throw new Error('Unable to parse anything.');
    }

    const [, startingValue] = matchResults;
    const cleaned = BigInt(startingValue.replace('.', ''));
    console.log(cleaned);
    // setter(cleaned);
  } catch (err) {
    console.error(err instanceof Error && err.stack ? err.stack : err);
  }
}

const CarbonDisplay = () => {
  const [responseJson, loading] = useFetch('https://www.theworldcounts.com/embed/challenges/23');
  const [timerCount, setTimerCount] = useState(BigInt(18_046_325_932));

  useEffect(() => {
    if (loading) grabSomeOfTheirStuff((value) => setTimerCount(value));
  }, [setTimerCount, grabSomeOfTheirStuff]);

  useEffect(() => {
    if (!loading) setTimeout(() => setTimerCount(timerCount + 1n), 20);
  });

  if (loading) {
    return null;
  }

  return (
    <div className="eco-counter-container">
      <p className="eco-counter-value">{timerCount.toLocaleString('en-US')}</p>
      <p className="eco-counter-label">Tons of CO2 emitted into the atmosphere</p>
      <p className="eco-counter-dislcaimer">(Globally, this year)</p>
    </div>
  );
};

export default CarbonDisplay;
