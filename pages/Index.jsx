'use strict';
import React from 'react';
import BaseStyles from '../styles/base.styles';
import StyleSheet from 'react-style';
import Title from '../components/Title.jsx';

let styles = StyleSheet.create({
  h2: {
    marginTop: '120px'
  },

  h5: {
    marginTop: '20px'
  }
});

class Index extends React.Component {
  render() {
    return (
      <div styles={[BaseStyles.container, { padding: '60px 15px' }]}>

        <Title importance={2}>PASSION</Title>
        <hr />
        <p>
          I have a desire to create a great scalable branding experience for companies. Branding is not just about a great logo, it also entails consistent look throughout a website or suite of products. A great style/branding guide makes the UX better, because you change core concepts and not just the surface design.
        </p>
        <p>
          Education, willingness to experiment and a desire towards craftsmanship makes up who I am. To be able to prove a thoery is more important than being able to win debates because of a silver-tongue.
        </p>


        <Title importance={2} styles={styles.h2}>EXPERIENCES</Title>
        <hr />
        <Title importance={5} styles={styles.h5}>Pearl Coffee <em>(June 2013 - Present)</em></Title>
        <ul className='list'>
          <li>Co-Founder, Design and Branding Strategist</li>
          <li>Designed the full experience of the Pearl Coffee brand.</li>
          <li>Focus on eductation as a large part of our marketing strategy.</li>
        </ul>

        <Title importance={5} styles={styles.h5}>Life Time Fitness <em>(April 2014 - Present)</em></Title>
        <ul className='list'>
          <li>Senior UX Developer / Senior Front-end Engineer / Senior Software Engineer</li>
          <li>React / Flux lead engineer.</li>
          <li>Functional Programming and Streaming system architectures.</li>
          <li>Focused on creating a style guide that both Engineers and Designers can work on as a point of hand off and documentation for branding consistency.</li>
        </ul>

        <Title importance={5} styles={styles.h5}>SpyFu <em>(May 2011 - April 2014)</em></Title>
        <ul className='list'>
          <li>UI/UX Designer</li>
          <li>Redesigned the entire front-end of SpyFu.com, had to work around the large data aspect.</li>
          <li>Set up processes such as a reliable CI / CD system for consisten deployments.</li>
          <li>Was a leader in helping direct the company with their vision.</li>
          <li>Build new products and helped design them around business models.</li>
        </ul>


        <Title importance={5} styles={styles.h5}>Universal UClick <em>(July 2010 - May 2011)</em></Title>
        <ul className='list'>
          <li>UI/UX Designer</li>
          <li>Worked with the auther of Doonsebury to create their website, helping them understand the difference between print and web design.</li>
          <li>Implemented large Ruby on Rails web apps.</li>
          <li>Designed database structures and software system to handle large file aggregation and to help optimize for both web and print solutions.</li>
        </ul>


        <Title importance={2} styles={styles.h2}>EDUCATION</Title>
        <Title importance={5} styles={styles.h5}>Bachelors of Fine Arts with an emphasis in Computer Animation</Title>
        <ul className='list'>
          <li>Missouri State University</li>
        </ul>


        <Title importance={2} styles={styles.h2}>SKILLS & READS</Title>
        <hr />
        <Title importance={2} styles={styles.h5}>Processes & Methodologies</Title>
        <ul className='list'>
          <li>Two-way Communication</li>
          <li>Ideation & Validation</li>
          <li>Business Analytics</li>
          <li>User Empathy</li>
          <li>Implementation</li>
          <li>Jobs to be Done</li>
          <li>User Testing</li>
          <li>The Hacker Way</li>
          <li>Agile / Scrum</li>
        </ul>

        <Title importance={5} styles={styles.h5}>Design & Product</Title>
        <ul className='list'>
          <li>UXPin and Wireframes</li>
          <li>Adobe Creative Suite: Photoshop, Illustrator, After Effects</li>
          <li>Sketch 3</li>
        </ul>

        <Title importance={5} styles={styles.h5}>Development & Engineering</Title>
        <ul className='list'>
          <li>JavaScript: React, Flux, BackboneJS, MV* Patterns</li>
          <li>LESS / SASS / CSS / HTML</li>
          <li>Scala, NodeJS, .NET, Ruby, Python, PHP and Java</li>
          <li>Object Oriented, Functional & Reactive Paradigms</li>
          <li>MySQL, Postgres, SQL Server, MongoDB, and Redis</li>
          <li>Bash Scripting, Docker, TeamCity, Jenkins, Octopus Deploy, TravisCI</li>
        </ul>

        <Title importance={5} styles={styles.h5}>Favorite Books</Title>
        <ul className='list'>
          <li>Don't make me Think</li>
          <li>Design of Everyday Things</li>
          <li>Emotional Design</li>
          <li>Thinking in Systems</li>
        </ul>

      </div>
    );
  }
}

export default Index;
