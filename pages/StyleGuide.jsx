'use strict';
import React from 'react';
import BaseStyles from '../styles/base.styles.js';
import StyleSheet from 'react-style';

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
        <h1>The Branding & Style Guidelines</h1>
        <hr />

        <h2 styles={styles.h2}>The High Level Overview of Visualizing and Documenting</h2>
        <p>
          Branding does not mean just a logo.
          It goes beyond that into the realm of consistency across an entire site.
          Which is why branding is a big key in user experience (UX).
        </p>

        <p>
          Branding & style guidelines define your base concepts, changing a style changes those underlying foundation.
          That foundation is made up of 3 things, rules, goals and process.
        </p>



        <h3>THE RULES</h3>
        <hr />
        <h5 styles={styles.h5}>From the Design's Perspective</h5>
        <p>
          Rules help creatives be...more creative.
          As obtuce as that sounds, when you have a rule to follow you force yourself to think outside the box.
          That outside the box thinking is where creativity thrives.
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
          If I come up with some really creative outside the rule, I have to think more about how I could make it work within the given rule set.
          Rules are not goals, hopes, or desires.
        </p>

        <h3>THE GOALS</h3>
        <hr />
        <p>
          What does your site or app do? How can style guides help make it better?
          When you define a style guide up front, you're off loading that thought.
          That thought now is open to focusing on how to <i>drive your customers to what they want[<a href="#note_1">1</a>]</i>.
        </p>
        <p>
          Not only do style guides open up for thought but you get a wholistic view of how your site looks in regards to those goals.
          Are all your components functining in a way that would enable people to do what they need to do?
          A specific consistency will play a big role in drawing users in to your site emotionally.
        </p>


        <h3>THE PROCESS</h3>
        <hr />
        <p>
          Finally, process. I love process.
          Process is hard to get right and it can easily throw everything into chaos.
          But a Style Guide defines a clear seperation of concerns, and works as a contract between 2 parties that have inherintly not worked well together.
        </p>
        <p>
          Engineers can use a style guide as documentation for how to use components that designers have standardized.
          Deisgners can use it as a way to take advice from engineers for implimentation purposes.
          It's easy for a designer to not understand code to the point they design things that are too far out of scope of what code can do easily.
          Maybe their design is great in a PSD, but when implimented, it lacks a certain usability finesse.
        </p>
        <p>
          Also, you can easily structure a company to have a body of people that are in charge of maintaining the rules that the style guides have defined.
          They are in charge of keeping them maintained, up-to-date and taking requests.
          Requests should be well vetted/scrutinized before implimented, but changing the style guide should be welcomed.
        </p>

        <h3>FINAL</h3>
        <hr />
        <p>
          There are a lot of people doing exactly this, tweet me your favorite Branding or Style Guide! @GThirty3
        </p>

        <h5 styles={styles.h5}>FOOTNOES</h5>
        <ol>
          <li id='note_1'>
            I believe changes should be made for customers benefits, not the businesses.
            While they will reflect wholely upon the business, great UX is user focused, not market focused.
          </li>
        </ol>
      </div>
    );
  }
}

export default StyleGuide;
