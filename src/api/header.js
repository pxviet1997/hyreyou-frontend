export const authHeader = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  if (!token) return {};

  return { Authentication: `Bearer ${token}` };
};
