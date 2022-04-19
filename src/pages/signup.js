import React, { useState } from 'react';
import * as styles from '../components/EmailListForm.module.css';

const EmailListForm = () => {

  
  const [setEmail] = useState('');
//   const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.EmailListForm}>
      <h2>Subscribe to my email list!</h2>
      <div className={styles.Wrapper}>
        <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default EmailListForm;
// import addToMailchimp from 'gatsby-plugin-mailchimp'

// export default class MyGatsbyComponent extends React.Component {
//     // tutorial from https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/
//     _handleSubmit = e => {
//         e.preventDefault();
//         addToMailchimp(email, listFields)
//         .then(data => {
//             console.log(data)
//         }).catch(() => {

//         })
//     }
//     render() {
//         return (
//             <form onSubmit={this._handleSubmit(email, {listFields})}>
                
//             </form>
//         )
//     }
// }