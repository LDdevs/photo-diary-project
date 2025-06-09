const BASE_URL = 'http://192.168.1.209:8081/api'; // use your actual IP address

export const createEntry = async (entry: any) => {
  const res = await fetch(`${BASE_URL}/entries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  });
  return await res.json();
};

export const getEntries = async () => {
  const res = await fetch(`${BASE_URL}/entries`);
  return await res.json();
};
