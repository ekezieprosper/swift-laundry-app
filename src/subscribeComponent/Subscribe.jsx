import React, { useContext } from 'react';
import "./Subscribe.css";
import SubscribeModal from '../components/SubscribeModal';
import { Context } from '../contextComponent/Context';

const SubscribeCard = ({ h1text, monthtext, plan, buttona, onClics }) => {
  return (
    <div className='subCardDiv' >
      <h1>{h1text}/ <samp>{monthtext}</samp></h1>
      <h3>{plan}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dolores aspernatur iusto.</p>
      <ul>
        <li>100% Customer satisfaction</li>
        <li>Free pick and delivery</li>
        <li>Affordable Price</li>
        <li>Easy payment</li>
        <li>Trust and Guarantee</li>
      </ul>
      <button onClick={onClics}>{buttona}</button>
    </div>
  );
};

const Subscribe = () => {
  const { showSub, setShowSub } = useContext(Context);

  const toggleSubscriptionModal = () => {
    setShowSub(!showSub);
  };

  return (
    <div className='subscribeMainDiv'>
      <article className='subscriptioMainDiv'>
        <SubscribeCard
          h1text={"25,000"}
          monthtext={"month"}
          plan={"Silver plan"}
          buttona={"Choose plan"}
          onClics={toggleSubscriptionModal}
        />
        <SubscribeCard
          h1text={"50,000"}
          monthtext={"year"}
          plan={"Gold plan"}
          buttona={"Choose plan"}
          onClics={toggleSubscriptionModal}
        />
      </article>
      {showSub ? <SubscribeModal /> : ""}
    </div>
  );
};

export default Subscribe;
