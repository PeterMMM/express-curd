export default function getSweets() {
  return async () => {
    const response = await fetch('http://localhost:3000/juice');
    const data = await response.json();
    return data;
  }
}
