const BASE_URL = 'http://<your-ip>:5000/api'; // use your actual IP address

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
