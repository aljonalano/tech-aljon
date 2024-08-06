import EditItems from '@/components/EditItem';

const getItemsById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/items/${id}`,
      {
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch items');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { item } = await getItemsById(id);
  const {
    title,
    description,
    addedBy,
    emailAddress,
    ingredients,
    instructions,
  } = item;

  return (
    <EditItems
      id={id}
      title={title}
      description={description}
      addedBy={addedBy}
      emailAddress={emailAddress}
      ingredients={ingredients}
      instructions={instructions}
    />
  );
}
