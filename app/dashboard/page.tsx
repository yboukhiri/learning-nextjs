export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return <p>Dashboard Page</p>;
}
