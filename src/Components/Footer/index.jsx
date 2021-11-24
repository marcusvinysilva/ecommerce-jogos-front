import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Container } from './styles';
import { students } from './students';

export const Footer = () => {
  return (
    <Container>
      <h3>JOIN US </h3>
      <section>
        {students.map((student, index) => (
          <div key={index}>
            <img src={student.src} alt={student.nome} />
            <span>
              <strong>{student.nome}</strong>
            </span>
            <a href={student.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size="25" color="white" />
            </a>
            <a href={student.github} target="_blank" rel="noreferrer">
              <FaGithub size="25" color="white" />
            </a>
          </div>
        ))}
      </section>

      <section>&copy; {new Date().getFullYear()}. All rights reserved</section>
    </Container>
  );
};
