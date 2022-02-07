import fetch from 'unfetch';

export const fetchJson = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log('Error loading data', err);
    return null;
  }
};

export const fetchCsv = async (url) => {
  try {
    const response = await fetch(url);
    const csv = await response.text();
    return csv;
  } catch (err) {
    console.log('Error loading data', err);
    return null;
  }
};

export default {
  fetchJson,
  fetchCsv,
};
