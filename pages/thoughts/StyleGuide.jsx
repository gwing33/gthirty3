'use strict';
import React from 'react';
import BaseStyles from '../../styles/base.styles.js';
import StyleSheet from 'react-style';
import Title from '../../components/Title.jsx';

let styles = StyleSheet.create({
  h2: {
    marginTop: '60px'
  },

  h5: {
    marginTop: '20px'
  }
});

class StyleGuide extends React.Component {
  render() {
    return (
      <div styles={[BaseStyles.container, { padding: '60px 15px' }]}>
        <Title>The Branding & Style Guidelines</Title>
        <hr />

        <Title importance={2} styles={styles.h2}>Visualizing and Documenting</Title>
        <p>
          Branding does not mean just a logo.
          It goes beyond that into the realm of consistency across an entire site which is why branding is a big indicator of user experience (UX).
        </p>

        <p>
          Branding & style guidelines define base concepts where changing a style also changes the underlying foundation.
          That foundation is made up of 3 things, rules, goals and process.
        </p>

        <Title importance={3}>THE RULES</Title>
        <hr />
        <h5 styles={styles.h5}>From the Designer's Perspective</h5>
        <p>
          Rules help creative people be...more creative.
          As obtuse as that sounds, when you have a rule to follow, you force yourself to think outside the box.
          That's where creativity thrives.
        </p>

        <h5 styles={styles.h5}>From the Engineer's Perspective</h5>
        <p>
          Engineers don't want to think too long about visual design.
          For some reason it hurts their head.
          This enables them to define the rule in code, then reference it.
          If the designer is changing the rule all the time, then the engineer will get mad, because engineers are lazy,
          they code so they don't have to do manual labor, changing rules are manual labor.
        </p>

        <h5 styles={styles.h5}>Rules Are and Are Not</h5>
        <p>
          What is a rule?
          To me, a rule is something I must abide by.
          It's something that is going to limit my range of thought.
          If I come up with some really creative approach and it's outside the rule, I have to think more about how I could make it work within the given rule set.
          Rules are not goals, hopes, or desires.
        </p>

        <Title importance={3}>THE GOALS</Title>
        <hr />
        <p>
          What does your site or app do? How can style guides help make it better?
          When you define a style guide up front, you're off loading that thought.
          That thought now is open to focusing on how to <i>drive your customers to what they want[<a href="#note_1">1</a>]</i>.
        </p>
        <p>
          Not only do style guides open up for thought but you get a holistic view of how your site looks in regards to those goals.
          Are all your components functioning in a way that would enable people to do what they need to do?
          A specific consistency will play a big role in drawing users in to your site emotionally.
        </p>


        <Title importance={3}>THE PROCESS</Title>
        <hr />
        <p>
          Finally, process. I love process.
          Process is hard to get right and it can easily throw everything into chaos.
          But a Style Guide defines a clear separation of concerns, and works as a contract between 2 parties that have historically not worked well together.
        </p>
        <p>
          Engineers can use a style guide as documentation for how to use components that designers have standardized.
          Designers can use it as a way to take advice from engineers for implementation purposes.
          It's easy for a designer to not understand code to the point they design things that are too far out of scope of what code can do easily.
          Maybe their design is great in a PSD, but when implemented, it lacks a certain usability finesse.
        </p>
        <p>
          Also, you can easily structure a company to have a body of people that are in charge of maintaining the rules which the style guides have defined.
          They are in charge of keeping them up-to-date and maintained, and taking requests for revisions.
          Requests should be well vetted and scrutinized before they are implimented.
          However, changes to the style guide should be welcomed.
        </p>

        <Title importance={3}>FINAL</Title>
        <hr />
        <p>
          There are a lot of people doing exactly this, tweet me your favorite Branding or Style Guide! @GThirty3
        </p>

        <Title importance={5} styles={styles.h5}>FOOTNOES</Title>
        <ol>
          <li id='note_1'>
            I believe changes should be made for the customers benefit, not the businesses.
            While they will reflect wholly upon the business, great UX is user focused, not market focused.
          </li>
        </ol>
      </div>
    );
  }
}

export default StyleGuide;
