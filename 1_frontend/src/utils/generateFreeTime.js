import useFetch from '../hooks/useFetch';
import generateWorkingHours from './generateWorkingHours';

const generateFreeTime = (dateValue) => {
  const { clients } = useFetch('http://localhost:5000/api/clients');

  const dates = new Set(
    Object.values(clients)
      .filter((client) => client.date.slice(0, 10) == dateValue)
      .map((client) => client.time),
  );
  const visitationTime = generateWorkingHours(8, 17);

  let freeTime = visitationTime.filter((time) => !dates.has(time));

  return freeTime;
};

export default generateFreeTime;
