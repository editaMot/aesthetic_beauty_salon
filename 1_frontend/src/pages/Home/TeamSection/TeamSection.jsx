import React from 'react';
import './TeamSection.scss';
import team from '../../../data/team';
import TeamCard from '../../../component/atoms/TeamCard';

const TeamSection = () => {
  return (
    <section className="wrapper-team">
      <h2 className="heading">MEET OUR TEAM</h2>
      <div className="list">
        {team.map((specialist) => (
          <TeamCard
            key={specialist.name}
            img={specialist.img}
            name={specialist.name}
            workArea={specialist.workArea}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
